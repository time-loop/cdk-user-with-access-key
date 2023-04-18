import { aws_iam, aws_kms, aws_secretsmanager, RemovalPolicy, SecretValue } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Namer } from 'multi-convention-namer';

/**
 * We have some demand for CI/CD type users.
 * These usually have access keys which are pushed to GitHub Actions or CircleCI, etc.
 * This construct is intended to provide IaC for that type of IAM user.
 * This is a long way from being as elegant as the approach described at
 * https://awsteele.com/blog/2021/09/15/aws-federation-comes-to-github-actions.html
 * and implemented in https://github.com/askulkarni2/cdk-gh-aws-oidc-connect
 * but... baby steps.
 */

/**
 * We must use this interface because otherwise, using strictly
 * `aws_iam.IGrantable` results in cyclic dependencies if the grantable
 * resource is created in the same Stack as the secret.
 * Yeah, it's ugly...but it's what we've got to work with.
 */
export interface SecretGrantees {
  /**
   * @default []
   */
  readonly roles?: aws_iam.IRole[];
  /**
   * @default []
   */
  readonly users?: aws_iam.IUser[];
  /**
   * @default []
   */
  readonly groups?: aws_iam.IGroup[];
}

export interface UserWithAccessKeyProps extends aws_iam.UserProps {
  /**
   * @default undefined - generate a KMS key.
   */
  readonly encryptionKey?: aws_kms.IKey;
  /**
   * Would you like us to grant read on the credentialsSecret to anyone?
   *
   * @default [] - no grantees
   */
  readonly grantees?: SecretGrantees;
  /**
   * @default undefined - have CDK generate an ugly unique secret name
   */
  readonly secretName?: string;
}

export class UserWithAccessKey extends aws_iam.User {
  readonly credentialsSecret: aws_secretsmanager.ISecret;
  readonly encryptionKey: aws_kms.IKey;

  constructor(scope: Construct, id: Namer, props?: UserWithAccessKeyProps) {
    super(scope, id.pascal, props);

    this.encryptionKey =
      props?.encryptionKey ??
      new aws_kms.Key(this, 'Key', {
        description: `Key for managing access to ${id.pascal} secret credentials.`,
        removalPolicy: RemovalPolicy.DESTROY,
      });

    this.applyRemovalPolicy(RemovalPolicy.DESTROY);

    const accessKey = new aws_iam.AccessKey(this, 'AccessKey', { user: this });
    accessKey.applyRemovalPolicy(RemovalPolicy.DESTROY);

    const secretStringValue = SecretValue.unsafePlainText(
      JSON.stringify({
        accessKeyId: accessKey.accessKeyId,
        secretAccessKey: accessKey.secretAccessKey.unsafeUnwrap(),
      }),
    );

    this.credentialsSecret = new aws_secretsmanager.Secret(this, 'Secret', {
      description: `IAM Credentials for ${id.pascal} access.`,
      encryptionKey: this.encryptionKey,
      removalPolicy: RemovalPolicy.DESTROY,
      secretName: props?.secretName,
      secretStringValue,
    });

    const policy = new aws_iam.ManagedPolicy(this, new Namer(['secret', 'read', 'access']).pascal, {
      statements: [
        new aws_iam.PolicyStatement({
          sid: 'ReadAccess',
          actions: ['DescribeSecret', 'GetSecretValue'].map((a) => `secretsmanager:${a}`),
          resources: [this.credentialsSecret.secretFullArn!],
        }),
      ],
    });

    if (props?.grantees) {
      (props.grantees.groups ?? []).forEach((grantableGroup) => policy.attachToGroup(grantableGroup));
      (props.grantees.roles ?? []).forEach((grantableRole) => policy.attachToRole(grantableRole));
      (props.grantees.users ?? []).forEach((grantableUser) => policy.attachToUser(grantableUser));
    }
  }
}

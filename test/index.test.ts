import { App, Stack, assertions, aws_iam, aws_secretsmanager, aws_kms, CfnElement, Resource } from 'aws-cdk-lib';
import { Namer } from 'multi-convention-namer';

import * as CuT from '../src';

const name = new Namer(['test']);

export function getLogicalId(resource: Resource): string {
  return resource.stack.getLogicalId(resource.node.defaultChild as CfnElement);
}

describe('UserWithAccessKey', () => {
  describe('defaults', () => {
    const app = new App();
    const stack = new Stack(app, 'TestStack');
    // WHEN
    const userWithAccessKey = new CuT.userWithAccessKey.UserWithAccessKey(stack, name);
    // THEN
    const template = assertions.Template.fromStack(stack);

    test('creates resources', () => {
      ['AWS::IAM::AccessKey', 'AWS::IAM::User', 'AWS::KMS::Key', 'AWS::SecretsManager::Secret'].forEach((r) =>
        template.resourceCountIs(r, 1),
      );
    });

    test('exposes secret', () => {
      // This knows a little too much, but... I don't see a better solution.
      expect(userWithAccessKey.credentialsSecret).toBeInstanceOf(aws_secretsmanager.Secret);
    });

    test('exposes kms key', () => {
      expect(userWithAccessKey.encryptionKey).toBeInstanceOf(aws_kms.Key);
    });
  });

  describe('options', () => {
    test('encryptionKey', () => {
      const app = new App();
      const keyStack = new Stack(app, 'KeyStack');
      const mockKey = new aws_kms.Key(keyStack, 'MockKey');
      const stack = new Stack(app, 'TestStack');
      new CuT.userWithAccessKey.UserWithAccessKey(stack, name, {
        encryptionKey: mockKey,
      });
      const template = assertions.Template.fromStack(stack);
      template.resourceCountIs('AWS::KMS::Key', 0); // Did NOT create the KMS key.
    });

    test('with grantees', () => {
      const app = new App();
      const stack = new Stack(app);

      const role = new aws_iam.Role(stack, 'testRole', {
        assumedBy: new aws_iam.AnyPrincipal(),
      });
      const user = new aws_iam.User(stack, 'testUser');
      const group = new aws_iam.Group(stack, 'testGroup');

      // WHEN
      new CuT.userWithAccessKey.UserWithAccessKey(stack, name, {
        grantees: {
          roles: [role],
          users: [user],
          groups: [group],
        },
      });
      // THEN
      const template = assertions.Template.fromStack(stack);

      // Verify the expected grant is applied to the expected grantees
      template.hasResourceProperties('AWS::IAM::ManagedPolicy', {
        PolicyDocument: {
          Statement: [
            {
              // Order matters here. Do not switch it around or the test will fail.
              // Array matching must be exact. No obvious way around this.
              Action: ['secretsmanager:DescribeSecret', 'secretsmanager:GetSecretValue'],
            },
          ],
        },
        Roles: [{ Ref: getLogicalId(role) }],
        Users: [{ Ref: getLogicalId(user) }],
        Groups: [{ Ref: getLogicalId(group) }],
      });
    });

    test('with grantees.groups only', () => {
      const app = new App();
      const stack = new Stack(app);
      const group = new aws_iam.Group(stack, 'testGroup');

      // WHEN
      new CuT.userWithAccessKey.UserWithAccessKey(stack, name, {
        grantees: {
          groups: [group],
        },
      });
      // THEN
      const template = assertions.Template.fromStack(stack);

      // Verify the expected grant is applied to the expected grantees
      template.hasResourceProperties('AWS::IAM::ManagedPolicy', {
        PolicyDocument: {
          Statement: [
            {
              // Order matters here. Do not switch it around or the test will fail.
              // Array matching must be exact. No obvious way around this.
              Action: ['secretsmanager:DescribeSecret', 'secretsmanager:GetSecretValue'],
            },
          ],
        },
        Groups: [{ Ref: getLogicalId(group) }],
      });
    });

    test('with grantees.roles only', () => {
      const app = new App();
      const stack = new Stack(app);

      const role = new aws_iam.Role(stack, 'testRole', {
        assumedBy: new aws_iam.AnyPrincipal(),
      });
      // WHEN
      new CuT.userWithAccessKey.UserWithAccessKey(stack, name, {
        grantees: {
          roles: [role],
        },
      });
      // THEN
      const template = assertions.Template.fromStack(stack);

      // Verify the expected grant is applied to the expected grantees
      template.hasResourceProperties('AWS::IAM::ManagedPolicy', {
        PolicyDocument: {
          Statement: [
            {
              // Order matters here. Do not switch it around or the test will fail.
              // Array matching must be exact. No obvious way around this.
              Action: ['secretsmanager:DescribeSecret', 'secretsmanager:GetSecretValue'],
            },
          ],
        },
        Roles: [{ Ref: getLogicalId(role) }],
      });
    });

    test('with grantees.users only', () => {
      const app = new App();
      const stack = new Stack(app);
      const user = new aws_iam.User(stack, 'testUser');

      new CuT.userWithAccessKey.UserWithAccessKey(stack, name, {
        grantees: {
          users: [user],
        },
      });
      // THEN
      const template = assertions.Template.fromStack(stack);

      // Verify the expected grant is applied to the expected grantees
      template.hasResourceProperties('AWS::IAM::ManagedPolicy', {
        PolicyDocument: {
          Statement: [
            {
              // Order matters here. Do not switch it around or the test will fail.
              // Array matching must be exact. No obvious way around this.
              Action: ['secretsmanager:DescribeSecret', 'secretsmanager:GetSecretValue'],
            },
          ],
        },
        Users: [{ Ref: getLogicalId(user) }],
      });
    });
  });
});

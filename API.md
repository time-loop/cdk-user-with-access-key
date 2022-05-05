# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserWithAccessKey <a name="UserWithAccessKey" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey"></a>

#### Initializers <a name="Initializers" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.Initializer"></a>

```typescript
import { userWithAccessKey } from '@time-loop/cdk-user-with-access-key'

new userWithAccessKey.UserWithAccessKey(scope: Construct, id: Namer, props?: UserWithAccessKeyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.Initializer.parameter.id">id</a></code> | <code>multi-convention-namer.Namer</code> | *No description.* |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.Initializer.parameter.props">props</a></code> | <code>@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.Initializer.parameter.id"></a>

- *Type:* multi-convention-namer.Namer

---

##### `props`<sup>Optional</sup> <a name="props" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.Initializer.parameter.props"></a>

- *Type:* @time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.addManagedPolicy">addManagedPolicy</a></code> | Attaches a managed policy to the user. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.addToGroup">addToGroup</a></code> | Adds this user to a group. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.addToPolicy">addToPolicy</a></code> | Add to the policy of this principal. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.addToPrincipalPolicy">addToPrincipalPolicy</a></code> | Adds an IAM statement to the default policy. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.attachInlinePolicy">attachInlinePolicy</a></code> | Attaches a policy to this user. |

---

##### `toString` <a name="toString" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addManagedPolicy` <a name="addManagedPolicy" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.addManagedPolicy"></a>

```typescript
public addManagedPolicy(policy: IManagedPolicy): void
```

Attaches a managed policy to the user.

###### `policy`<sup>Required</sup> <a name="policy" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.addManagedPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

The managed policy to attach.

---

##### `addToGroup` <a name="addToGroup" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.addToGroup"></a>

```typescript
public addToGroup(group: IGroup): void
```

Adds this user to a group.

###### `group`<sup>Required</sup> <a name="group" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.addToGroup.parameter.group"></a>

- *Type:* aws-cdk-lib.aws_iam.IGroup

---

##### `addToPolicy` <a name="addToPolicy" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.addToPolicy"></a>

```typescript
public addToPolicy(statement: PolicyStatement): boolean
```

Add to the policy of this principal.

###### `statement`<sup>Required</sup> <a name="statement" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.addToPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `addToPrincipalPolicy` <a name="addToPrincipalPolicy" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.addToPrincipalPolicy"></a>

```typescript
public addToPrincipalPolicy(statement: PolicyStatement): AddToPrincipalPolicyResult
```

Adds an IAM statement to the default policy.

###### `statement`<sup>Required</sup> <a name="statement" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.addToPrincipalPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `attachInlinePolicy` <a name="attachInlinePolicy" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.attachInlinePolicy"></a>

```typescript
public attachInlinePolicy(policy: Policy): void
```

Attaches a policy to this user.

###### `policy`<sup>Required</sup> <a name="policy" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.attachInlinePolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.Policy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.fromUserArn">fromUserArn</a></code> | Import an existing user given a user ARN. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.fromUserAttributes">fromUserAttributes</a></code> | Import an existing user given user attributes. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.fromUserName">fromUserName</a></code> | Import an existing user given a username. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.isConstruct"></a>

```typescript
import { userWithAccessKey } from '@time-loop/cdk-user-with-access-key'

userWithAccessKey.UserWithAccessKey.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.isResource"></a>

```typescript
import { userWithAccessKey } from '@time-loop/cdk-user-with-access-key'

userWithAccessKey.UserWithAccessKey.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromUserArn` <a name="fromUserArn" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.fromUserArn"></a>

```typescript
import { userWithAccessKey } from '@time-loop/cdk-user-with-access-key'

userWithAccessKey.UserWithAccessKey.fromUserArn(scope: Construct, id: string, userArn: string)
```

Import an existing user given a user ARN.

If the ARN comes from a Token, the User cannot have a path; if so, any attempt
to reference its username will fail.

###### `scope`<sup>Required</sup> <a name="scope" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.fromUserArn.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.fromUserArn.parameter.id"></a>

- *Type:* string

construct id.

---

###### `userArn`<sup>Required</sup> <a name="userArn" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.fromUserArn.parameter.userArn"></a>

- *Type:* string

the ARN of an existing user to import.

---

##### `fromUserAttributes` <a name="fromUserAttributes" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.fromUserAttributes"></a>

```typescript
import { userWithAccessKey } from '@time-loop/cdk-user-with-access-key'

userWithAccessKey.UserWithAccessKey.fromUserAttributes(scope: Construct, id: string, attrs: UserAttributes)
```

Import an existing user given user attributes.

If the ARN comes from a Token, the User cannot have a path; if so, any attempt
to reference its username will fail.

###### `scope`<sup>Required</sup> <a name="scope" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.fromUserAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.fromUserAttributes.parameter.id"></a>

- *Type:* string

construct id.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.fromUserAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_iam.UserAttributes

the attributes of the user to import.

---

##### `fromUserName` <a name="fromUserName" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.fromUserName"></a>

```typescript
import { userWithAccessKey } from '@time-loop/cdk-user-with-access-key'

userWithAccessKey.UserWithAccessKey.fromUserName(scope: Construct, id: string, userName: string)
```

Import an existing user given a username.

###### `scope`<sup>Required</sup> <a name="scope" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.fromUserName.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.fromUserName.parameter.id"></a>

- *Type:* string

construct id.

---

###### `userName`<sup>Required</sup> <a name="userName" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.fromUserName.parameter.userName"></a>

- *Type:* string

the username of the existing user to import.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.assumeRoleAction">assumeRoleAction</a></code> | <code>string</code> | When this Principal is used in an AssumeRole policy, the action to use. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.policyFragment">policyFragment</a></code> | <code>aws-cdk-lib.aws_iam.PrincipalPolicyFragment</code> | Return the policy fragment that identifies this principal in a Policy. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.userArn">userArn</a></code> | <code>string</code> | An attribute that represents the user's ARN. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.userName">userName</a></code> | <code>string</code> | An attribute that represents the user name. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | Returns the permissions boundary attached  to this user. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.principalAccount">principalAccount</a></code> | <code>string</code> | The AWS account ID of this principal. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.credentialsSecret">credentialsSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `assumeRoleAction`<sup>Required</sup> <a name="assumeRoleAction" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.assumeRoleAction"></a>

```typescript
public readonly assumeRoleAction: string;
```

- *Type:* string

When this Principal is used in an AssumeRole policy, the action to use.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `policyFragment`<sup>Required</sup> <a name="policyFragment" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.policyFragment"></a>

```typescript
public readonly policyFragment: PrincipalPolicyFragment;
```

- *Type:* aws-cdk-lib.aws_iam.PrincipalPolicyFragment

Return the policy fragment that identifies this principal in a Policy.

---

##### `userArn`<sup>Required</sup> <a name="userArn" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.userArn"></a>

```typescript
public readonly userArn: string;
```

- *Type:* string

An attribute that represents the user's ARN.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

An attribute that represents the user name.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

Returns the permissions boundary attached  to this user.

---

##### `principalAccount`<sup>Optional</sup> <a name="principalAccount" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.principalAccount"></a>

```typescript
public readonly principalAccount: string;
```

- *Type:* string

The AWS account ID of this principal.

Can be undefined when the account is not known
(for example, for service principals).
Can be a Token - in that case,
it's assumed to be AWS::AccountId.

---

##### `credentialsSecret`<sup>Required</sup> <a name="credentialsSecret" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.credentialsSecret"></a>

```typescript
public readonly credentialsSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---


## Structs <a name="Structs" id="Structs"></a>

### SecretGrantees <a name="SecretGrantees" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.SecretGrantees"></a>

We must use this interface because otherwise, using strictly `aws_iam.IGrantable` results in cyclic dependencies if the grantable resource is created in the same Stack as the secret. Yeah, it's ugly...but it's what we've got to work with.

#### Initializer <a name="Initializer" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.SecretGrantees.Initializer"></a>

```typescript
import { userWithAccessKey } from '@time-loop/cdk-user-with-access-key'

const secretGrantees: userWithAccessKey.SecretGrantees = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.SecretGrantees.property.groups">groups</a></code> | <code>aws-cdk-lib.aws_iam.IGroup[]</code> | *No description.* |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.SecretGrantees.property.roles">roles</a></code> | <code>aws-cdk-lib.aws_iam.IRole[]</code> | *No description.* |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.SecretGrantees.property.users">users</a></code> | <code>aws-cdk-lib.aws_iam.IUser[]</code> | *No description.* |

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.SecretGrantees.property.groups"></a>

```typescript
public readonly groups: IGroup[];
```

- *Type:* aws-cdk-lib.aws_iam.IGroup[]
- *Default:* []

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.SecretGrantees.property.roles"></a>

```typescript
public readonly roles: IRole[];
```

- *Type:* aws-cdk-lib.aws_iam.IRole[]
- *Default:* []

---

##### `users`<sup>Optional</sup> <a name="users" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.SecretGrantees.property.users"></a>

```typescript
public readonly users: IUser[];
```

- *Type:* aws-cdk-lib.aws_iam.IUser[]
- *Default:* []

---

### UserWithAccessKeyProps <a name="UserWithAccessKeyProps" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps"></a>

#### Initializer <a name="Initializer" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.Initializer"></a>

```typescript
import { userWithAccessKey } from '@time-loop/cdk-user-with-access-key'

const userWithAccessKeyProps: userWithAccessKey.UserWithAccessKeyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.groups">groups</a></code> | <code>aws-cdk-lib.aws_iam.IGroup[]</code> | Groups to add this user to. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.managedPolicies">managedPolicies</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy[]</code> | A list of managed policies associated with this role. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.password">password</a></code> | <code>aws-cdk-lib.SecretValue</code> | The password for the user. This is required so the user can access the AWS Management Console. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.passwordResetRequired">passwordResetRequired</a></code> | <code>boolean</code> | Specifies whether the user is required to set a new password the next time the user logs in to the AWS Management Console. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.path">path</a></code> | <code>string</code> | The path for the user name. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | AWS supports permissions boundaries for IAM entities (users or roles). |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.userName">userName</a></code> | <code>string</code> | A name for the IAM user. |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.grantees">grantees</a></code> | <code>@time-loop/cdk-user-with-access-key.userWithAccessKey.SecretGrantees</code> | Would you like us to grant read on the credentialsSecret to anyone? |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.groups"></a>

```typescript
public readonly groups: IGroup[];
```

- *Type:* aws-cdk-lib.aws_iam.IGroup[]
- *Default:* No groups.

Groups to add this user to.

You can also use `addToGroup` to add this
user to a group.

---

##### `managedPolicies`<sup>Optional</sup> <a name="managedPolicies" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.managedPolicies"></a>

```typescript
public readonly managedPolicies: IManagedPolicy[];
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy[]
- *Default:* No managed policies.

A list of managed policies associated with this role.

You can add managed policies later using
`addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName(policyName))`.

---

##### `password`<sup>Optional</sup> <a name="password" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.password"></a>

```typescript
public readonly password: SecretValue;
```

- *Type:* aws-cdk-lib.SecretValue
- *Default:* User won't be able to access the management console without a password.

The password for the user. This is required so the user can access the AWS Management Console.

You can use `SecretValue.plainText` to specify a password in plain text or
use `secretsmanager.Secret.fromSecretAttributes` to reference a secret in
Secrets Manager.

---

##### `passwordResetRequired`<sup>Optional</sup> <a name="passwordResetRequired" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.passwordResetRequired"></a>

```typescript
public readonly passwordResetRequired: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether the user is required to set a new password the next time the user logs in to the AWS Management Console.

If this is set to 'true', you must also specify "initialPassword".

---

##### `path`<sup>Optional</sup> <a name="path" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string
- *Default:* /

The path for the user name.

For more information about paths, see IAM
Identifiers in the IAM User Guide.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy
- *Default:* No permissions boundary.

AWS supports permissions boundaries for IAM entities (users or roles).

A permissions boundary is an advanced feature for using a managed policy
to set the maximum permissions that an identity-based policy can grant to
an IAM entity. An entity's permissions boundary allows it to perform only
the actions that are allowed by both its identity-based policies and its
permissions boundaries.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html)

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string
- *Default:* Generated by CloudFormation (recommended)

A name for the IAM user.

For valid values, see the UserName parameter for
the CreateUser action in the IAM API Reference. If you don't specify a
name, AWS CloudFormation generates a unique physical ID and uses that ID
for the user name.

If you specify a name, you cannot perform updates that require
replacement of this resource. You can perform updates that require no or
some interruption. If you must replace the resource, specify a new name.

If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to
acknowledge your template's capabilities. For more information, see
Acknowledging IAM Resources in AWS CloudFormation Templates.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* undefined - generate a KMS key.

---

##### `grantees`<sup>Optional</sup> <a name="grantees" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.grantees"></a>

```typescript
public readonly grantees: SecretGrantees;
```

- *Type:* @time-loop/cdk-user-with-access-key.userWithAccessKey.SecretGrantees
- *Default:* [] - no grantees

Would you like us to grant read on the credentialsSecret to anyone?

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKeyProps.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string
- *Default:* undefined - have CDK generate an ugly unique secret name

---




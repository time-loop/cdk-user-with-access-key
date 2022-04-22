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

---

##### `toString` <a name="toString" id="@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

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

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-user-with-access-key.userWithAccessKey.UserWithAccessKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
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




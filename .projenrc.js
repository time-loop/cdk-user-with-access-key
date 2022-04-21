const { clickupCdk } = require('@time-loop/clickup-projen');
const project = new clickupCdk.ClickUpCdkConstructLibrary({
  author: 'Andrew Hammond',
  authorAddress: '445764+ahammond@users.noreply.github.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  devDeps: ['@time-loop/clickup-projen'],
  name: 'cdk-user-with-access-key',
  repositoryUrl: 'https://github.com/445764+ahammond/cdk-user-with-access-key.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();

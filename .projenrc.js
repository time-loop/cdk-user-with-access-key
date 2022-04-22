const { clickupCdk } = require('@time-loop/clickup-projen');

const bundledDeps = [];
const peerDeps = [];

const project = new clickupCdk.ClickUpCdkConstructLibrary({
  name: 'cdk-user-with-access-key',

  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  licensed: true,

  bundledDeps,
  deps: [...bundledDeps, 'cdk-iam-floyd'],
  devDeps: [...peerDeps, '@time-loop/clickup-projen'],

  repositoryUrl: '', // leverage default
  authorName: '', // leverage default
  authorAddress: '', // leverage default
});
project.synth();

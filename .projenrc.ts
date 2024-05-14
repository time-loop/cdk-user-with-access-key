import { clickupCdk } from '@time-loop/clickup-projen';
import { javascript } from 'projen';

const project = new clickupCdk.ClickUpCdkConstructLibrary({
  name: 'cdk-user-with-access-key',

  cdkVersion: '2.23.0',
  defaultReleaseBranch: 'main',
  licensed: true,
  projenrcTs: true,
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: '9',

  deps: [
    'multi-convention-namer',
    // 'source-map@^0.7.4', // CLK-393642 and https://github.com/mozilla/source-map/issues/454
  ],
  devDeps: ['@time-loop/clickup-projen'],

  repositoryUrl: '', // leverage default
  author: '', // leverage default
  authorAddress: '', // leverage default
});
project.synth();

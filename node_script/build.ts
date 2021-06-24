const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const util = require('util');
const chalk = require('chalk');
const semverInc = require('semver/functions/inc');
import {ReleaseType} from 'semver';
const pkg = require('../package.json');
const exec = util.promisify(child_process.exec);

const currentVersion = pkg.version;

const run = async (command: string) => {
  console.log(chalk.green(command));
  await exec(command);
};

const consoleLog = (logInfo: string, type: 'Start' | 'End') => {
  let info = '';
  if (type == 'Start') {
    info = `>>>>>>>>>>>>>>>>  start Task: ${logInfo} <<<<<<<<<<<<<<<<<`;
  } else {
    info = `****************  end Task: ${logInfo} *****************`;
  }
  let nowDate = new Date().toLocaleTimeString();
  console.log(`${nowDate}  ${info}`);
};

const getNextVersions = () => ({
  major: semverInc(currentVersion, 'major'),
  minor: semverInc(currentVersion, 'minor'),
  patch: semverInc(currentVersion, 'patch'),
  premajor: semverInc(currentVersion, 'premajor'),
  preminor: semverInc(currentVersion, 'preminor'),
  prepatch: semverInc(currentVersion, 'prepatch'),
  prerelease: semverInc(currentVersion, 'prerelease')
});

async function prompt(): Promise<string> {
  const nextVersions = getNextVersions();
  const {nextVersion} = await inquirer.prompt([
    {
      type: 'list',
      name: 'nextVersion',
      message: `请选择发布版本 (当前版本 ${currentVersion})`,
      choices: (Object.keys(nextVersions) as Array<ReleaseType>).map(
        (level) => ({
          name: `${level} => ${nextVersions[level]}`,
          value: nextVersions[level],
        }),
      ),
    },
  ]);
  return nextVersion;
}

async function promptConfirm(): Promise<string> {
  const {flag} = await inquirer.prompt([
    {
      type: ' confirm',
      name: 'flag',
      message: `是否更新版本号`,
      default: false,
    },
  ]);
  return flag;
}

const updateVersion = async (nextVersion: string) => {
  pkg.version = nextVersion;
  consoleLog('修改package.json版本号', 'Start');
  await fs.writeFileSync(
    path.resolve(__dirname, './../package.json'),
    JSON.stringify(pkg),
  );
  consoleLog('修改package.json版本号', 'End');
};

async function build() {
  const flag = await promptConfirm();
  if (!flag) return;
  const nextVersion = await prompt();
  console.log('test', nextVersion);
  await updateVersion(nextVersion);
}

build();

// Commonjs 规范里，没有像 ESModule 能形成闭包的「模块」概念，所有的模块在引用时都默认被抛至全局
export {};
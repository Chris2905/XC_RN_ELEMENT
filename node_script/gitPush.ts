const inquirer = require('inquirer');
const child_process = require('child_process');
const util = require('util');
const chalk = require('chalk');
const exec = util.promisify(child_process.exec);

const run = async (command: string) => {
  console.log(chalk.green(command));
  await exec(command);
};

async function getGit() {
  return await child_process
    .execSync('git branch -r')
    .toString()
    .match(/[^\s]+/g);
}


async function promptRemark(): Promise<string> {
  const {remark} = await inquirer.prompt([
    {
      type: 'input',
      name: 'remark',
      message: `请填写备注：`
    },
  ]);
  return remark;
}

async function promptBranch(choices: Array<String>): Promise<string> {
  const {choice} = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      choices: choices.map((res: any) => ({
        name: res,
        value: res,
      })),
      message: `请选择推送分支：`,
    },
  ]);
  return choice.replace(/^.*\/(.*)$/g, '$1');
}

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

async function gitPush() {
  consoleLog('git推送', 'Start');
  const branchList = await getGit();
  if (!branchList) {
    console.log(chalk.red('请运行git init && git remote add origin xxx'));
    await run(`git init`);
    await run(
      `git remote add origin https://code.aliyun.com/1178394802/XC_RN_UI.git`,
    );
  }

  await run('git add .');
  const remark = await promptRemark();
  await run(`git commit -m ${remark}`);
  const branch = await promptBranch(branchList);
  await run(`git push -u origin ${branch}`);
  consoleLog('git推送', 'End');
}

async function taskStart() {
  consoleLog('git推送', 'Start');
  await gitPush();
  consoleLog('git推送', 'End');
}

taskStart();

export {};
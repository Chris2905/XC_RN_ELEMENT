const inquirer = require('inquirer');
const child_process = require('child_process');
var nodeCmd = require('node-cmd');
const util = require('util');
const chalk = require('chalk');
const exec = util.promisify(child_process.exec);

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

async function npmLogin() {
    console.log(chalk.green('用户名：chris2905'));
    console.log(chalk.green('密码：CSly#240439'));
    console.log(chalk.green('邮箱：1178394802@qq.com'));
    // await run(`yarn login`);

    // nodeCmd.get('yarn login', function(err: any, data: any, stderr: any){
    //             console.log(data);
    //         }
    //     )
    // nodeCmd.get('yarn publish', function(err: any, data: any, stderr: any){
    //             console.log(data);
    //         }
    //     )
    // await nodeCmd.run('yarn login')
    // await nodeCmd.run('yarn publish')
    // run(`yarn publish`);
}

async function npmPublish() {
//   consoleLog('npm推送', 'Start');
  await npmLogin();
//   consoleLog('npm推送', 'End');
}

npmPublish();

export {};
const child_process = require('child_process');
const util = require('util');
const chalk = require('chalk');
//衍生一个 shell 并在该 shell 中运行命令
const exec = util.promisify(child_process.exec);

const paths = {
  dist: 'dist/**.js dist/**/**.js dist/**/**/**.js',
  pkg: 'package.json',
};

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

async function prettier() {
  consoleLog('样式优化', 'Start');
  await run(`npx prettier ${paths.dist} --write`);
  await run(`npx prettier ${paths.pkg} --write`);
  consoleLog('样式优化', 'End');
}

prettier();

// Commonjs 规范里，没有像 ESModule 能形成闭包的「模块」概念，所有的模块在引用时都默认被抛至全局
export {};
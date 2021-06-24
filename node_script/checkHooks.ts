const chalk = require("chalk");
const fs = require("fs");
const path = require("path");

const consoleLog = (logInfo: string, type: "Start" | "End") => {
    let info = "";
    if (type == "Start") {
        info = `>>>>>>>>>>>>>>>>  start Task: ${logInfo} <<<<<<<<<<<<<<<<<`;
    } else {
        info = `****************  end Task: ${logInfo} *****************`;
    }
    let nowDate = new Date().toLocaleTimeString();
    console.log(`${nowDate}  ${info}`);
};

const writeFiles = (filePath: string, extension: string) => {
    fs.readdir(filePath, "utf8", function (err: string, files: Array<any>) {
        if (err) return console.log(err);

        //根据后缀名筛选要操作的文件
        var targetFiles = files.filter(function (file) {
            return path.extname(file).toLowerCase() === extension;
        });
        console.log("content dir is:" + filePath);

        targetFiles.forEach(function (item) {
            var itemPath = path.join(filePath, item);
            console.log(chalk.green(itemPath));

            //readFile方法读取文件内容
            fs.readFile(itemPath, "utf8", function (err:string, data:any) {
                var result = data.replace(
                    RegExp(/_react\.default\.memo.*:/, "g"),
                    '',
                );
                //writeFile改写文件内容
                fs.writeFile(itemPath, result, "utf8", function (err:string) {
                    if (err) return console.log(err);
                });
            });
        });
    });
};

async function checkHooks() {
    consoleLog("React Hooks判断", "Start");
    await writeFiles("dist/assets/iconfont", '.js');
    await writeFiles("dist/BaseComponent", '.js');
    await writeFiles("dist/ViewComponent", '.js');
    consoleLog("React Hooks判断", "End");
}

checkHooks();

// Commonjs 规范里，没有像 ESModule 能形成闭包的「模块」概念，所有的模块在引用时都默认被抛至全局
export {};

// 01_console_class.js
const fs = require('fs');
const { Console } = require('console');

const logOutput = fs.createWriteStream('./logs/stdout.log'); //write:입력스트림
const errOutput = fs.createWriteStream('./logs/stderr.log');

const logger = new Console({ stdout: logOutput, stderr: errOutput });

let count = 5;
logger.log('count : %d', count); //d는 정수값이 넘어감
logger.error(`count : ${++count}`);

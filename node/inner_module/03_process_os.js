// 03_process_os.js
const process = require('process'); //process와 os는 require 안하고도 쓸 수 있으나 명시적으로 쓰길 권장
const os = require('os');

console.log(process.env.JAVA_HOME);

console.log(os.cpus()); // CPU 코어 정보
console.log(os.tmpdir()); // 임시 저장 경로

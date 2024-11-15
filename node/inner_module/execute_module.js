// execute_module.js
const cal = require('./calculator.js'); //require로 불러와야 모듈로 인식함
const { add } = require('./calculator.js');

let result = cal.add(10, 5);
console.log(result);

result = add(20, 50);
console.log(result);

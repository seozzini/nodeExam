// calculator.js
// 간단한 사칙연산 기능을 가진 모듈

const defaultNum = 1;

function add(x, y) {
  return x + y;
}

function minus(x, y) {
  return x - y;
}

function multi(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

module.exports = {
  //객체값을 가지기에 중괄호. 위에 선언된 영역을 하나의 모듈로 만듦
  add, // "add" : add
  mul: multi, //필드명:변수명이 같으면 변수명만 써줘도 됨
};

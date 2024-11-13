// 08_parameter.js
// 1) Default parameter

//기존코드
function say(message) {
  if (message != undefined) {
    //null은 개발자가 값 초기화하는 것, undefined만 체크해주면 됨
    console.log(message);
  } else {
    console.log('매개변수가 넘어오지 않았습니다.');
  }
}
say('Hello!!');
say();

//Default parameter : 함수 안정적 수행 보장하는 방법
function printMsg(message = '매개변수가 넘어오지 않았습니다.') {
  console.log(message);
}

printMsg('Hello!!');
printMsg();

// 2) Rest parameter : 매개변수 명확하지 않을 때
const plus = function (x, y, ...rests) {
  let result = x + y;
  for (let rest of rests) {
    //for of는 값이 없으면 실행X, 있으면 있는만큼 실행
    result += rest;
  }
  return result;
};

console.log(plus(1, 2)); //3
console.log(plus(1, 2, 3, 4, 5)); //15
console.log(plus(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //55

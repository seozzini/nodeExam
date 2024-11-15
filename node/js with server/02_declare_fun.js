// 02_declare_fun.js
// 1) 함수선언문 =>  var (어디서든 함수 호출 가능/지금은 권장X)

/* 
//함수 호이스팅
var plus = function(x,y,z){
return (x+y+z);
}
*/
function plus(x, y) {
  return x + y;
}
console.log(plus(1, 2, 3));
function plus(x, y, z) {
  return x + y + z;
}

console.log(plus(1, 2, 3)); //6

// 2) 함수표현식 => let,const 방식으로 함수를 선언
const printMsg = function (keyword) {
  return 'result : ' + keyword;
};

console.log(printMsg('야~박주현'));

// 3) 화살표 함수 =>익명함수.
//콜백함수나 이벤트핸들러함수로 많이 쓰임 ()=>{} 자스:화살표함수 / ()->{} 자바:람다식

let aray = [1, 2, 3, 4, 5];
aray.forEach((val) => {
  console.log(val);
});

//aray.forEach(val => console.log(val) );
//콜백함수는 이름이 필요없고 재호출하지 않기때문에 많이씀

aray.forEach((val, idx, array) => {
  let msg = `${idx} : ${val}, ${array}`;
  console.log(msg);
});

//함수표현식으로 하면 화살표함수도 본인의 이름 가질 수 있다.
const multi = (x, y) => x * y;
console.log(multi(10, 5));

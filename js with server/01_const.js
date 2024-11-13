// const.js
const user = {
  id: 'Hong',
  age: 25,
};

user.id = 'Kang';
user.age = 20;
user.ssn = '981015';

//객체에 상수 선언하는것은 어떤 의미? user가 가진 객체 자체를 변경하는것은 불가능
user = {};

console.log(user);

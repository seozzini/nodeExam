// 07_destructuring.js
// 1) object
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 37,
  email: 'john@email.com',
  country: 'USA',
};

let { lastName, email } = person;
console.log(lastName);
console.log(email);

function getFullName({ firstName, lastName }) {
  console.log(`${lastName}, ${firstName}`);
}

getFullName(person);

// 2) Array
let scores = [70, 80, 90];

let [a, b, c] = scores; //순서대로 들어올 수 있음(모든 값 받아서 사용하는 것 권장)

console.log(a);
console.log(b);
console.log(c);

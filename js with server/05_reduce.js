// 05_reduce.js
let points = [40, 100, 1, 5, 25, 10];
let sum = points.reduce((total, currentVal) => {
  //앞에서 작업한값, 현재배열에서 가져온값
  return total + currentVal; //0+40 -> total + 100 ...
}, 0); //initialVal:초기값

console.log(sum);

let total = 0;
for (let point of points) {
  total = total + point;
}

console.log(total);

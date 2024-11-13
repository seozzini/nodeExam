// filter_map.js

let persons = [
  {
    name: '유재석',
    point: 78,
    city: '서울',
  },
  {
    name: '김종국',
    point: 92,
    city: '서울',
  },
  {
    name: '양세찬',
    point: 76,
    city: '제주',
  },
  {
    name: '하하',
    point: 81,
    city: '서울',
  },
];

// 1) filter, 원본배열이 가지는 데이터 타입과 같음, 대신 배열의 크기가 줄어들 가능성 있음 (미통과 대상있으면 크기 줄어듦) //where에 더 가까움. 내가 원하는 것만 골라냄. 선별
let scores = persons.filter(function (val, idx) {
  return val.point > 80; // boolean 타입
});
console.log(scores);

// 2) map, 원본배열과 데이터 타입이 다를 수 있음, 대신 배열의 크기는 동일. 모든 데이터가 가져야 하는 값을 추가
let newList = persons.map(function (val, idx) {
  return {
    no: (idx + 1) * 100,
    name: val.name,
    city: val.city,
  }; // 새로운 배열이 가지는 값 전체

  //val.no = (idx + 1) * 100;
  //return val; //원본과 map 모두 no가 생김
}); //콜백함수 : 함수의 결과가 아니라 함수그자체가 넘어가서 내부에서 실행
console.log(newList);

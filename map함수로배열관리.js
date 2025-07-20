//map()함수를 사용을 할 때
//1. 배열 내 각 요소를 변환하거나 바꾸고 싶은 경우
//2. 기존 배열은 그대로 유지하고, 새로운 배열을 만들고 싶은 경우

const numbers = [1, 2, 3, 4, 5];

//map()을 사용해서 각 numbers요소에 콜백함수(number) => number **2를
//적용한 결과값을 새로운 배열squares에 추가한다.
const squares = numbers.map((number) => number ** 2);

console.log('원본 배열:', numbers); //원본 배열: [ 1, 2, 3, 4, 5 ]
console.log('새로운 배열:', squares); //새로운 배열: [ 1, 4, 9, 16, 25 ]

//============================================================

//화살표 함수 사용한 경우
// const newArray1 = array.map((element) => {
//   return 변환된_값;
// });

// //인라인 콜백 함수 사용한 경우
// const newArray2 = array.map(function (element) {
//   return 변환된_값;
// });

const doubleNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(doubleNumbers);
//[ 2, 4, 6, 8, 10 ]

//===========================================

//기존 배열에 문자열을 추가한 새로운 배열을 생성하고 싶은 경우
const fruits = ['딸기', '사과', '포도'];
const juice = fruits.map((fruit) => {
  return fruit + '주스';
});
console.log(juice); //[ '딸기주스', '사과주스', '포도주스' ]

//객체의 특정 속성이나 값만 추출하여 새로운 배열을 생성하고 싶은 경우
const users = [
  { id: 1, name: '김코딩' },
  { id: 2, name: '김오즈' },
  { id: 3, name: '박자바' },
];
const names = users.map((user) => {
  return user.name;
});

console.log(names); //[ '김코딩', '김오즈', '박자바' ]

//================================================
/* map()은 항상 새로운 배열을 반환하고, 기존 배열은 변경되지 않는다. 
그러나, 반환된 배열을 변수에 저장하지 않으면 결과를 사용할 수 없다.
 */

numbers.map((n) => n * 2);
console.log(numbers); //[ 1, 2, 3, 4, 5 ] 기존 배열 그대로, 반환된 배열은 결과 없음.

//==========================================================
//map()과 forEach()의 차이점
/*
forEach()는 반환값 없이 단순히 반복 수행만 한다. 
map()은 각 요소를 변형한 결과를 새로운 배열로 반환한다.
*/

const doubledWithMap = numbers.map((num) => num * 2);
console.log(doubledWithMap); //[ 2, 4, 6, 8, 10 ]

const doubledWithForEach = numbers.forEach((num) => num * 2);
console.log(doubledWithForEach); //undefined

const doubledWithForEach2 = [];
numbers.forEach((num) => {
  doubledWithForEach2.push(num * 2);
});

console.log(doubledWithForEach2); //[ 2, 4, 6, 8, 10 ]

//===============================================
//배열의 과일이름을 대문자로 변환하여 새로운 배열 생성하기.
const fruits1 = ['apple', 'banana', 'orange'];

let uppercasedFruits = fruits1.map((fruit) => {
  return fruit.toUpperCase();
});

console.log(uppercasedFruits); //[ 'APPLE', 'BANANA', 'ORANGE' ]

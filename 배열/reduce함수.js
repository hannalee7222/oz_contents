/*
reduce()는 배열 메소드로, 배열의 각 요소를 순회해 누적 계산을 수행하여
단 하나의 결과값을 만들어 낸다. 기존 배열은 수정되지 않고 유지된다.
- 배열에서 데이터를 가공하고 싶은 경우
- 배열에서 데이터를 객체로 변환하고 싶은 경우
reduce()는 callback을 실행하며 단 1개의 출력 결과를 만든다.
*/

/*
- callback : 배열의 각 요소에 대해 실행할 리듀서 함수(콜백함수)
arr.reduce(callback[, initialValue])

- 네 가지 인수를 풀어서 사용하는 경우
- accumulator : reduce에서 정해준 초기값 (쉽게 말해 누적값임)
- currentValue : 배열에서 현재 처리할 요소 (현재값)
- currentIndex : 배열에서 현재 처리할 요소의 인덱스
- array : 원본 배열
- initialValue : callback의 최초 호출에서 첫번째 인수. 초기값이 없으면
배열의 첫번째 요소를 사용한다. (초기값)

arr.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
}, initialValue);
*/

//배열에서 요소의 총 합을 구하고 싶은 경우
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); //초기값 : 0
console.log(sum); //15

//배열에서 최대값을 구하고 싶은 경우
const numberRandomly = [3, 5, 1, 8, 2];
const max = numberRandomly.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue); //초기값이 별도로 없으니 배열의 첫번째 요소부터 비교한다.
});
console.log(max); //8

//==========================================================

//map()을 reduce()로 구현하기
//배열 요소를 2배로 변환하기
const doubledWithMap = numbers.map((num) => num * 2);

const doubledWithReduce = numbers.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []); //초기값 []는 결과를 배열로 만들고 싶을 때. 0은 숫자 누적 계산할 때.
//{}은 객체 누적 만들고 싶을 때 사용한다.

console.log(doubledWithMap); //[ 2, 4, 6, 8, 10 ]
console.log(doubledWithReduce); //[ 2, 4, 6, 8, 10 ]

//=================================================

//배열 요소 중 짝수만 추출하기 filter(), reduce()
const evenWithFilter = numbers.filter((num) => {
  return num % 2 === 0;
});

const evenWithReduce = numbers.reduce((acc, num) => {
  if (num % 2 === 0) acc.push(num);
  return acc;
}, []);

console.log(evenWithFilter); //[ 2, 4 ]
console.log(evenWithReduce); //[ 2, 4 ]

//=================================================

//문자열로 이루어진 배열에서 단어 빈도수를 계산하고 싶은 경우
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

//words배열에서 word를 key로, 단어 빈도수는 value로 가지는 객체를 반환하기.
//초기값은 {}로 빈 객체로 지정하기.

let wordCount = words.reduce((acc, word) => {
  //acc[word]는 지금까지 누적된 해당 단어의 개수를 의미하고, 값이 없으면
  //즉 처음 등장하면 0부터 시작한다.( || 0 )
  //1씩 증가시켜서 저장한다.
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {}); //초기값은 빈 객체

console.log(wordCount);
//{ apple: 3, banana: 2, orange: 1 }

//=====================================================

//숫자 배열에서 각 숫자가 몇 번 나왔는지 세기
const nums = [1, 2, 1, 3, 2, 1];
const numCount = nums.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log(numCount);
//{ '1': 3, '2': 2, '3': 1 }

//====================================================

//단어 첫 글자로 배열 요소 분류하기
const animals = ['cat', 'cow', 'dog', 'duck', 'chicken'];

const groupByFirstLetter = animals.reduce((acc, animal) => {
  const firstChar = animal[0];
  acc[firstChar] = acc[firstChar] || [];
  acc[firstChar].push(animal);

  return acc;
}, {});
console.log(groupByFirstLetter);
//{ c: [ 'cat', 'cow', 'chicken' ], d: [ 'dog', 'duck' ] }
//======================================================

//문자열 배열에서 글자 수 누적하기
const fruits = ['apple', 'banana', 'apple', 'kiwi', 'banana'];

const countFruits = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(countFruits);
//{ apple: 2, banana: 2, kiwi: 1 }

/*
filter()함수는 배열에서 조건에 맞는 데이터만 골라내고 싶을 때, 사용한다.
배열의 각 요소를 검사해 조건을 만족하는 요소만 추출해서 새로운 배열을 생성한다.
또한, 배열에서 유효하지 않은 값을 제거하고 싶은 경우에도 사용한다.
*/

/*
const newArray = array.filter(function (element) => {
  return 필터링_조건;
});

const newArray = array.filter((element) => {
  return 필터링_조건;
});
*/

//배열에서 짝수만 필터링하고 싶은 경우
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers); //[ 2, 4, 6 ]

//객체를 요소로 한 배열에서 조건에 맞는 요소만 필터링하고 싶은 경우
const users = [
  { name: '김오즈', age: 17 },
  { name: '박코딩', age: 20 },
  { name: '권자바', age: 15 },
  { name: '이노드', age: 22 },
];
const adults = users.filter((user) => {
  return user.age >= 18;
});

console.log(adults); //[ { name: '박코딩', age: 20 }, { name: '이노드', age: 22 } ]

//문자열을 요소로 한 배열에서 특정 단어가 포함된 문자열만 필터링하고 싶은 경우
const words = ['apple', 'banana', 'cherry', 'date'];

const wordsWithA = words.filter((word) => {
  return word.includes('a');
});
console.log(wordsWithA); //[ 'apple', 'banana', 'date' ]

//================================================

//map과 filter 비교
//map은 모두 변환, filter는 선택적 추출이다.
/*
- 숫자 2배로 변환하기(map) vs 숫자 중 짝수만 추출하기(filter)
- 문자열인 요소 대문자로 변환하기(map) vs 글자 수가 5이상인 문자열만 추출하기(filter)
*/

//글자 수가 5 이상인 문자열만 추출하기(filter)
const longWords = words.filter((word) => {
  return word.length >= 5;
});
console.log(longWords); //[ 'apple', 'banana', 'cherry' ]

//map과 filter조합해서 사용해보기
//1. 짝수만 추출(filter)
//2. 각 숫자를 2배로 변환 (map)
const results = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2); //짝수 추출 [2,4,6]
console.log(results); //2배로 변환 [4,8,12]
//출력 결과 : [4, 8, 12]

/*
filter()는 기존 배열은 변경되지 않고, 조건을 만족하는 요소만
모아서 새 배열로 만들어 반환한다. 반환값을 변수에 저장하지 않으면 원하는 값이
필터링 되지 않는다. 
*/

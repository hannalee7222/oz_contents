//forEach()메소드는 배열의 각 요소를 한번씩 순회하면서 주어진 함수를 실행한다.
/*
 * 기존 배열을 변경하지 않으며, 반환값이 없다.(항상 defined)
- 배열에서 각 요소를 출력하고 싶은 경우 사용
- 배열의 요소를 이용해 외부 변수에 작업을 수행하고 싶은 경우
* 주어진 함수는 배열의 크기만큼 반복 실행. 
* 배열 요소의 개수에 따라 콜백 함수가 호출되는 횟수가 결정된다.
 */

//배열의 요소를 모두 출력하고 싶은 경우
const numbers = [1, 2, 3, 4];
numbers.forEach((number) => {
  console.log(number); //1  2  3  4
});

//배열의 모든 값을 합산하고 싶은 경우
const prices = [1000, 2000, 3000];
let total = 0;
prices.forEach((price) => {
  total += price;
});
console.log(total); //6000

//배열 내 객체의 특정 속성을 변경하기
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Chalie', age: 35 },
];
people.forEach((person) => {
  person.age += 10;
});
console.log(people);
/* [
  { name: 'Alice', age: 40 },
  { name: 'Bob', age: 35 },
  { name: 'Chalie', age: 45 }
]
*/

//===========================================================

//some()메소드는 배열의 요소 중 하나라도 조건을 만족하면 true를 반환, 모두 조건을
//만족하지 않으면 false를 반환하는 메소드이다.
/*
- 배열의 일부 요소가 조건을 만족하는지 확인하고 싶은 경우
- 조건이 만족되면 작업을 중단하고 효율적으로 결과를 반환하고 싶은 경우
** some()함수는 반환값이 boolean이라는 점과, 조건을 만족하면 더이상 순회하지 않는다는 점.
*/

//배열의 요소 중 짝수 요소가 있는지 확인하고 싶은 경우
const hasEven = numbers.some((num) => {
  return num % 2 === 0;
});
console.log(hasEven); //true

const includeFive = numbers.some((num) => {
  return num >= 5;
});
console.log(includeFive); //false

//admin권한이 있는지 확인하고 싶은 경우
const users = [
  { name: '김코딩', isAdmin: false },
  { name: '박자바', isAdmin: true },
  { name: '최오즈', isAdmin: false },
];

const hasAdmin = users.some((user) => {
  return user.isAdmin;
});
console.log(hasAdmin); //true

//=======================================================

//every()함수는 배열의 모든 요소가 만족하면 true, 하나라도 조건을 만족하지 않으면
//false를 반환하는 메소드이다.
/*
- 배열의 모든 요소가 동일한 조건을 만족하는지 확인하고 싶은 경우
- 데이터 검증이 필요한 경우 (ex. 값이 모두 양수인지, 유효한 값인지 등)
* 주어진 함수는 배열의 요소마다 호출되며, 조건이 충족되지 않으면 즉시 실행을 
  멈추고 false를 반환한다.
*/

//배열 내 유저가 모두 성인 유저인지 확인하고 싶은 경우
const adultUser = [
  { name: '김코딩', age: 18 },
  { name: '박자바', age: 22 },
  { name: '최오즈', age: 34 },
];
const isAdult = adultUser.every((user) => {
  return user.age >= 19;
});
console.log(isAdult); //false

//배열 내 점수가 모두 평균 이상인지 확인하고 싶은 경우
const scores = [85, 90, 78, 88];
const averageScore = 60;
const allPassing = scores.every((score) => score >= averageScore);
console.log(allPassing); //true

//==========================================================

//find()함수는 배열에서 조건을 만족하는 첫 번째 요소를 반환한다.
//배열을 순회하며, 조건을 만족하는 요소가 없으면 undefined를 반환한다.
/*
- 배열에서 특정 조건을 만족하는 하나의 요소를 찾고 싶은 경우
- 조건을 만족하는 첫번째 요소를 가져오고 싶은 경우
** 조건을 만족하는 모든 요소를 찾고 싶은 경우에는 filter()함수를 사용한다.
*/

//조건을 만족하는 첫 번째 요소를 찾고 싶은 경우
const numbers1 = [5, 12, 8, 140, 44];
const firstLargeNumber = numbers1.find((num) => num > 10);
console.log(firstLargeNumber); //12

//배열 내 사용자 정보 객체 중 특정 정보를 찾고 싶은 경우
const foundUser = users.find((user) => user.name === '김코딩');
console.log(foundUser); //{ name: '김코딩', isAdmin: false }

//======================================================

//sort()함수는 배열의 요소를 기준(기본적으로 문자열)으로 정렬하는 메소드이다.
//숫자나 특정 조건을 기준으로 할 때는 비교 함수를 제공해야 한다.
/**
 * - 배열의 요소들을 오름차순 또는 내림차순으로 정렬하고 싶을 때
 * - 숫자, 문자, 객체 배열을 정렬할 때
 * sort()함수는 원본 배열을 변경한다.
 */

//배열의 문자열을 알파벳 순으로 정리하고 싶은 경우
const fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits); //[ 'apple', 'banana', 'cherry' ]

//배열 내 숫자 요소 정렬 (비교 함수 사용)
const comparedNumber = [40, 1, 5, 200];
comparedNumber.sort((a, b) => a - b); //오름차순 정렬
console.log(comparedNumber); //[ 1, 5, 40, 200 ]

comparedNumber.sort((a, b) => b - a); //내림차순 정렬
console.log(comparedNumber); //[ 200, 40, 5, 1 ]

//배열 내 객체의 특정 요소 정렬하기
const sortedUsers = [
  { id: 3, name: 'Alice' },
  { id: 4, name: 'Hanna' },
  { id: 2, name: 'Jason' },
  { id: 1, name: 'David' },
];
sortedUsers.sort((a, b) => a.id - b.id);
console.log(sortedUsers);
/*
[
  { id: 1, name: 'David' },
  { id: 2, name: 'Jason' },
  { id: 3, name: 'Alice' },
  { id: 4, name: 'Hanna' }
]
*/

sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedUsers);
/*
[
  { id: 3, name: 'Alice' },
  { id: 1, name: 'David' },
  { id: 4, name: 'Hanna' },
  { id: 2, name: 'Jason' }
]
*/

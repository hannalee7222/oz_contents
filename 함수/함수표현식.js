let add = function addNum1Num2 (num1, num2){
  return num1 + num2;
}
console.log(add(2, 5)); //7
//console.log(addNum1Num2(2, 5)); //ReferenceError : addNum1Num2 is not defined.
//함수 표현식에서 작성한 함수명은 해당 함수 내부에서만 유효하기 때문에, 외부에서는 사용할 수 없음.
//호출 시에는 반드시 변수명(add)을 사용해야 한다.

let add1 = function (num1, num2){
  return num1 + num2;
}
console.log(add(2, 5)); //7
//함수 표현식에서는 함수명을 생략하는 것이 일반적이다.
//함수를 변수 하나로 다루기 때문에 관라하기 쉽다는 장점이 있다.
//화살표 함수로 변형 가능 : let add1 = (num1, num2) => num1 + num2;

/**
 *  함수 표현식을 사용하여 함수 선언문으로 선언된 코드를 함수 표현식 함수로 변환해보세요.
 *  코드를 함수로 변환하고 다음 실행코드로 실행했을 때 동일한 내용이 나와야합니다.
 *  실행 방법: 아래 Terminal에 아래있는 코드를 붙여넣어 주세요.
 */

// 변환 전
// add 함수
function legacy_add(num1, num2) {
  return num1 + num2;
}
// minus 함수
function legacy_minus(num1, num2) {
  return num1 - num2;
}
// multiple 함수
function legacy_multiple(num1, num2) {
  return num1 * num2;
}
// division 함수
function legacy_division(num1, num2) {
  return num1 / num2;
}

console.log(
  `변환 전: 덧셈 ${legacy_add(10, 5)} 뺄셈 ${legacy_minus(
    10,
    5
  )} 곱셈 ${legacy_multiple(10, 5)} 나눗셈 ${legacy_division(10, 5)}`
);

// 위 코드의 legacy_add, legacy_minus, legacy_multiple, legacy_division을
// 각각 add, minus, multiple, division으로 바꿔보세요.

// add 함수
let add2 = function (num1, num2){
  return num1 + num2;
}
// minus 함수
let minus = function (num1, num2){
  return num1 - num2;
}
// multiple 함수
let multiply = function (num1, num2){
  return num1 * num2;
}
// division 함수
let divide = function (num1, num2){
  return num1 / num2;
}
console.log(
  `변환 후: 덧셈 ${add(10, 5)} 뺄셈 ${minus(10, 5)} 곱셈 ${multiply(
    10,
    5
  )} 나눗셈 ${divide(10, 5)}`
);

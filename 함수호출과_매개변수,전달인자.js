function sayHello(name) {
  console.log("안녕하세요," + name +"님!");
}
sayHello("지민");

//전달인자가 매개변수보다 많은 경우
function printName(name){
  console.log("이름:", name);
}
printName("지민", "민수", "수빈");
//출력-> 이름: 지민
//나머지 전달인자(민수, 수빈)는 무시된다.

//전달인자가 매개변수보다 적은 경우
function printFullName(firstName, lastName){
  console.log("성:", lastName);
}
printFullName("지민"); //lastName이 전달되지 않았기 때문에 undefined가 할당됨

//매개변수에 기본값을 설정한 경우
function greet (name = "게스트"){
  console.log("안녕하세요," + name + "님!");
}
greet();
greet("지민");

//변수에 함수명 할당하는 것과 함수의 호출결과를 할당하는 것의 차이
function add3(num1, num2){
  return num1 + num2 ;
}
const answer = add3;  //함수 자체를 할당(함수 전달)
const result = add3(2, 5); //함수 실행 결과를 할당(함수 호출)

console.log(answer(3, 4)); //7
console.log(result); //7

//return문이 없는 함수는 자동으로 undefined를 반환한다.
function logMessage(){
  console.log("출력은 있으나 반환은 없다");
}
const result1 = logMessage(); //"출력은 있으나 반환은 없다" 출력
console.log(result1); //undefined

/**
 *  함수 표현식으로 선언된 내용을 함수 호출로 실행시켜보세요.
 *  add 함수를 사용하는 방법을 보고, minus, multiply, divide 함수도 호출해보세요.
 *
 */

// add 함수를 호출하는 예시는 다음과 같습니다.

// add 함수
let add = function (num1, num2) {
  console.log(num1 + num2);
};

add(10, 7); // 17

// add 함수의 호출 방식을 minus, multiply, divide 함수에도 적용해보세요.

// minus 함수
let minus = function (num1, num2) {
  console.log(num1 - num2);
};

// 여기에 코드를 적어주세요(minus)
minus(10, 7); 

// multiply 함수
let multiple = function (num1, num2) {
  console.log(num1 * num2);
};

// 여기에 코드를 적어주세요(multiply)
multiple(10, 7);

// divide 함수
let divide = function (num1, num2) {
  console.log(num1 / num2);
};

// (나눗셈의 경우, 0으로 나누면 에러가 날 수 있습니다.)
// 여기에 코드를 적어주세요(divide)
divide(10, 7);


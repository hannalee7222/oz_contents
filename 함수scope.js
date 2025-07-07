//함수 내부에서 선언한 변수는 함수 내부에서만 유효하다.
function sayHello() {
  let message = '안녕하세요';
  console.log(message); //'안녕하세요'출력
}
sayHello();

//매개변수도 함수 내부에서만 유효하다.
function greet(name) {
  console.log('반갑습니다,' + name + '님');
}
greet('영희');  //'반갑습니다, 영희님'출력

//함수 외부에서는 내부 변수에 접근할 수 없다.
/* function sayHi() {
  let hi = '안녕하세요';
}
console.log(hi);  //ReferenceError: hi is not defined.
*/

//=======================================================
/**
 * 아래 코드를 실행하여 함수 내부와 외부에 선언된 변수를 사용할 수 있는 범위를 눈으로 확인해보세요.

 */

function dep1() {
  let num1 = 1;
  function dep2() {
    let num2 = 2;
    function dep3() {
      let num3 = 3;
      console.log(num1); // 1
      console.log(num2); // 2
      console.log(num3); // 3
    }
    dep3();   //num1, num2, num3변수에 접근가능. (그러나 dep1 안에서만 존재)
    console.log(num1); // 1
    console.log(num2); // 2
    //console.log(num3);  ReferenceError: num3 is not defined
  }
  dep2();   //num2, num3변수에 접근가능. (그러나 dep1 안에서만 존재)
  console.log(num1); // 1
  //console.log(num2);  ReferenceError: num2 is not defined
  //console.log(num3);  ReferenceError: num3 is not defined
}
//console.log(num1);  ReferenceError: num1 is not defined
//console.log(num2);  ReferenceError: num2 is not defined
//console.log(num3);  ReferenceError: num3 is not defined
dep1(); //상위 함수에서 선언한 변수는 자유롭게 사용가능.(하위 함수의 변수에는 접근불가)
//================================================================

//전역 스코프 : 코드 어디서나 접근 가능. 함수 내부에서도 사용 가능.
let greeting = '안녕';
function howAreU(){
  console.log('함수 내부에서:', greeting); //함수 외부에서: 안녕
}
console.log('함수 외부에서:', greeting);  //함수 내부에서: 안녕
howAreU();

//========================================================
//전역변수와 지역변수
let globalMessage = "전역 변수입니다.";

function showMessage() {
  console.log(globalMessage); //전역 변수 접근 가능

  let localMessage = "지역 변수입니다.";
  console.log(localMessage); //같은 지역 스코프에서 접근 가능
}

showMessage();
//console.log(localMessage); ReferenceError

//======================================================

//예측 불가능한 전역 변수
let userName = '철수';
function updateName() {
  userName = '영희';    //전역 변수 직접 수정
}

updateName();
console.log(userName); //철수가 영희로 바뀐다.
const add = function(num1, num2){
  return num1 + num2;
}

let answer = add(2,5);
console.log(answer); //7

//함수는 반환값을 변수나 배열과 같은 값에 할당하여 사용 가능하다.
function recommend(){
  return "추천메뉴는 김치볶음밥입니다.";
}
const lunch = recommend();
console.log(lunch); //추천메뉴는 김치볶음밥입니다.

//===================================================

//반환값을 활용한 연산예시
function getTotalPrice(김밥수량, 라면수량){   //디폴트 값 활용(김밥수량=0, 라면수량=0)하면 인자를 안넣었을때 안전하게 동작함.
  return (김밥수량 * 3500) + (라면수량 * 5000);
}
function applyDiscount(price){
  return price * 0.9  //10% 할인
}

const total = getTotalPrice(2, 1); //김밥 2줄 + 라면 1개
const discounted = applyDiscount(total); 
//반환값 다시 재사용하여 연산
//중첩해서 쓰면 : const discounted = applyDiscount(getTotalPrice(2,1));

console.log("총 결제 금액:", discounted); //총 결제 금액: 10800

//====================================================

//평균 점수 -> 학점으로 변환하는 예시
function calculateAverage(kor, eng, math){
  return (kor + eng + math) /3 ;
}
 
function getGrade(avg){
  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  return "C";
}

const average = calculateAverage(85, 90, 92);
const grade = getGrade(average);

console.log("평균점수:", average);  //평균점수: 89
console.log("학점:", grade);  //학점: B
/*
return은 함수가 계산한 값을 반환하여 다른 곳에서 사용할 수 있도록
하는 로직 처리를 위한 도구이며,
console.log()는 그 값을 눈으로 확인할 수 있게 해주는 디버깅용
도구이다.
return키워드 없이 함수가 끝나면 반환값은 undefined.
return키워드를 여러번 사용할 경우, 가장 상위에 있는 return키워드만 
실행되고, 나머지 키워드는 무시된다.
*/

//================================================


// 1. add 함수의 반환값을 작성해주세요.

function add1(num1, num2) {
  // 여기에 코드를 입력해주세요.
  return num1 + num2;
}

console.log(add1(17, 23)); // 40

// 2. add 함수를 2번 호출한 후, 두 반환값을 더하는 코드를 구현해주세요.

// 여기에 코드를 작성해주세요.
let answer1 = add1(10,15) + add1(9,2);
console.log(answer1);
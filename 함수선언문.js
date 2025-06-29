function add(x, y){
  return x + y;
}
console.log(add(2, 5));

function add1 (x, y) {
  return x + y;
}
let answer = add(2, 5);
console.log(answer);

//============================
let num1 = 10;
let num2 = 5;
let answer_add = num1 + num2;
let answer_minus = num1 - num2;
let answer_multiply = num1 * num2;
let answer_divide = num1 / num2;

console.log(`변환 전: 덧셈 ${answer_add}, 뺄셈 ${answer_minus}, 
  곱셈${answer_multiply}, 나눗셈 ${answer_divide}`);

//add 함수
function add2(num1, num2){
  return num1 + num2;
}
//minus 함수
function minus(num1, num2){
  return num1 - num2;
}
//multiply 함수
function multiply (num1, num2){
  return num1 * num2;
}
//divide 함수
function divide (num1, num2){
  return num1 / num2;
}

console.log(
  `변환 후 : 덧셈 ${add2(10,5)}, 뺄셈 ${minus(10,5)}, 곱셈 ${multiply(10,5)},
  나눗셈 ${divide(10,5)}`
);

//할인가를 계산하는 함수 discountPriceCalculator()정의
function discountPriceCalculator(originPrice, discount){
  //할인가를 계산하여 반환
  return originPrice - originPrice * discount;
}
//drink 10%할인, 원가 : 2,100원, 할인가 : 1,890원
const drink = discountPriceCalculator(2100, 0.1);
console.log(drink);
//banana 20% 할인, 원가 : 13,000원, 할인가 : 10,400원
const banana = discountPriceCalculator(13000, 0.2);
console.log(banana);
//cake 15% 할인, 원가 : 7,200원, 할인가 : 6,120원
const cake = discountPriceCalculator(7200, 0.15);
console.log(cake);
//television 30%할인, 원가 : 1,300,000원, 할인가 : 910,000원
const television = discountPriceCalculator(1300000, 0.3);
console.log(television);
//monitor 5%할인, 원가 : 271,200원, 할인가 : 257,640원
const monitor = discountPriceCalculator(271200, 0.05);
console.log(monitor);
//==================================================

//상태를 저장하고 불러오는 함수 makeState()
function makeState(initialValue = null){
  let state = initialValue;

  //상태를 변경하는 함수
  function setState(newValue){
    state = newValue;
  }
  //현재 상태를 반환하는 함수
  function getState(){
  return state;
  }
  //상태 접근자(get)와 설정자(set)를 배열로 반환
  return [getState, setState];
}
//상태 생성
const [getId, setId] = makeState(""); //아이디 상태 초기화
const [getPassword, setPassword] = makeState(""); //패스워드 상태 초기화

//유효성 검사 함수
function validateInputField(inputValue, type){
  switch(type) {
    //ID 유효성 검사
    case 'id':
      if(inputValue === ""){
        return {
          valid : false,
          errorMessage : "필수 입력값입니다."
        };
      }
      return {
        valid : true,
        errorMessage : ""
      };
    //비밀번호 유효성 검사
    case 'pw':
      if(inputValue === ""){
        return {
          valid : false,
          errorMessage : "필수 입력값입니다."
        };
      }
      if(inputValue.length < 8){
       return {
        valid : false,
        errorMessage : "비밀번호는 8자리 이상이어야 합니다."
       };
    }
      return {
        valid : true,
        errorMessage : ""
      };
    }   
}

//======================================================
//장바구니의 총 결제 금액(소계+세금)을 계산하는 함수
function calculateTotalPrice(){
  //장바구니에 담긴 상품 목록을 가져옴
  const items = getCartItems();
  //상품들의 총합(소계)을 계산
  const subtotal = calculateSubtotal(items);
  //소계를 기준으로 세금 계산
  const tax = calcultateTax(subtotal);
  //소계와 세금을 더해 총 결제 금액 반환
  return subtotal + tax;
}
//(추가) 세금을 계산하는 함수 (예 : 세율10%)
function calcultateTax(subtotal){
  const taxRate = 0.1;
  return subtotal * taxRate;
}

//=======================================================
//팰린드롬 : 대칭을 이루고 있는 문자열 (예: 토마토, 기러기 등)
// 우영우가 팰린드롬인지 확인하는 코드
const str = '우영우';
let isPalindrome = true;  //기본값 true로 시작하고, 중간에 다르면 false로 바꿈

for (let i = 0; i < str.length / 2; i++) {  
  //문자열 길이의 절반(/2)까지만 검사->앞(i)과 뒤(str.length -1번째 인덱스 -i번째글자)를 비교
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(`"${str}"은 팰린드롬인가? ${isPalindrome}`);

// 함수로 작성하여 다음 문자열들이 팰린드롬인지 확인해보세요.

/**
 * 팰린드롬인 문자열
 * - 아시아
 * - 오레오
 * - 일요일
 * - 부산임산부
 * - 가련하시다사장집아들딸들아집장사다시하련가
 * 팰린드롬이 아닌 문자열
 * - 오즈코딩스쿨
 * - 자바스크립트
 * - 프론트엔드
 * - 촉촉한나라의초코칩
 */

function palindromeChecker(str){
  for(let i = 0; i < str.length; i++){
    if(str[i] !== str[str.length -1 -i]){
      return false;
    }
  }
  return true;
}

const inputStr = '아시아';
console.log(`"${inputStr}"은 팰린드롬인가? ${palindromeChecker(inputStr)}`);

//===========================================================
//팰린드롬 확인하는 또다른 방법의 함수
function isPalindrome1(str1){

  //대소문자 구분없이 검사하기 위해 전부 소문자로 바꾼다.
  //정규표현식(문자열에서 영문소문자, 숫자외의 모든 문자를 삭제한다.)
  // ^는 부정을 뜻하고, /.../부분은 정규표현식을 감싸는 부분이다.
  //g는 global(전체검색) -> 문자열 전체에서 찾는다.
  //'' -> 찾은 것을 빈 문자열로 바꾼다. 즉, 제거한다.
  const cleanStr = str1.toLowerCase().replace(/[^a-z0-9]/g, '');

  //문자열을 한글자씩 쪼개서.split('') 배열로 만들고,
  //뒤집고.reverse(), 다시 문자열로 만든다.join('')
  const reversedStr = cleanStr.split('').reverse().join('');

  //정리된 원본(cleanSte)과 뒤집은 문자열(reverseStr)을 비교한다.
  //같으면 true를 반환, 다르면 false를 반환.
  return cleanStr === reversedStr;
}
console.log(isPalindrome1("level"));
console.log(isPalindrome1("racecar"));
console.log(isPalindrome1("hello"));
console.log(isPalindrome1("A man a plan a canal Panama"));


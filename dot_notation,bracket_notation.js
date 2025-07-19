/* 
  객체 프로퍼티 값 조회 방법:
  1. 마침표 표기법: 객체.프로퍼티이름
  2. 대괄호 표기법: 객체["프로퍼티키"]
*/

//대괄호 표기법
//객체["프로퍼티키"] 형태로 작성하며, 프로퍼티 키를 문자열로 작성해야 한다.
const person = {
  name: '김오즈',
};
console.log(person['name']); //김오즈 ('name'은 문자열 리터럴이다.)

const key = 'name';
console.log(person[key]); //person[key] === person["name"] => 김오즈

//console.log(person[name]); //ReferenceError: name is not defined
//이 경우는 변수 name이라는 식별자를 찾게 된다.

//========================================================

//객체 프로퍼티 간의 연산
const student = {
  name: '김오즈',
  score1: 85,
  score2: 92,
};

const total = student.score1 + student.score2;
const average = total / 2;

console.log(`총점: ${total}`); //총점: 177
console.log(`평균: ${average}`); //평균: 88.5

//====================================================

//조건문에서 객체 프로퍼티 사용하기.
const user = {
  userName: 'oz_dev',
  isAdmin: true,
};

if (user.isAdmin) {
  console.log('관리자 권한이 있습니다.');
} else {
  console.log('일반 사용자입니다.');
}
//객체 프로퍼티의 값이 boolean인 경우, 조건문과의 결합이 매우 직관적이고 유용하다.

//========================================================

//객체 안의 객체 조회하기.
const products = {
  itemA: { name: '노트북', price: 1200000 },
  itemB: { name: '마우스', price: 25000 },
  itemC: { name: '모니터', price: 330000 },
};

const key1 = 'itemB';
const selected = products[key1];

console.log(`${selected.name}의 가격은 ${selected.price}원입니다.`);
// 마우스의 가격은 25000원입니다.

//=======================================================

//존재하지 않는 프로퍼티를 실수로 사용했을 때, undefined는 연산오류를 발견하기
//힘드므로, 방어 코드 작성이 필수이다. ??연산자를 활용하면 null이나 undefined인
//경우에 기본값을 설정할 수 있다.
const item = {
  price: 1000,
};

const totalPriceSafe = item.price - (item.discount ?? 0);
console.log(totalPriceSafe); //1000

//=========================================================

//자동차 정보를 담은 객체 만들기.
const car = {
  brand: 'Maserati',
  color: 'Grigio Maratea',
  'max-speed': 320,
  passenger: 4,
};

const speed = 'max-speed';

console.log('브랜드:', car.brand);
console.log('색상:', car.color);
console.log('최대시속:', car['max-speed']);
console.log('최대시속:', car[speed]);
console.log('탑승인원:', car.passenger);
console.log('탑승인원:', car['passenger']);
//=======================================================

//프로퍼티의 키가 JS의 식별자 규칙을 따를 때와 그렇지 않을 때
const thatGuy = {
  name: '김오즈',
  gender: '남성',
  'is-single': true,
};

console.log(thatGuy.name); //김오즈
console.log(thatGuy['is-single']); //true
/*
console.log(person.is - single); -> 
ReferenceError: single is not defined
식별자 규칙을 따르는 경우에는 마침표, 대괄호 표기법 모두 사용 가능.
하지만 그렇지 않은 경우에는 반드시 대괄호 표기법 사용하고 ""문자열 작성해야함.
*/

//html속성을 그대로 객체로 표현할 때에도 .표기법으로 접근할 수 없다.
const element = {
  'data-user-id': 'oz123',
  'aria-label': '설명 텍스트',
};
console.log(element['data-user-id']); //oz123
console.log(element['aria-label']); //설명 텍스트

//css 속성을 객체로 다룰 때에도 대괄호 표기법을 사용해야 한다.
const style = {
  'font-style': '16px',
  'margin-top': '20px',
};
console.log(style['font-style']); //16px
console.log(style['margin-top']); //20px

//API 또는 JSON응답을 그대로 사용할 때
const userData = {
  'user-name': 'oz_dev',
  '1stPlace': true,
  'is-active': false,
};
console.log(userData['user-name']); //oz_dev
console.log(userData['1stPlace']); //true
console.log(userData['is-active']); //false

//=========================================================

/*
마침표 표기법은 변수 사용 불가
마침표 표기법은 정적인 key에만 사용할 수 있고, 변수를 입력하면 프로퍼티 키로 
인식하기 때문에 원하는 결과가 나오지 않는다.
 */

const person1 = {
  name: '김오즈',
  gender: '남성',
};
const key2 = 'name';

//console.log(person1.key2); -> undefined (key2라는 키 없음)
console.log(person1[key2]);

//======================================================

//실무 예시: 여러 객체에서 동일한 키로 데이터 조회할 때
const Samsung = {
  location: '대한민국',
  companySize: '대기업',
  companySubject: '반도체',
  members: 127769,
};

const Apple = {
  location: '미국',
  companySize: '대기업',
  companySubject: '전자제품',
  members: 164000,
};

const Naver = {
  location: '대한민국',
  companySize: '대기업',
  companySubject: '온라인 검색',
  members: 4311,
};

const Google = {
  location: '미국',
  companySize: '대기업',
  companySubject: '온라인 검색',
  members: 182502,
};

// 공통 키를 변수로 저장
const propertyKey = 'members';

// 대괄호 표기법으로 모든 객체에서 같은 키로 데이터 조회
const BigTechMembers = [
  Samsung[propertyKey],
  Apple[propertyKey],
  Naver[propertyKey],
  Google[propertyKey],
];

console.log(BigTechMembers); // [127769, 164000, 4311, 182502]

//대기업 객체를 이용해서 대기업 인원수 평균 구해보기

//대기업 객체들 배열로 묶기
const Big_Tech_Companies = [Samsung, Apple, Naver, Google];

//평균 구하는 함수와 반복문 실행
function averageMembers(objectList, objectKey) {
  //객체 배열과 추출할 프로퍼티키를 매개변수로 지정
  let allMember = 0; //전체 인원수 누적 변수

  //배열 길이만큼 반복하면서 각 객체에서 원하는 키의 값을 누적
  for (let i = 0; i < objectList.length; i++) {
    allMember += objectList[i][objectKey]; //예를 들어, Samsung.member
  }
  return allMember / objectList.length; //총합을 객체 수로 나눈 값을 반환
}

const members = 'members'; //평균 구하기 함수 호출할 때 사용할 키를 변수로 지정

//평균 구하기 함수 호출 -> 정답 변수에 저장 (전달인자 전달)
const answer = averageMembers(Big_Tech_Companies, members);
console.log(answer);

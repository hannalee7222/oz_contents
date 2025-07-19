//in연산자는 in왼쪽에 작성된 속성을, 오른쪽에는 객체를 입력한다.
//해당 속성이 있으면 true를, 없으면 false를 반환한다.
//key in object
const oz_kim = {
  name: '김오즈',
  address: 'Seoul',
};
console.log('name' in oz_kim); //true
console.log('age' in oz_kim); //false

//for...in문은 모든 프로퍼티를 순회할 때 사용한다.
oz_kim.gender = '남성';
oz_kim.age = 32;
oz_kim.favorite = '코딩';

for (const objectKey in oz_kim) {
  console.log(`프로퍼티 키: ${objectKey}, 프로퍼티 값: ${oz_kim[objectKey]}`);
}
/*
프로퍼티 키: name, 프로퍼티 값: 김오즈
프로퍼티 키: address, 프로퍼티 값: Seoul
프로퍼티 키: gender, 프로퍼티 값: 남성
프로퍼티 키: age, 프로퍼티 값: 32
프로퍼티 키: favorite, 프로퍼티 값: 코딩
*/

//===========================================================

//Object메소드를 활용한 객체 순회

//1. Object.keys(obj) : 객체의 모든 키key를 배열로 반환한다.
const user = {
  name: '김오즈',
  age: 32,
};
console.log(Object.keys(user)); //[ 'name', 'age' ]

//2. Object.values(obj) : 객체의 모든 값value을 배열로 반환한다.
console.log(Object.values(user)); //[ '김오즈', 32 ]

//3. Object.entries(obj) : 객체의 key-value 쌍을 배열의 형태로 반환한다.
console.log(Object.entries(user));
//[ [ 'name', '김오즈' ], [ 'age', 32 ] ]

//Object.entries를 이용하면 for...of문으로도 객체 순회가 가능하다.
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}, ${value}`);
}
//name, 김오즈
//age, 32

//=========================================================
//객체 순회할 때 주의 사항
//1. for...in은 상속된 속성까지 포함해서 순회하므로 주의가 필요하다.
const parent = { job: '개발자' };
const child = Object.create(parent);
child.name = '김오즈';

for (const key in child) {
  //console.log(key); //name, job
  //프로토타입 체인을 통해 물려받은 속성까지 순회 대상에 포함시킬 수 있으므로 주의.
  //이런 경우에는 hasOwnProperty()로 본인 소유의 프로퍼티만 필터링할 수 있다.
  if (child.hasOwnProperty(key)) {
    console.log(key); //name
  }
}

//Object.keys, Object.values, Object.entries는 상속된 프로퍼티는 포함하지 않음.
//보다 안전하고 명확하게 다루고 싶을 때는 위 세가지 메소드를 사용한다.
//또한 이 세가지 메소드들은 배열 형태로 결과를 반환하므로, for...of와 forEach, 배열
//메소드 등과도 자유롭게 결합할 수 있다.

//==============================================================
//Todo 리스트 출력하기
//주어진 객체 'Todos'객체에 들어있는 할 일 목록을 콘솔창에 출력하기.
//콘솔에 '0000-00-00 할 일 목록'형태로 출력하기.

const Todos = {
  '2025-02-27': '회의 자료 준비하기',
  '2025-02-28': '프로젝트 코드 리뷰',
  '2025-03-01': '책 한 챕터 읽기',
  '2025-03-02': '집 청소하기',
  '2025-03-03': '운동 1시간 하기',
  '2025-03-04': '개인 프로젝트 작업',
  '2025-03-05': '친구와 저녁 약속',
  '2025-03-06': '영화 감상',
  '2025-03-07': '주간 업무 정리',
  '2025-03-08': '가족과 나들이',
};

for (const todo in Todos) {
  const log = `${todo} ${Todos[todo]}`;
  //프로퍼티 키를 통해 프로퍼티 값 가져오고, 콘솔에 출력할 문자열log만들기.
  console.log(log);
}
/*
2025-02-27 회의 자료 준비하기
2025-02-28 프로젝트 코드 리뷰
2025-03-01 책 한 챕터 읽기
2025-03-02 집 청소하기
2025-03-03 운동 1시간 하기
2025-03-04 개인 프로젝트 작업
2025-03-05 친구와 저녁 약속
2025-03-06 영화 감상
2025-03-07 주간 업무 정리
2025-03-08 가족과 나들이
*/

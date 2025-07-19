/* 객체는 0개 이상의 프로퍼티로 구성된 집합이며, 각 프로퍼티는 key-value쌍으로
이루어져 있다. 
    const person = {
      name: 'Lee',
      age: 20
    };
  -> 프로퍼티 key는 name, value는 'Lee'
  -> 프로퍼티 key는 age, value는 20
*/

//생성자 함수 new Object()를 활용하영 객체 생성하기.
const person = new Object();
person.name = 'Lee';
person.age = 20;
console.log(person); //{ name: 'Lee', age: 20 }

//Object.create()메소드 활용하여 지정한 객체를 프로토타입으로 갖는 새 객체 생성하기.
const basePerson = {
  isHuman: true,
};
const person1 = Object.create(basePerson);
person1.name = 'Lee'; //person1은 basePerson을 프로토타입으로 가지는 새로운 객체이다.

console.log(person1); //{name: 'Lee'} -> isHuman은 직접 가진 속성이 아니라
//프로토타입에 있기 때문에 콘솔에서는 안 보이고, 프로트타입 체인을 따라가면 찾을 수 있다.
console.log(person1.isHuman); // true
//프로토타입에 있는 속성은 객체.속성명 접근 가능하지만,
//hasOwnProperty로는 false가 나온다.
console.log(person1.hasOwnProperty('isHuman')); //false

//동적 프로퍼티 사용 -> 변수 활용하여 동적으로 프로퍼티 키 지정하기.
const keyName = '성별';
const value = '남성';
const person2 = {
  name: 'Lee',
  age: 20,
  [keyName]: value,
};
console.log(person2); //{ name: 'Lee', age: 20, '성별': '남성' }

//===========================================================

/*JSON(JavaScript Object Notation)
  {
    "name": "철수",
    "age": 25,
    "isStudent": false
  }
*/

//JSON데이터를 JS에서 객체로 변환하기.
const jsonData = '{"name": "철수", "age": 25, "isStudent": false}';

const user = JSON.parse(jsonData);
console.log(user); //{ name: '철수', age: 25, isStudent: false }
console.log(user.name); //철수

//객체 -> 문자열(JSON)로 변환
const backToJson = JSON.stringify(user);
console.log(backToJson); //{"name":"철수","age":25,"isStudent":false}

//========================================================
const pencil = {
  color: 'red',
  length: '10cm',
};

const hightlighter = {
  color: 'yellow',
  weight: '얇음',
};

const erazer = {
  vertical: '5cm',
  horizontal: '70cm',
};

const pencilCase = {
  size: 'big',
  shape: 'kiwi',
  details: [pencil, hightlighter, erazer],
};

console.log(pencil); //{ color: 'red', length: '10cm' }
console.log(hightlighter); //{ color: 'yellow', weight: '얇음' }
console.log(erazer); //{ vertical: '5cm', horizontal: '70cm' }
console.log(pencilCase);
/*{
  size: 'big',
  shape: 'kiwi',
  details: [
    { color: 'red', length: '10cm' },
    { color: 'yellow', weight: '얇음' },
    { vertical: '5cm', horizontal: '70cm' }
    ]
} 
*/

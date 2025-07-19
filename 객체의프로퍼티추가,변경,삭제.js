//프로퍼티 추가
const oz_kim = {
  name: '김오즈',
};

oz_kim.age = 32; //age프로퍼티 추가
console.log(oz_kim); //{ name: '김오즈', age: 32 }

oz_kim['gender'] = '여성';
console.log(oz_kim); //{ name: '김오즈', age: 32, gender: '여성' }

//프로퍼티 값 변경

oz_kim.age = 34;
oz_kim['gender'] = '강인한 여성';

console.log(oz_kim); //{ name: '김오즈', age: 34, gender: '강인한 여성' }

//프로퍼티 키 변경하고 싶을 때는 삭제 후 새로운 프로퍼티를 추가해야 한다.
delete oz_kim.name;
oz_kim.nickName = '오즈코딩';

console.log(oz_kim); //{ age: 34, gender: '강인한 여성', nickName: '오즈코딩' }

//delete 연산자 뒤에 오는 내용은 객체 프로퍼티 값에 접근할 수 있어야 하고,
//.표현식과 []표현식 모두 사용 가능하다.
//delete 연산자는 객체의 프로퍼티에만 사용해야하며, 변수나 다른 값에는 사용하면 안된다.

//=============================================================

let book = {
  name: '어린 왕자',
  author: '앙투안 드 생텍쥐페리',
  reviewPoints: 5,
  publisher: '인디고',
  price: 10620,
};
console.log(book);

book.price = 12000;
delete book['publisher'];
book['originalTitle'] = 'Le Petit Prince';

console.log(book);

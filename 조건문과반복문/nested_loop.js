const arr = [[1, 2], [3, 4], [5, 6]];

for (let i = 0; i < arr.length; i++){
  for (let j = 0; j <arr[i].length; j++){
    console.log(`행${i}, 열${j}: ${arr[i][j]}`);
  }
}
//arr은 3개의 배열이 포함되어 있는 중첩 배열이다. 
//각 내부 배열은 2개의 숫자를 가지고 있으므로, 총 6개의 숫자가 2차원 구조로 저장되어 있다.

//=======좌석 번호 출력하기==========
const seats = [
  ['A1', 'A2', 'A3'],
  ['B1', 'B2', 'B3'],
  ['C1', 'C2', 'C3']
]; //3행(seats.length) X 3열(seats[i].length)의 2차원 배열

for (let i = 0; i < seats.length; i++){   //seats의 각 행을 하나씩 가져온다.
  for (let j = 0; j < seats[i].length; j++){  //행(seats[i])의 각 열을 하나씩 가져온다.
    console.log(`좌석 번호 : ${seats[i][j]}`);  //예 : seats[0][1] -> A2
  }
}// 좌석 번호: A1
// 좌석 번호: A2
// 좌석 번호: A3
// 좌석 번호: B1
// 좌석 번호: B2
// 좌석 번호: B3
// 좌석 번호: C1
// 좌석 번호: C2
// 좌석 번호: C3


//=======게임보드 점수 합산하기=========
const board = [
  [5, 10, 15],
  [20, 25, 30],
  [35, 40, 45]
];  //3행 3열의 2차원 배열. 
    //예를 들어 board[0][1] -> 10

    
 //반복문 사용
let total = 0;

for (let i = 0; i < board.length; i++){
  for (let j = 0; j < board[i].length; j++){
    total += board[i][j];
  }
}
console.log(`총 점수 : ${total}`); //총 점수 : 225

//for...of문 사용
const matrix = [
  [10, 20],
  [30, 40],
  [50, 60]
];
for (const row of matrix){   //matrix의 행을 나타냄.
  for (const value of row){  //각 행의 값들을 나타냄
    console.log(value);  //10 //20 //30 //40 //50 //60
  }
}

//=======예약 가능한 좌석만 출력하기====
// 1. 주어진 seats 배열을 직접 사용하여 코드를 작성하세요.
// 2. 다중 반복문을 사용하여 모든 좌석 정보를 순회하세요.
// 3. 각 좌석의 상태가 '비어있음'인지 확인하세요.
// 4. 만약 좌석이 '비어있음' 상태라면, 해당 좌석의 이름을 console.log를 사용하여 출력하세요

// 좌석 상태 배열
const seatsState = [
  [
    ['A1', '예약됨'],
    ['A2', '비어있음'],
    ['A3', '비어있음'],
  ],
  [
    ['B1', '비어있음'],
    ['B2', '예약됨'],
    ['B3', '비어있음'],
  ],
  [
    ['C1', '예약됨'],
    ['C2', '예약됨'],
    ['C3', '비어있음'],
  ],
];

 /* 반복문
for (let i = 0; i < seatsState.length; i++){
  for (let j = 0; j < seatsState[i].length; j++){
    const seat = seatsState[i][j][0];
    const status = seatsState[i][j][1];
    if (status === '비어있음'){
      console.log(seat);
    }
  }
}
*/

 //for...of문
for (const row of seatsState){
  for (const status of row){
    const seatsState = status[0];
    const state = status[1];
  if (state === "비어있음"){
    console.log(seatsState);
    }
  }
} 

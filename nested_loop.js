const arr = [[1, 2], [3, 4], [5, 6]];

for (let i = 0; i < arr.length; i++){
  for (let j = 0; j <arr[i].length; j++){
    console.log(`행${i}, 열${j}: ${arr[i][j]}`);
  }
}
//arr은 3개의 배열이 포함되어 있는 중첩 배열이다. 
//각 내부 배열은 2개의 숫자를 가지고 있으므로, 총 6개의 숫자가 2차원 구조로 저장되어 있다.


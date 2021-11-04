function solution(arr){
  let answer = 0;
  let num = 1;
  let row1 = -1;
  let col1 = -1;
  let row2 = -1;
  let col2 = -1;

  while(num < 9){
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[0].length; j++){
        if(arr[i][j] === num){
          row1 = i;
          col1 = j;
        } 
        if(arr[i][j] === num+1){
          row2 = i;
          col2 = j;
        }
        // console.log(num, arr[i][j], row1, col1, row2, col2, answer)
        if(row1 != -1 && col1 != -1 && row2 != -1 && col2 != -1){
          answer += Math.abs(row1-row2)+Math.abs(col1-col2);
          row1 = -1;
          col1 = -1;
          row2 = -1;
          col2 = -1;
          num++;
        }
      }
    }
  }
  return answer;
}
let arr = [[1, 5, 7],
           [4, 2, 6],
           [9, 8, 3]]

let arr2 = [[9, 5, 6],
            [1, 2, 3],
            [8, 7, 4]]

console.log(solution(arr2))
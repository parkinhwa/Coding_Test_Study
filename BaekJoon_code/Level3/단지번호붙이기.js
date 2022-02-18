let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let n = input.shift();
let arr = [];
for(let i = 0; i < input.length; i++){
  arr.push(input[i].split("").map(Number));
}
// console.log(n, arr);
// let n = 7;
// let input = [[0,1,1,0,1,0,0],
//              [0,1,1,0,1,0,1],
//              [1,1,1,0,1,0,1],
//              [0,0,0,0,1,1,1],
//              [0,1,0,0,0,0,0],
//              [0,1,1,1,1,1,0],
//              [0,1,1,1,0,0,0]]

let num_of_house = [];
function solution(arr){
  let answer = 0;
  let count = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(x, y){
    arr[x][y] = 0;
    answer++;
    for(let k = 0; k < 4; k++){
      let nx = x+dx[k];
      let ny = y+dy[k];
      if(nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1){
        DFS(nx, ny)
      }
    }
  }
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      if(arr[i][j] === 1){
        // console.log(i, j)
        answer = 0;
        count++;
        arr[i][j] = 0;
        DFS(i, j);
        num_of_house.push(answer);
      }
    }
  }
  return count;
}
console.log(solution(arr))
num_of_house.sort((a, b)=> a-b)
for(let m = 0; m < num_of_house.length; m++){
  console.log(num_of_house[m]);
}
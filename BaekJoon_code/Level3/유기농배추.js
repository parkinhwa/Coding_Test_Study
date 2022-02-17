let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let t = Number(input.shift());
// let t = 2;
// let m = 10, n = 8, k = 17;
// let input = [[0, 0], [1, 0], [1, 1], [4, 2], [4, 3], [4, 5], [2, 4], [3, 4], [7, 4], [8, 4], [9, 4], [7, 5], [8, 5], [9, 5], [7, 6], [8, 6], [9, 6]];

function solution(n, m, arr){
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(x, y){
    arr[x][y] = 0;
    for(let s = 0; s < 4; s++){
      let nx = x+dx[s];
      let ny = y+dy[s];
      if(nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] === 1){
        DFS(nx, ny);
      }
    }
  }
  for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
      // console.log(i, j, arr[i][j])
      if(arr[i][j] === 1){
        arr[i][j] = 0;
        // console.log(i, j);
        answer++;
        DFS(i, j);        
      }
    }
  }
  return answer;
}

for(let i = 0; i < t; i++){
  let arr = [];
  let [m, n, k] = input.shift().split(" ").map(Number);
  for(let i = 0; i < k; i++){
    arr.push(input.shift().split(" ").map(Number));
  }
  let field = Array.from(Array(n), ()=>Array(m).fill(0));
  for([a, b] of arr){
    field[b][a] = 1;
  }
  console.log(solution(n, m, field));
}
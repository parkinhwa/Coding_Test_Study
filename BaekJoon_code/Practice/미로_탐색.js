let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let [n, m] = input.shift().split(" ");
let map = input.map(v => v.split("").map(x => +x));

function solution(arr){
  console.log(arr, n, m)
  let answer = 1;
  // let n = arr.length;
  // let m = arr[0].length;
  let dx = [-1, 0, 1, 0]
  let dy = [0, 1, 0, -1]
  let queue = [];
  queue.push([0,0]);
  arr[0][0] = 0;
  while(queue.length > 0){
    let size = queue.length;
    for(let i = 0; i < size; i++){
      let [x, y] = queue.shift();
      for(let j = 0; j < dx.length; j++){
        let nx = x + dx[j];
        let ny = y + dy[j];
        if(nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] === 1){
          if(nx == n-1 && ny == m-1){
            return ++answer;
          }
          // console.log(answer, "\n", arr)
          queue.push([nx, ny]);
          arr[nx][ny] = 0;          
        }
      }
    }
    answer++;
  }
  return -1;
}
// let arr = [[1, 0, 1, 1, 1, 1],
//            [1, 0, 1, 0, 1, 0],
//            [1, 0, 1, 0, 1, 1],
//            [1, 1, 1, 0, 1, 1]]

// let arr2 = [[1, 1, 0, 1, 1, 0],
//             [1, 1, 0, 1, 1, 0],
//             [1, 1, 1, 1, 1, 1],
//             [1, 1, 1, 1, 0, 1]]

// let arr3 = [[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
//             [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1]]

// let arr4 = [[1, 0, 1, 1, 1, 1, 1],
//             [1, 1, 1, 0, 0, 0, 1],
//             [1, 0, 0, 0, 0, 0, 1],
//             [1, 0, 0, 0, 0, 0, 1],
//             [1, 0, 0, 0, 0, 0, 1],
//             [1, 0, 0, 0, 0, 0, 1],
//             [1, 1, 1, 1, 1, 1, 1]]

console.log(solution(map))
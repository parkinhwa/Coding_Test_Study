const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let [n, m] = input.shift().split(" ").map(Number);
let arr = [];
let answer = 0;

for(let i = 0; i < n; i++){
  arr.push(input.shift().split("").map(Number)); // Number 안해줬다고 틀림... 이거 때문에 몇분을 헤맸는가....
}

for(let i = 0; i < n; i++){
  for(let j = 0; j < m; j++){
    for(let k = 1; k < n; k++){
      if(i+k >= n || j+k >= m){
        break;
      }
      if(arr[i+k][j] == arr[i][j] && arr[i][j+k] == arr[i][j] && arr[i+k][j+k] == arr[i][j]){
        answer = Math.max(answer, k+1)
      }
    }
  }
}
if(answer == 0){
  console.log(1);
} else {
  console.log(answer*answer);
}
let input = require('fs').readFileSync("/dev/stdin").toString().trim();
let n = Number(input);
let answer = 0;
let squ = parseInt(Math.sqrt(n))
let dp = []
dp[0] = 0;
for(let i = 1; i < n+1; i++){
  dp[i] = i
}
// console.log(dp)
for(let i = 1; i < squ+1; i++){
  for(let j = 1; j < n+1; j++){
    if(Math.sqrt(j)%1 === 0){
      dp[j] = 1;
    } else {
      if(j-i**2 > 0){
        console.log(i, j, j-i**2, dp[j], dp[j-i**2]+1)
        dp[j] = Math.min(dp[j], dp[j-i**2]+1)
      }
    }
  }
}
console.log(dp[n]);
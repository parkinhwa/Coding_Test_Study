let [input] = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

let DP = new Array(input+1).fill(0);

for(let i = 2; i < input+1; i++){
  DP[i] = DP[i-1]+1;
  if(i % 2 === 0){
    DP[i] = Math.min(DP[i], DP[i/2]+1);
  }
  if(i % 3 === 0){
    DP[i] = Math.min(DP[i], DP[i/3]+1);
  }
}

console.log(DP[input])


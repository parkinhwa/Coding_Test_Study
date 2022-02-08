let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let site = [];
for(let i = 0; i < N; i++){
  site.push(input[i].split(" "));
}
// console.log(N, M, site)
let answer = "";
for(let j = 0; j < M; j++){
  for(let k = 0; k < N; k++){
    // console.log(input[N+j], site[k][0])
    if(input[j+N] == site[k][0]){
      answer += site[k][1]+"\n";
    }
  }
}
console.log(answer);
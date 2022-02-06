let input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(Number);

let n = input.shift();
let num = [1, 2, 3];

function solution(input, num){
  let answer = 0;
  function DFS(L, sum){
    if(sum > input) return;
    if(L > input) return;
    // console.log(sum, input)
    if(sum === input){
      answer++;
    } else {
      for(let k = 0; k < num.length; k++){
        DFS(L+1, sum+num[k]);
      }
    }
  }
  DFS(0,0);
  return answer;
}
for(let i = 0; i < n; i++){
  console.log(solution(input[i], num));
}

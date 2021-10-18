const input = require('fs').readFileSync('/dev/stdin').toString().split(" ")

let a = input[0]
let b = input[1]
let answer = 0;
let num369 = /3|6|9/g;

for(let i = a; i <= b; i++){
  if(String(i).match(num369)){
    answer++;
  }else if(i%3==0){
    answer++;
  }
}

console.log(answer)
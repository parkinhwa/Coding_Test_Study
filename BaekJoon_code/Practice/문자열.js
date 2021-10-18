const input = require('fs').readFileSync('/dev/stdin').toString().split(" ")

let x = input[0].split("")
let y = input[1].split("")
let min = x.length

for(let i = 0; i <= y.length-x.length; i++){
  let answer = 0;
  for(let j = i; j < i+x.length; j++){
    if(x[j-i] !== y[j]) answer++;
  }

  if(answer < min) min = answer; 

}
console.log(min)
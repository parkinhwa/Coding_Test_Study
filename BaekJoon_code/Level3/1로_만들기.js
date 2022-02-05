let [input] = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

let answer = 1;
while(input > 2){
  if(input % 3 === 1){
    input = input - 1;
  } else if(input % 2 === 1){
    input = input - 1;
  } 
  console.log(input);
  if(input % 3 === 0){
    input = input/3;
  } else if(input % 2 === 0){
    input = input/2;
  }
  console.log(input);
  answer++;
}

console.log(answer);
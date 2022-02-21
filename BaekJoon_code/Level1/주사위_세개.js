let input = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let count = 1;
let answer = 0;
for(let i = 0; i < input.length-1; i++){
  for(let j = i+1; j < input.length; j++){
    if(input[i] === input[j]) count++;
  }
  if(count === 2){
    answer = 1000+input[i]*100;
    break;
  }else if(count === 3){
    answer = 10000+input[i]*1000;
    break;
  }
}
if(count === 1){
  answer = Math.max(...input)*100;
}
console.log(answer);

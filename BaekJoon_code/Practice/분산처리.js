const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let t = input.shift()
let str = "";
for(let i = 0; i < t; i++){
  let [a, b] = input.shift().split(" ").map(Number);
  a = a%10
  b = b%4;
  if(b == 0) {
    b = 4;
  }
 
  let answer = 1;
  for(let j = 0; j < b; j++){
    answer *= a;
    str = answer.toString();
    answer = Number(str[str.length-1])
  }
  if(answer != 0){
    console.log(answer)
  } else {
    console.log(10)
  }
}
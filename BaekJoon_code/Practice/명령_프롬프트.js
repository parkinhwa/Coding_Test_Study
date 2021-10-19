const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let n = input.shift()
let str = [];
let answer = "";
for(let i = 0; i < n; i++){
  str.push(input.shift());
}
let sen = str[0][0];
for(let j = 0; j < str[0].length; j++){
  for(let k = 0; k < str.length; k++){
    if(sen != str[k][j]){
      answer += "?";
      break;
    } else if(k == str.length-1){
      answer += sen;
    }
  }
  sen = str[0][j+1] 
}

console.log(answer);
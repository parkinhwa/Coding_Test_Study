let input = require('fs').readFileSync("/dev/stdin").toString();
input = input.replace("\n", "");
let croatia = /c=|c-|dz=|d-|lj|nj|s=|z=/g;
let count = 0;

if(croatia.test(input)){
  // 정규식 포함된 횟수 구하기
  count = input.match(croatia).length;
  input = input.replace(croatia, "");
}
if(input){
  count += input.length;
  input = "";
}

console.log(count);
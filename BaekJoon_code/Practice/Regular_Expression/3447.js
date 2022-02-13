let input = require('fs').readFileSync("/dev/stdin").toString().split("\n");
let Regex = /BUG/g;
for(let i = 0; i < input.length-1; i++){
  input[i] = input[i].replace(Regex, "");
  console.log(input[i]);
}
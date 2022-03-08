let input = require('fs').readFileSync("/dev/stdin").toString().split("\n");
let Regex = /BUG/g;
for(let i = 0; i < input.length-1; i++){
  let str = input[i]
  while(Regex.test(str)){
    str = str.replace(Regex, "");
  }
  console.log(str);
}
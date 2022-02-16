let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let n = Number(input.shift());
let count = 0;
for(let i = 0; i < n; i++){
  let str = input[i];
  for(let j = 0; j < str.length-1; j++){
    if(str[j] === str[j+1]){
      str = str.replace(str[j+1], "");
      j--;
    }
  }
  let arr = str.split("");
  let set = new Set(arr);
  if(arr.length === set.size){
    count++;
  }
}
console.log(count);
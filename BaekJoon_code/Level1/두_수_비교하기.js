const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
let [a, b] = input

if(a < b){
  console.log("<");
} else if(a > b){
  console.log(">");
} else {
  console.log("==");
}



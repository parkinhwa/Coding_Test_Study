const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

if(input%4 == 0 && input%100 != 0 || input%400 == 0){
  console.log(1)
} else {
  console.log(0)
}

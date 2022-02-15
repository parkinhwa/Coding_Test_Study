let input = require('fs').readFileSync("/dev/stdin").toString().split("");
// input.replace("\n", "");
let num = Number(input[0]+input[1]);
if(num < 10){
  input = "0"+input;
}
// console.log(input.length)

let count = 0;
while(1){
  let sum = "";
  sum += Number(input[0])+Number(input[1]);
  //console.log("sum = ", sum);
  input = input[1]+sum[sum.length-1];
  //console.log("input = ", input);
  count++;
  if(Number(input) === num){
    break;
  }
}
console.log(count);
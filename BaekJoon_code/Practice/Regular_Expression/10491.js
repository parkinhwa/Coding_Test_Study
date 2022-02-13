let input = require('fs').readFileSync("/dev/stdin").toString().split("\n");
let problem = /problem/i;
for(let i = 0; i < input.length-1; i++){
  if(problem.test(input[i])){
    console.log("yes")
  } else {
    console.log("no")
  }
}
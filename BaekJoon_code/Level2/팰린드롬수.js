let input = require('fs').readFileSync('/dev/stdin').toString().split("\n")
answer = " "
for(let i = 0; i < input.length-1; i++){
  let reverinput = input[i].split("").reverse().join("")
  if(input[i] == 0) break;
  if(input[i] === reverinput){
    answer = "yes"
  } else {
    answer = "no"
  }
  console.log(answer)
}


const input = require('fs').readFileSync('/dev/stdin').toString().split("\n")

for(let i = 0; i < input.length; i++){
  let value = input[i].split(" ").map(Number)
  value.sort((a, b) => a-b)
  if(value[0] == 0){
    break;
  } else {
    if(value[0]**2+value[1]**2 == value[2]**2){
      console.log("right")
    } else {
      console.log("wrong")
    }
  }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
let asc = 1;
let des = 7;
for(let i = 0; i < input.length-1; i++){
  if(input[i] == input[i+1]-1){
    asc++;
    if(asc === 8){
      console.log("ascending");
    }
  } else if(input[i] == input[i+1]+1){
    des--;
    if(des === 0){
      console.log("descending");
    }
  } else{
    console.log("mixed")
    break;
  }
}
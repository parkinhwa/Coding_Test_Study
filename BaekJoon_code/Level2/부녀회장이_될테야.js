let input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(Number);
let num = input.shift();
let arr = [];

for(let i = 0; i < num; i++){
  arr.push([input[i*2], input[i*2+1]]);
}

arr.sort((a, b) => {
  if(a[0] === b[0]){ 
      return b[1] - a[1]; 
  } else {
      return b[0] - a[0]; 
  }
});

let apt = Array.from(Array(arr[0][0]+1), ()=>Array(arr[0][1]+1).fill(0))
for(let i = 0; i <= arr[0][0]; i++){
  for(let j = 0; j <= arr[0][1]; j++){
    // console.log(apt)
    if(i === 0){
      apt[i][j] = j+1;
    } else if(j === 0){
      apt[i][j] = 1;
    } else {
      apt[i][j] = apt[i-1][j] + apt[i][j-1];
    }
  }
}

for(let i = 0; i < num; i++){
  console.log(apt[input[i*2]][input[i*2+1]-1])
}

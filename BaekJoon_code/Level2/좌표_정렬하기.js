const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let n = Number(input.shift());
let answer = "";
const arr = input.map(a =>
  a.split(' ').map(nums => parseInt(nums))
);
arr.sort((a, b) => {
    if(a[0] === b[0]){ 
        return a[1] - b[1]; 
    } else {
        return a[0] - b[0]; 
    }
});

for(let j = 0; j < n; j++){
  answer += arr[j][0]+" "+arr[j][1]+"\n"
}

console.log(answer)
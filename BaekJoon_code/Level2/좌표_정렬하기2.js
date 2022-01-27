const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let num = Number(input.shift());
let answer = "";
let arr = input.map(a =>
  a.split(' ').map(nums => parseInt(nums))
);
arr.sort((a, b) => {
    if(a[1] === b[1]){ 
        return a[0] - b[0]; 
    } else {
        return a[1] - b[1]; 
    }
});

for(let i = 0; i < num; i++){
  answer += arr[i][0]+" "+arr[i][1]+"\n"
}

console.log(answer);
// 에라토스테네스의 체 메모리가 많을 때
let fs = require('fs'); let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [n,m] = input.shift().split(' ').map(e=>parseInt(e)); 
const arr = Array.from(Array(m+1).keys()) 
for(let i=2; i<=Math.sqrt(m); i++){ 
  if(arr[i]){
    for(let j = i*i; j<=m; j+=i) arr[j] = false;
  }  
} 
arr.splice(0,2,false,false) 
for(let i = n; i<=m; i++){ 
  if(arr[i]) console.log(arr[i]) 
}

// const input = require('fs').readFileSync('/dev/stdin').toString().split(" ")

// let m = Number(input[0])
// let n = Number(input[1])
// let stack = []

// for(let i = m; i <= n; i++){
//   stack.push(i)
//   for(let j = 2; j <= Math.ceil(Math.sqrt(i)); j++){
//     if(i%j == 0){
//       stack.pop()
//       break;
//     }
//   }
// }
// console.log(stack.join("\n"))
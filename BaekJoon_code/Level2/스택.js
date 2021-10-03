const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

const stack = [];
const result = [];

const len = input.shift();

for (let i = 0; i < len; i++) {        
    switch(input[i]) {
        case 'pop': 
          result.push(stack.pop() || -1);
          break;

        case 'size': 
          result.push(stack.length);
          break;

        case 'empty': 
          result.push(stack[0] ? 0 : 1);
          break;

        case 'top': 
          result.push(stack[stack.length - 1] || -1);
          break;

        default:
          let num = Number(input[i].split(" ")[1])
          stack.push(num);
          break;
    }
}

console.log(result.join('\n'));

// let n = Number(input[0])
// let arr = []

// for(let i = 1; i <= n; i++){
//   if(input[i].includes('push')){
//     let num = input[i].split(" ")[1]
//     arr.push(Number(num))
//   } else if(arr.length != 0 && input[i] == 'pop'){
//     console.log(arr.pop())
//   } else if(arr.length != 0 && input[i] == 'top'){
//     console.log(arr[arr.length-1])
//   } else if(input[i] == 'size'){
//     console.log(arr.length)
//   } else if(input[i] == 'empty'){
//     if(arr.length == 0){
//       console.log(1)
//     } else {
//       console.log(0)
//     }
//   } else {
//     console.log(-1)
//   }
// }
const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const open = ["(", "["];
const closed = [")", "]"];
let stack;
const yesno = [];
arr.slice(0, arr.length-1).forEach(v => {
    let isNo = false;
    stack = [];
    for (let i=0; i<v.length; i++) {
        if (open.includes(v[i])) stack.push(v[i]);
        else if (closed.includes(v[i])) {
            if (stack.pop() !== open[closed.indexOf(v[i])]) {
                yesno.push("no");
                isNo = true;
                break;
            }
        }
    }
    if (!isNo) {
        if (stack.length === 0) yesno.push("yes");
        else yesno.push("no");
    }
});
console.log(yesno.join("\n"));
// const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let answer = "";
// for(let i = 0; i < input.length-1; i++){
//   let str = input[i].match(/\[|\]|\(|\)/gi);
//   let stack = [];
//   //console.log(str, input[i])
//   if(input[i] === "."){
//     //console.log("hihi"+input[i])
//     if(answer === ""){
//       answer += "no\n"
//     }
//     console.log(answer);
//     break;
//   } else if(str === null){
//     answer += "yes\n";
//     //console.log("1111yes")
//   } else {
//     for(let j = 0; j < str.length; j++){
//       if(str[j] === "(" || str[j] === "["){
//         stack.push(str[j]);
//       } else if(str[j] === ")" && stack[stack.length-1] === "("){
//         stack.pop();
//       } else if(str[j] === "]" && stack[stack.length-1] === "["){
//         stack.pop();
//       } else {
//         answer += "no\n";
//       }
//     }
//     //console.log(stack, stack.length)
//     if(stack.length === 0){
//       answer += "yes\n"
//     }
//   }  
// }
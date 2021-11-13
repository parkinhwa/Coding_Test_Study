const input = Number(require('fs').readFileSync('/dev/stdin').toString());

let anum = [];
let bnum = [];

anum[0] = 1;
bnum[0] = 0;

anum[1] = 0;
bnum[1] = 1;

for(let i = 2; i <= input; i++){
  anum[i] = anum[i-1] + anum[i-2];
  bnum[i] = bnum[i-1] + bnum[i-2];
}

console.log(anum[anum.length-1], bnum[bnum.length-1])
// let str = "A";
// let answer = "";
// let result = [];
// let a_count = 0;
// let b_count = 0;
// for(let i = 0; i < input; i++){
//   str = str.split("");
//   answer = "";
//   for(let j = 0; j < str.length; j++){
//     //console.log(a_count, b_count, str[j])
//     if(str[j] === "A"){
//       answer += "B"
//       b_count++;
//     } else if(str[j] === "B"){
//       answer += "BA"
//     }
//   }
//   str = answer;
//   //console.log(answer);
// }
// a_count = answer.length-b_count;
// result.push(a_count, b_count);
// console.log(...result);

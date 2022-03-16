let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input.shift());
// let n = 4;
// let input = ['01bond', '02james007', '03bond', '04austinpowers000'];
let answer = [];
let num = "";
for(let i = 0; i < n; i++){
  let str = input[i];
  if(!isNaN(str)){
    str = Number(str);
    answer.push(str);
    continue;
  }
  for(let j = 0; j < str.length; j++){
    if(!isNaN(str[j])){
      // console.log(str[j])
      num += str[j];
    } else {
      if(num != ""){
        // console.log(num, str[j])
        num = Number(num);
        answer.push(num);
        num = "";
      }
    }
  }
  if(num != ""){
  //console.log(num, str[j])
  num = Number(num);
  answer.push(num);
  }
  num = "";
}
answer.sort((a, b)=>a-b);
answer.forEach((x)=>{
  console.log(x);
})
const input = Number(require('fs').readFileSync('/dev/stdin').toString());
let str = "A";
let answer = "";
let result = [];
let a_count = 0;
let b_count = 0;
for(let i = 0; i < input; i++){
  str = str.split("");
  answer = "";
  for(let j = 0; j < str.length; j++){
    //console.log(a_count, b_count, str[j])
    if(str[j] === "A"){
      answer += "B"
      b_count++;
    } else if(str[j] === "B"){
      answer += "BA"
    }
  }
  str = answer;
  //console.log(answer);
}
a_count = answer.length-b_count;
result.push(a_count, b_count);
console.log(...result);

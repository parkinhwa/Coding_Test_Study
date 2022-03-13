let input = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ");
// let input = ["zepelepenapa", "papapripikapa"]
let vowel = /[aeiou]/g;
let answer = "";
for(let i = 0; i < input.length; i++){
  let str = input[i];
  for(let j = 0; j < str.length; j++){
    if(str[j].match(vowel)){
      answer += str[j];
      j+=2;
    } else {
      answer += str[j];
    }
  }
  answer += " ";
}
console.log(answer);
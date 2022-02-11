// let input = ["How are you today?",
// "Quite well, thank you, how about yourself?",
// "I live at number twenty four.",
// "#"];
let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let vowel = /[aeiou]/i;

for(let i = 0; i < input.length; i++){
  let count = 0;
  if(input[i] === "#"){
    break;
  } else {
    for(let j = 0; j < input[i].length; j++){
      if(input[i][j].match(vowel)){
        count++;
      }
    }
    console.log(count);
  }
}
let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = ["a","tv","ptoui","zoggax","wiinq","eep","houctuh","aeiou","end"]

let vowel = /[aeiou]/;
let con = /[eo]/;

for(let i = 0; i < input.length-1; i++){
  let str = input[i];
  let answer = "";
  if(str === "end"){
    break;
  }
  if(!vowel.test(str)){
    console.log("<"+str+">"+" is "+"not "+"acceptable.");
    continue;
  }
  let vowelcount = 0;
  let concount = 0;
  for(let j = 0; j < str.length; j++){
    if(vowel.test(str[j])){
      concount = 0;
      vowelcount++;
    } else {
      vowelcount = 0;
      concount++;
    }
    if(vowelcount === 3 || concount === 3){
      // console.log("모음 자음 3개연속")
      answer = "<"+str+">"+" is "+"not "+"acceptable.";
      break;
    }
    if(j > 0 && str[j-1] === str[j] && !con.test(str[j])){
      // console.log("같은 글자 두개")
      answer = "<"+str+">"+" is "+"not "+"acceptable.";
      break;
    }
    // console.log(str[j], "모음 = ", vowelcount, "자음 = ", concount);
  }
  if(!answer){
    answer = "<"+str+">"+" is "+"acceptable.";
  }
  console.log(answer);
}

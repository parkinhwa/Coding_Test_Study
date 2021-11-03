function solution(str){
  let answer = [];
  let count = 1;
  answer.push(str[0])
  for(let i = 1; i < str.length; i++){
    if(str[i-1] == str[i]){
      count++;
    } else {
      if(count != 1){
        answer.push(count);
        count = 1;
      }
      answer.push(str[i])
    }
  }
  return answer.join("");
}
let s = "KKHSSSSSSSEH"
console.log(solution(s));
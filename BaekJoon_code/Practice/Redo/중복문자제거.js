function solution(s){
  let answer = [];
  s = s.split("");
  for(let i = 0; i < s.length; i++){
    if(!answer.includes(s[i])){
      answer.push(s[i]);
    }
  }
  return answer.join("");
}
let s = "ksetkkset";
console.log(solution(s))
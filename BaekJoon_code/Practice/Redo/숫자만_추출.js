function solution(s){
  let answer = "";
  answer = Number(s.toLowerCase().replace(/[^0-9]/g, ''));
  return answer;
}

let s = "g0en2T0s8eSoft"
console.log(solution(s))
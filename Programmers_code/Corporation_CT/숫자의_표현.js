let n = 15;

function solution(n) {
    var answer = 1;
    for(let i = 0; i < parseInt(n/2); i++){
      let sum = 0;
      let num = i;
      while(sum <= n){
        if(sum === n) {
          answer++;
        }
        sum += num++;
      }
    }
    return answer;
}

console.log(solution(n));
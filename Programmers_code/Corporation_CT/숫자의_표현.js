let n = 15;

function solution(n) {
    var answer = 0;
    for(let i = 0; i < parseInt(n/2); i++){
      let sum = 0;
      let num = 1+i;
      while(sum <= n){
        if(sum === n) {
          answer++;
        }
        sum += num;
        num++;
      }
    }
    return answer+1;
}

console.log(solution(n));
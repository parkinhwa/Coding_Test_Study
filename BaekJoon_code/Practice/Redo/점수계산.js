function solution(arr){
  let answer = 0;
  let score = [];
  if(arr[0] == 1){
    score[0] = 1;
  } else {
    score[0] = 0;
  }
  for(let i = 1; i < arr.length; i++){
    if(arr[i] == 1){
      score[i] = score[i-1]+1
    } else {
      score[i] = 0;
    }
  }
  answer = score.reduce((a, b) => a+b)
  return answer;
}
let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]
console.log(solution(arr));
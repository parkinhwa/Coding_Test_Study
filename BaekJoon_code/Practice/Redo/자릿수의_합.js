function solution(arr){
  let answer = 0;
  let max = 0;
  for(let i = 0; i < arr.length; i++){
    let num = arr[i];
    let sum = 0;
    while(num > 0){
      sum += num%10;
      num = parseInt(num/10);
    }
    if(max < sum){
      max = sum;
      answer = arr[i];
    } else if(max == sum){
      answer = Math.max(answer, arr[i])
    }
  }
  return answer;
}
let arr = [128, 460, 603, 40, 521, 137, 123]
console.log(solution(arr));
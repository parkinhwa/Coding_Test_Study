function solution(arr, n){
  let answer = 0;
  let sum = new Set();
  for(let i = 0; i < arr.length-2; i++){
    for(let j = i+1; j < arr.length-1; j++){
      for(let k = j+1; k < arr.length; k++){
        sum.add(arr[i]+arr[j]+arr[k]);
      }
    }
  }
  sum = [...sum].sort((a, b)=>b-a);
  answer = sum[n-1]
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(arr, 3))
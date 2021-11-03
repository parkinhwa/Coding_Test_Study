function solution(arr){
  let answer = "";
  for(let i = 0; i < arr.length; i++){
    let num = Number(arr[i].toString().split("").reverse().join(""));
    if(num == 2 || num == 3){
      answer += num+" "
    } else {
      for(let j = 2; j <= Math.sqrt(num); j++){
        // console.log(num, j, parseInt(Math.sqrt(num)))
        if(num%j == 0){
          break;
        }
        if(j == parseInt(Math.sqrt(num))){
          answer += num+" "
        }
      }
    }
  }
  return answer;
}
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

function solution(arr){
  let answer = 0;
  for(let i = 0; i < arr.length; i++){
    let garo = 0;
    let sero = 0;
    let ude = 0;
    let dde = 0;
    for(let j = 0; j < arr[0].length; j++){
      garo += arr[i][j];
      sero += arr[j][i];
      ude += arr[j][j];
      dde += arr[arr.length-1-j][j];
    }
    console.log(garo, sero, ude, dde)
    answer = Math.max(garo, sero, ude, dde);
  }
  return answer;
}

let arr = [[10, 13, 10, 12, 15],
           [12, 39, 30, 23, 11],
           [11, 25, 50, 53, 15],
           [19, 27, 29, 37, 27],
           [19, 13, 30, 13, 19]]

console.log(solution(arr))
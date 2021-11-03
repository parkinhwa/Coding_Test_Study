let arr = [[5, 3, 7, 2, 3],
           [3, 7, 1, 6, 1],
           [7, 2, 5, 3, 4],
           [4, 3, 6, 4, 1],
           [8, 7, 3, 5, 2]]

let x = [-1, 0, 1, 0]
let y = [0, 1, 0, -1]
let answer = 0;

for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[0].length; j++){
    let flag = 1;
    for(let k = 0; k < 4; k++){
      let dx = i+x[k]
      let dy = j+y[k]
      // console.log(dx, dy, arr[i][j])
      if(dx > -1&& dx < arr.length && dy > -1 && dy < arr[0].length && arr[i][j] <= arr[dx][dy]){
        flag = 0
        break;
      }
    }
    if(flag) {console.log(arr[i][j]); answer++;}
  }
}

console.log(answer)
let v = [[1,4], [3,4], [3, 10]]
let v2 = [[1,1], [2,2], [1,2]]
let x = [];
let y = [];
function solution(v){
  // answer = [0,0]
  // //XOR 다른 비트만 하나 뱉음
  // answer[0] = v[0][0]^v[1][0]^v[2][0]
  // answer[1] = v[0][1]^v[1][1]^v[2][1]

  // console.log(answer)
  for(let i = 0; i < v.length; i++){
    if(x.includes(v[i][0])){
      x.splice(x.indexOf(v[i][0]), 1)
    } else {
      x.push(v[i][0])
    }
    if(y.includes(v[i][1])){
      y.splice(y.indexOf(v[i][1]), 1)
    } else {
      y.push(v[i][1])
    }
  }
  console.log(x.concat(y)) // 배열 두개 합치기 concat
}

solution(v)

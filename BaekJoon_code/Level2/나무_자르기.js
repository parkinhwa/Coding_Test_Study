
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
// 시간 초과
// let arr = input[1].split(" ").map(Number).sort((a, b)=>a-b);

// 바꾼 코드
let arr = [];
let max = 0;
input[1].split(' ').forEach(v=>{
  v = +v;
  if(+v>max) max=v;
  arr.push(v);
})
let min = 0;
let answer = 0;

while(min <= max){
  let mid = Math.floor((min+max)/2);
  let cnt = 0;
  // 시간초과
  // for(let i = 0; i < n; i++){
  //   if(arr[i]-mid > 0) {
  //     answer += arr[i]-mid;
  //   }
  // }

  // 바꾼 코드
   arr.forEach(arr=>{
    if(arr-mid>0) cnt+=arr-mid;
  })
  
  // console.log(answer, min, max, mid)
  if(cnt >= m){
    if(mid>answer) answer = mid;
    min = mid+1;
  } else {
    max = mid-1;
  }
}

console.log(answer);
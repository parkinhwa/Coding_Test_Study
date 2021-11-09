const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let t = input.shift();
// 조합 함수
const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}

for(let i = 0; i < t; i++){
  let [n, k] = input.shift().split(" ");
  let A = input.shift().split(" ").map(Number);
  let B = input.shift().split(" ").map(Number);
  let A_select = getCombinations(A, k);
  let answer = 0;
  for(let j = 0; j < A_select.length; j++){
    let sum = 0;
    let index = [];
      for(let w = 0; w < A_select[0].length; w++){
        sum += A_select[j][w];
        index.push(A.indexOf(A_select[j][w]))
        //console.log("A = ",A_select[j][w], index)
      }
      for(let s = 0; s < B.length; s++){
          if(!index.includes(s)){
            sum += B[s]
            //console.log("B = ", B[s])
          }
      }
      //console.log("sum = ", sum)
      answer = Math.max(sum, answer);
    }
    console.log(answer);
  }


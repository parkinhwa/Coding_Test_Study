let id_list = ["con", "ryan"]
let report = ["ryan con", "ryan con", "ryan con", "ryan con"]
let k = 3

function solution(id_list, report, k) {
    var answer = [];
    let dec = [];
    let rep = [];
    let count = {};
    let result = [];
    for(let i = 0; i < report.length; i++){
      let content = report[i].split(" ");
      rep.push([content[0], content[1]]);
      dec.push(content[1]);
    }
    // 2차원 배열 key object로 변환
    const arrayToObject = (array) =>
    array.reduce(
      (acc, row) => ((acc[row[0]] = [...(acc[row[0]] || []), row[1]]), acc),
      {}
    );
    rep = arrayToObject(rep);
    // console.log(rep);
    dec.forEach((x) => {
      count[x] = (count[x] || 0)+1;
      if(count[x] === k){
        answer.push(x);
      } 
    })
    id_list.forEach((x) => {
      let n = 0;
      for(let m = 0; m < answer.length; m++){
        if(rep[x]){
          let str = rep[x];
          // console.log(str, Array.isArray(str))
          if(str.includes(answer[m])){
            n++;
          }
        }
      }
      result.push(n);
    })
    // console.log(answer, count)
    return result;
}
console.log(solution(id_list, report, k));
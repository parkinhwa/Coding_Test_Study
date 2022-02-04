// let id_list = ["con", "ryan"]
// let report = ["ryan con", "ryan con", "ryan con", "ryan con"]
// let k = 3
let id_list = ["muzi", "frodo", "apeach", "neo"]
let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
let k = 2
function solution(id_list, report, k) {
    var answer = [];
    let rep = [];
    let count = {};
    let result = [];

    // 신고한 사람 신고당한 사람 2차원 배열
    for(let i = 0; i < report.length; i++){
      let content = report[i].split(" ");
      rep.push([content[0], content[1]]);
    }
    
    // 2차원 배열 key object로 변환
    const arrayToObject = (array) => {
    // array 에 대해 reduce 메서드를 적용한다.
      return array.reduce((acc, row) => {
      // reduce의 초기값은 빈 객체이고, row는 2차원 배열의 한 행을 말한다.
      // 하나의 행은 [신고한 사람, 신고당한 사람] 을 갖고 있으므로, 구조 분해 할당을 통해 나눈다.
      const [key, object] = row;
      // acc는 객체다. key에 value로 배열을 넣는 것인데,
      // acc[key]에 이미 데이터가 존재하면 spread 연산자로 펼쳐 넣어주고
      // 만약 없다면 빈 배열의 데이터를 펼쳐 넣어준다. 즉 아무것도 안넣는다.
      // 그 다음 object 값을 배열에 담아 넣는다.
      // console.log(acc[key])
      if(acc[key] && acc[key].includes(object)){

      } else {
        acc[key] = [...(acc[key] || []), object];
      }
      return acc;
      }, {});
    };
    rep = arrayToObject(rep);
    //console.log(rep);

    // 신고당한 사람 key로 가져와서 몇번 당했는지 카운트, k번 신고당한 사람 answer에 추가
    let keys = Object.keys(rep);
    for(let j = 0; j < keys.length; j++){
      rep[keys[j]].forEach((x) => {
          count[x] = (count[x] || 0)+1;
          if(count[x] === k){
            answer.push(x);
          }
        }) 
      }
    
    // answer에 있는 사람 신고했는지 카운트
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
    //console.log(answer, count)
    return result;
}
console.log(solution(id_list, report, k));
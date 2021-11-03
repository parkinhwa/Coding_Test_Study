function solution(s, t){
    let answer=[];
    let p=1000;
    for(let x of s){
      console.log(answer)
        if(x===t){
            p=0;
            answer.push(p);
        }
        else{
            p++;
            answer.push(p);
        }
    }
    p=1000;
    for(let i=s.length-1; i>=0; i--){
        if(s[i]===t) p=0;
        else{
            p++;
            answer[i]=Math.min(answer[i], p);
        }
    }
    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));

// function solution(s, t){
//   let answer = "";
//   let index = [];
//   for(let i = 0; i < s.length; i++){
//     if(s[i] == t){
//       index.push(i);
//     }
//   }
//   for(let i = 0; i < s.length; i++){
//     let min = Math.abs(i-index[0]);
//     for(let j = 1; j < index.length; j++){
//       if(min > Math.abs(i-index[j])){
//         min = Math.abs(i-index[j])
//       }
//     }
//     answer += min+" "
//   }
//   return answer;
// }
// let s = "teachermode"
// console.log(solution(s, "e"))
function solution(v){
  let answer = [];
  answer[0] = v[0][0]^v[1][0]^v[2][0];
  answer[1] = v[0][1]^v[1][1]^v[2][1];
  return answer;
}
// function solution(v) {
//     var answer = [];

//     for(let i = 0; i < v.length; i++){
//         if(answer.includes(v[i][0])){
//             answer.splice(answer.indexOf(v[i][0]), 1);
//         } else {
//             answer.push(v[i][0])
//         }          
//     }
//    // console.log(answer) 
//     for(let j = 0; j < v.length; j++){
//         // console.log(answer)
//         if(answer[answer.length-1] == v[j][1]){
//             answer.pop();
//         } else {
//             answer.push(v[j][1])
//         } 
//     }
//     // console.log(answer)
//     return answer;
// }
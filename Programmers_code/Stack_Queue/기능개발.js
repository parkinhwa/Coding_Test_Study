function solution(progresses, speeds) {
    var answer = [];
    let remain = [];
    let n = progresses.length;
    for(let i = 0; i < n; i++){
      remain.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    let count = 1;
    let max = remain[0];
    for(let j = 1; j < remain.length; j++){
      console.log(max, remain[j], count)
      if(max >= remain[j]){
        count++;
      } else {
        max = remain[j];
        answer.push(count);
        count = 1;
      }
      if(j === remain.length-1){
        answer.push(count);
      }
    }
    return answer;
}
let arr1 = [95, 90, 99, 99, 80, 99];
let arr2 = [1, 1, 1, 1, 1, 1]	;
console.log(solution(arr1, arr2));



























// function solution(progresses, speeds) {
//     var answer = [0]; // 배열 초기화
//     var day = [];
//     var j = 0;
//     for(var i = 0; i<progresses.length; i++){
//         day[i] = Math.ceil((100 - progresses[i])/speeds[i]);
//     }
//     var maxday = day[0];
    
//     for (var i = 0; i < day.length; i++){
//         if(day[i] <= maxday){
//             answer[j] += 1;
//         } else{
//             maxday = day[i];
//             answer[++j] = 1;
//         }
//     }
//     return answer;
// }

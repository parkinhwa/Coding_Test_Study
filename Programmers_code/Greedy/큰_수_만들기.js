function solution(number, k) {
    var answer = '';
    var ans = number.split("")
    var stack = []
    var length = ans.length
   
    for(var i = 0; i < length; i++){
      // console.log(k, stack[stack.length-1], ans[i]);
          while(k > 0 && stack[stack.length-1] < ans[i]){
              stack.pop()
              k--
            }
            stack.push(ans[i])
        }
    // console.log(stack.length, k)
    stack.splice(stack.length-k, k)
    answer = stack.join("")
    return answer;
}
console.log(solution("4177252841", 3))

// 강사님 풀이
// N이 백만이면 O(N), O(N log N)
// 스택의 바닥에서부터 탑은 큰 수 부터 작은 수로 나열이 되어야한다.
// function solution(number, k){
//   const stack = [];
//   let count = 0;

//   for(const item of number){
//     while(count < k && stack[stack.length-1] < item){
//       stack.pop();
//       count++;
//     }
//     stack.push(item);
//   }
//   while(count < k){
//     stack.pop();
//     count += 1;
//   }
//   return stack.join("");
// }
function solution(number, k) {
    var answer = '';
    var ans = number.split("")
    var stack = []
    var length = ans.length
   
    for(var i = 0; i < length; i++){
          while(k > 0 && stack[stack.length-1] < ans[i]){
              stack.pop()
              k--
            }
            stack.push(ans[i])
        }
    
    stack.splice(stack.length-k, k)
    answer = stack.join("")
    return answer;
}

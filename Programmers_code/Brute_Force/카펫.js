function solution(brown, yellow) {
    var answer = [];
    var ans = [];
    var by = brown + yellow
    var cero = 0
    for (var i = by-1; i > 2; i--){
        if(by % i == 0){
            cero = by / i
            if(cero <= i) {
               ans.push(i, cero)
            }
        }
    }
    for(var j = 0; j < ans.length; j++){
      if(j+1 < ans.length && (ans[j] - 2)*(ans[j+1] - 2) == yellow){
         answer.push(ans[j], ans[j+1])   
      }
    }
    return answer;
}

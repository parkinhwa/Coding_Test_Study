function solution(n) {
    let num = [4, 1, 2];
    var answer = '';
    while(n){
     if(n%3 == 0){
         answer = num[0] + answer;
         n = n/3 - 1;
     } else {
         answer = num[n%3] + answer;
         n = Math.floor(n/3)
     }
    }
    return answer;
}
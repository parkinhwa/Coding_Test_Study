function solution(citations) {
    var answer = 0;
    citations.sort((a, b) => b - a)
    // citations.reverse();
    for(var i = 0; i < citations.length; i++){
        if(citations[i] >= i+1){
            answer += 1;
        }
    }
    return answer;
}

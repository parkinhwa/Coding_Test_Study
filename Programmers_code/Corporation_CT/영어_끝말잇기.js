function solution(n, words) {
    var answer = [];
    for(let i = 1; i < words.length; i++){
        //console.log(i+1, turn, words[i])
        if(words.indexOf(words[i]) != i || words[i-1][words[i-1].length-1] != words[i][0]){
            if((i+1)%n === 0){
                answer.push(n, Math.ceil((i+1)/n))
            } else {
                answer.push((i+1)%n, Math.ceil((i+1)/n))
            }
            break;
        }
    }
    if(answer.length === 0){
        answer.push(0, 0);
    }
    return answer;
}
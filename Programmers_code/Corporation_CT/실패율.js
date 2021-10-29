function solution(N, stages) {
    var answer = [];
    let fail = [];
    let length = stages.length;
    for(let i = 1; i <= N; i++){
        let sum = 0;
        for(let j = 0; j < stages.length; j++){
            if(stages[j] == i){
                sum++;
            }
        }
        fail.push([i, sum/length]);
        length = length - sum;
    }
    
    fail.sort((a, b) => {
        if(a[1] === b[1]){
            return a[0] - b[0];
        } else {
            return b[1] - a[1];
        }
    });
    
    for(let x of fail){
        answer.push(x[0])
    }
    return answer;
}
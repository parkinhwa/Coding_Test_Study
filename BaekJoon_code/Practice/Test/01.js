function solution(v) {
    var answer = [];

    for(let i = 0; i < v.length; i++){
        if(answer.includes(v[i][0])){
            answer.splice(answer.indexOf(v[i][0]), 1);
        } else {
            answer.push(v[i][0])
        }          
    }
   // console.log(answer) 
    for(let j = 0; j < v.length; j++){
        // console.log(answer)
        if(answer[answer.length-1] == v[j][1]){
            answer.pop();
        } else {
            answer.push(v[j][1])
        } 
    }
    // console.log(answer)
    return answer;
}
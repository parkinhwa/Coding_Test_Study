function solution(s){
    var answer = true;
    let stack = [];
    for(str of s){
        if(str === "("){
            stack.push(str);
        } else {
            if(stack.length === 0){
                answer = false;
                break;
            } else {
                stack.pop();
            }
        }
    }
    if(stack.length != 0){
        answer = false;
    }
    return answer;
}
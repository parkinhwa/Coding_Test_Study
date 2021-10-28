function solution(s){
    var answer = true;
    let stack = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == "("){
            stack.push("(");
        } else {
            if(stack.length === 0){
                answer = false;
                break;
            } else {
                stack.pop()
            }
        }
    }
    if(stack.length != 0){
        answer = false;
    }

    return answer;
}
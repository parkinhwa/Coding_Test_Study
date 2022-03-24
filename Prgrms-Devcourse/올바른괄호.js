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

// 강사님 풀이
function solution(s){
    const count = 0;
    for(str of s){
        if(str === "("){
            count += 1;
        } else {
            if(count === 0){
                return false;
            } 
            count -= 1;
        }
    }
    return count === 0;
}
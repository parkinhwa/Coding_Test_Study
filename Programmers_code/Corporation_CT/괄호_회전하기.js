function solution(s) {
    var answer = s.length;
    s = s.split("");
    for(let i = 0; i < s.length; i++){
        // console.log(s)
        let stack = [];
        for(let j = 0; j < s.length; j++){
            //console.log(s, stack);
            if(s[j] === "[" || s[j] === "(" || s[j] === "{"){
                stack.push(s[j]);
            } else {
                if(stack.length === 0){
                    answer--;
                    break;
                } else if(stack[stack.length-1] == "(" && s[j] == ")" ||
                         stack[stack.length-1] == "{" && s[j] == "}" ||
                         stack[stack.length-1] == "[" && s[j] == "]"){
                    stack.pop();
                }
            }
        }
        if(stack.length != 0){
            answer--;
        }
        s.push(s[0]);
        s.shift();
    }
    return answer;
}
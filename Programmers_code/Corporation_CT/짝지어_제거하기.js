function solution(s)
{
    var answer = 0;
    let str = [];
    s = s.split("");
    str.push(s[0])
    for(let i = 1; i < s.length; i++){
        if(str[str.length-1] === s[i]){
            str.pop();
        } else {
            str.push(s[i])
        }
    }
    if(str.length === 0){
        answer = 1;
    }
    return answer;
}
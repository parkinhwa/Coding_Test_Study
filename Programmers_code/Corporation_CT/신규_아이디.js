function solution(new_id) {
    var answer = '';
    let str = /[^a-z0-9-_.]/g;
    answer = new_id.toLowerCase();
    answer = answer.replace(/[^a-z0-9-_.]/g, "");
    answer = answer.replace(/\.+/g, ".");
    answer = answer.replace(/^\.|\.$/g, "");
    
    if(answer[0] == "."){
        answer = answer.substr(1);
    }
    if(answer == ""){
        answer += "a";
    }
    if(answer.length >= 16){
        answer = answer.substring(0, 15);
    }
    if(answer[answer.length-1] == "."){
        answer = answer.substring(0, answer.length-1)
    }
    if(answer.length <= 2){
        while(answer.length < 3){
            answer += answer[answer.length-1]
        }
    }
    return answer;
}
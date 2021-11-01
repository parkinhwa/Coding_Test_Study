function count(num){
    let cou = 0;
    for(let i = 0; i < num.length; i++){
        if(num[i] == "1"){
            cou++;
        }    
    }
    return cou;
}

function solution(n) {
    var answer = 0;
    let two = count(n.toString(2));

    for(let i = n+1; i < 1000000; i++){
        if(two == count(i.toString(2))){
            answer = parseInt(i);
            break;
        }
    }
    return answer;
}
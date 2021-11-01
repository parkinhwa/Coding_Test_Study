// 다른 사람 풀이
// function nextBigNumber(n) {
//     var size = n.toString(2).match(/1/g).length
//     while(n++) {
//         if(size === n.toString(2).match(/1/g).length) return n
//     }
// }

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
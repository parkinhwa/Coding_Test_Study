function solution(s) {
    var answer = [];
    let zero_count = 0;
    let round = 0;
    while(true){
      let arr = [];
        round++;
        for(let i = 0; i < s.length; i++){
            if(s[i] == "1"){
                arr.push(1);
            } else {
                zero_count++;
            }           
        }
        // console.log(round, s, arr)
        let length = arr.length;
        s = length.toString(2);
        if(s == "1"){
            answer.push(round, zero_count);
            break;
        }
    }
    return answer;
}

console.log(solution("110010101001"))
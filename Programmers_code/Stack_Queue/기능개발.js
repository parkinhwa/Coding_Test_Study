function solution(progresses, speeds) {
    var answer = [0]; // 배열 초기화
    var day = [];
    var j = 0;
    for(var i = 0; i<progresses.length; i++){
        day[i] = Math.ceil((100 - progresses[i])/speeds[i]);
    }
    var maxday = day[0];
    
    for (var i = 0; i < day.length; i++){
        if(day[i] <= maxday){
            answer[j] += 1;
        } else{
            maxday = day[i];
            answer[++j] = 1;
        }
    }
    return answer;
}

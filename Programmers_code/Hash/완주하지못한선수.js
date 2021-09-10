function solution(participant, completion) {
    var answer = '';
    // completion.forEach(function(com){
    //         for(var i = 0; i < participant.length; i++) {
    //             if(com == participant[i]){
    //                 participant.splice(i, 1)
    //             }
    //         }
    // }) 
    // answer = participant.join()
    participant.sort();
    completion.sort();
    for(var i = 0; i<participant.length; i++){
        if(participant[i] !== completion[i]){
            console.log(i, participant[i], completion[i])
            answer = participant[i];
            return answer;
        }
    }
}

function solution(msg) {
    var answer = [];
    let alpa = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let i = 0;
    while(i < msg.length){
        let j = 1;
        while(alpa.indexOf(msg.substring(i, i+j)) !== -1 && i + j <= msg.length){
            // console.log(msg.substring(i, i+j), i, j)
            j++;
        }
        alpa.push(msg.substring(i, i+j));
        // console.log(alpa.indexOf(msg.substring(i, i + j - 1)) + 1)
        answer.push(alpa.indexOf(msg.substring(i, i + j - 1)) + 1);
        i += j - 1;
    }
    return answer;
}
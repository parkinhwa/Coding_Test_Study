function solution(s) {
    var answer = '';
    let arr = [];
    arr = s.split("");
    arr.sort();
    answer = arr.reverse().join("")
    return answer;
}
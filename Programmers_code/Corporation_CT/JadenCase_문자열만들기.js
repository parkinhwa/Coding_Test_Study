function solution(s) {
    var answer = '';
    s = s.toLowerCase();
    let arr = s.split("")
    arr[0] = arr[0].toUpperCase();
    for(let i = 1; i < arr.length; i++){
        if(arr[i-1] === " "){
            arr[i] = arr[i].replace(/[a-z]/g, arr[i].toUpperCase());
        }
    }
    answer = arr.join("");
    return answer;
}
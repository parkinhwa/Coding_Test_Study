function solution(n, arr1, arr2) {
    var answer = [];
    let num = "";
    for(let i = 0; i < n; i++){
        let a = arr1[i].toString(2).padStart(n, '0').split("");
        let b = arr2[i].toString(2).padStart(n, '0').split("");
        //console.log(a, b)
        for(let j = 0; j < a.length; j++){
            if(a[j] == "1" || b[j] == "1"){
                num += "#"; 
            } else {
                num += " ";
            }
        }
        answer.push(num);
        num = "";
        
    }
    return answer;
}
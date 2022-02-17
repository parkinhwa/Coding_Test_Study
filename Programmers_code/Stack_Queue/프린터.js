function solution(priorities, location) {
    var answer = 0;
    let arr = [];
    let result = [];
    for(let i = 0; i < priorities.length; i++){
        arr.push([i, priorities[i]]);
    }
    priorities = priorities.sort((a, b)=>b-a);
    for(let j = 0; j < arr.length; j++){
        let max = priorities[0];
        // console.log(max, arr[j])
        if(arr[j][1] < max){
            arr.push([arr[j][0], arr[j][1]]);
            arr.shift();
            j--;
        } else {
            result.push([arr[j][0], arr[j][1]]);
            if(arr[j][0] === location){
              answer = result.length; 
            }
            arr.shift();
            j--;
            priorities.shift();
        }
    }
    return answer;
}

let p = [1, 1, 9, 1, 1, 1];
let l = 0;
console.log(solution(p, l))
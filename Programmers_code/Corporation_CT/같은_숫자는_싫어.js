function solution(arr)
{
    var answer = [];
    for(let i = 0; i < arr.length; i++){
        //console.log(arr[i], arr[i+1])
        if(i == 0 && arr[i] != arr[i+1]){
            answer.push(arr[i])
        }
        if(i < arr.length-1 && arr[i] == arr[i+1] && answer[answer.length-1] != arr[i]){
            answer.push(arr[i])
        } else if(0 < i && arr[i-1] != arr[i] && arr[i] != arr[i+1]){
            answer.push(arr[i])
        }
    }
    
    // return arr;
    return answer;
}
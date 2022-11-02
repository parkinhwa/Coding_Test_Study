function solution(ingredient) {
    let answer = 0;
    const arr = []
    for(let i = 0; i < ingredient.length; i++) {
        arr.push(ingredient[i])
        if(arr.length >= 4) {
            if(arr[arr.length-4] === 1 && 
               arr[arr.length-3] === 2 && 
               arr[arr.length-2] === 3 && 
               arr[arr.length-1] === 1) {
                answer++
                arr.splice(-4)
            }
        }
    }
    
    return answer;
}
function solution(ingredient) {
    let answer = 0;
    const hamburger = "1231"
    const arr = []
    ingredient = ingredient.map((num) => num.toString())
    for(let i = 0; i < ingredient.length; i++) {
        arr.push(ingredient[i])
        if(arr.length >= 4) {
            const str = arr[arr.length-4] + arr[arr.length-3] + arr[arr.length-2] + arr[arr.length-1]
            if(str === hamburger) {
                answer++
                arr.pop()
                arr.pop()
                arr.pop()
                arr.pop()
            }
        }
    }

    return answer;
}
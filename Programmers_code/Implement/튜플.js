function getCount(array) { 
    return array.reduce((pv, cv) => { 
        pv[cv] = (pv[cv] || 0) + 1; 
        return pv; 
    }, {}); 
}

function solution(s) {
    const answer = [];
    const element = [];
    const str = s.replace("}}", "").split("{").join("").split("},")
    
    str.forEach((x) => {
        const number = x.split(",")
        element.push(...number)
        
    })
    
    const arr = []
    const countNumber = getCount(element)
    for(let num in countNumber) {
        arr.push([num, countNumber[num]])
    }
    
    arr.sort((a, b) => b[1] - a[1])
    
    arr.forEach((x) => {
        answer.push(Number(x[0]))
    })
    
    return answer;
}
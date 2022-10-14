function subset (str) {
    const reg = /[a-z]/g
    const str_subset = []
    for(let i = 0; i < str.length-1; i++) {
        const str_split = str[i] + str[i+1]
        const str_match = str_split.match(reg) || []
        if (str_match.length === 2) str_subset.push(str_split)
    }
    return str_subset
}

function solution(str1, str2) {
    let answer = 0;
    const str1_lower = str1.toLowerCase()
    const str2_lower = str2.toLowerCase()
    const str1_subset = subset(str1_lower)
    const str2_subset = subset(str2_lower)
    
    let intersection = 0
    const str2_copy = str2_subset.slice()
    str1_subset.forEach((s) => {
        if(str2_copy.indexOf(s) !== -1) {
            str2_copy.splice(str2_copy.indexOf(s), 1)
            intersection += 1
        }
    })
    
    const union = str1_subset.length + str2_subset.length - intersection
    
    console.log(intersection, union)
    if(union === 0) answer = 65536
    else answer = Math.floor(intersection / union * 65536)
    return answer;
}

// function subset (str) {
//     const reg = /[a-z]/g
//     const str_subset = []
//     for(let i = 0; i < str.length-1; i++) {
//         const str_split = str[i] + str[i+1]
//         const str_match = str_split.match(reg) || []
//         if (str_match.length === 2) str_subset.push(str_split)
//     }
//     return str_subset
// }

// function solution(str1, str2) {
//     let answer = 0;
//     const str1_lower = str1.toLowerCase()
//     const str2_lower = str2.toLowerCase()
//     const str1_subset = subset(str1_lower)
//     const str2_subset = subset(str2_lower)
//     const set = new Set([...str1_subset, ...str2_subset]);
//     let union = 0;
//     let intersection = 0;

//     set.forEach(item => {
//         const has1 = str1_subset.filter(x => x === item).length;
//         const has2 = str2_subset.filter(x => x === item).length;
//         union += Math.max(has1, has2);
//         intersection += Math.min(has1, has2);
//     })
//     console.log(union,intersection)
//     return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
// }
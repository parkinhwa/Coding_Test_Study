// function solution(files) {
//     var answer = [];
//     const numberRegex = /[0-9]+/
//     answer = files.sort((a, b) => {
//         const [matchA, matchB] = [a.match(numberRegex), b.match(numberRegex)]
//         const [headA, headB] = [a.slice(0, matchA.index).toLowerCase(), b.slice(0, matchB.index).toLowerCase()]
//         const [numberA, numberB] = [parseInt(matchA[0]), parseInt(matchB[0])]
//         return headA < headB ? -1 : headA > headB ? 1 : numberA < numberB ? -1 : numberA > numberB ? 1 : 0
//     })
//     return answer;
// }

function solution(files) {
    const answer = [];
    const arr = [];
    const specialHeadArr = [];
    const headReg = /[^0-9]+(?=[0-9])/
    const numReg = /[0-9]+/
    
    files.forEach((file, idx) => {
        const filecopy = file.slice().toLowerCase()
        let head = ''
        let number = ''
        
        if(filecopy.match(headReg)) {
            head = filecopy.match(headReg)[0]
        }
        
        if(filecopy.match(numReg)) {
           const filenum = filecopy.match(numReg)[0]
           if(filenum.length > 5) {
               number = filenum.slice(0, 5)
           } else {
               number = Number(filenum)   
           }
        }
        
        let tail = filecopy.replace(head+number, "")
        // console.log(idx, head, number, tail)
        arr.push([idx, head, number, tail])
    })
    
        arr.sort((a, b) => {
            return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : a[2] - b[2]
        })
    
    for(let i = 0; i < arr.length; i++) {
        answer.push(files[arr[i][0]])
    }

    return answer;
}

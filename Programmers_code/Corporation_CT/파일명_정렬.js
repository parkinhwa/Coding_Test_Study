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

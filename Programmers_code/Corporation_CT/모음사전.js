let word = "AAAE"
function solution(word) {

    const arr = ["A","E","I","O","U"];
    const newarr = [];
    const makeword = (w, length) =>{
        if(length === 6)
        return
        console.log("w = ", w, "length = ", length);
        newarr.push(w)
        for( let one of arr){
          console.log("one = ", one);
            makeword(w + one, length + 1)
        }
    }
    
    arr.forEach((word) => {
        makeword(word, 1)
    })

    return newarr.indexOf(word) + 1;
}

console.log(solution(word))
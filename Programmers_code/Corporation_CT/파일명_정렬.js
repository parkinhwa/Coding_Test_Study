const files = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]

function solution(files) {
    var answer = [];
    let headarr = [];
    let numarr = [];
    let tailarr = [];
    var regexnum = /[0-9]/g;
    for(let i = 0; i < files.length; i++){
        let file = files[i];
        let head = "";
        let num = "";
        let tail = "";
        for(let j = 0; j < file.length; j++){
            if(regexnum.test(file[j])){
                num += file[j];
            } else {
              head += file[j];
            }
        }
        numarr.push(num);
    }
    return answer;
}

console.log(solution(files))
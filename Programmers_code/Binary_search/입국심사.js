function solution(n, times) {
    let lt = 1;
    let rt = n*times[times.length-1];
    var answer = rt;
    while(lt<=rt){
        let mid = parseInt((lt+rt)/2);
        let count = 0;
        times.forEach(value => { //배열을 계속 순회하기위한 foreach
            count += parseInt(mid / value); 
            //console.log(count, mid, value);
            if(count >= n) {
                answer = Math.min(mid, answer); 
                return;
            };
        });
        if (count >= n) { 
            rt = mid - 1;
        }
        else {
            lt = mid + 1;
        }
    }
    return answer;
}

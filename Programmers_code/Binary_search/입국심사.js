function solution(n, times) {
    let lt = 1;
    let rt = n*times[times.length-1];
    var answer = rt;
    while(lt<=rt){
        let mid = parseInt((lt+rt)/2);
        let count = 0;
        times.forEach(value => { //배열을 계속 순회하기위한 foreach
            // mid 시간동안 value는 count 만큼의 사람을 심사할 수 있다.
            count += parseInt(mid / value); 
            // console.log(count, mid, value, answer);
            // 심사한 사람이 n이면 현재 걸린시간인 mid를 반환한다.
            if(count == n) {
                answer = mid; 
                return;
            };
        });
        // 현재 심사한 사람이 n보다 크거나 같으면 오른쪽을 mid-1로 바꾼다
        if (count >= n) { 
            rt = mid - 1;
        }  
        else { // 아니면 왼쪽을 바꾼다.
            lt = mid + 1;
        }
    }
    return answer;
}
let n = 6;
let times = [7, 10];
console.log(solution(n, times))
// 데이터가 많기 때문에 로그시간 걸려야함
// 로그 시간 = 이진 탐색
// times => 선형 로그 시간으로 충분히 가능
// function solution(n, times) {
//   const sortedTimes = times.sort((a, b) => a - b);
//   let left = 1;
//   let right = sortedTimes[sortedTimes.length-1] * n;

//   while(left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     // sum(시간 / 심사시간)
//     const sum = times.reduce((acc, time) => acc + Math.floor(mid/time), 0);

//     if(sum < n){
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return left;
// }

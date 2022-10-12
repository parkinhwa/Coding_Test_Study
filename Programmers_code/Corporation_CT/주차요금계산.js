// 2차원 배열 정렬하는 함수
function twoSort(array) {
    array.sort((a, b) => {
        if(a[1] === b[1]){ 
            return a[0] - b[0]; 
        } else {
            return a[1] - b[1]; 
        }
    })
    return array
}

// 2차원 배열 Object로 만드는 함수
const arrayToObject = (array) =>
  array.reduce(
    (acc, row) => ((acc[row[1]] = [...(acc[row[1]] || []), row[0]]), acc),
    {}
  );

function solution(fees, records) {
    const answer = [];
    let inCar = [];
    let outCar = [];
    const lastTime = 23*60+59;
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    
		// "05:34 0000 IN" 분자열로 되어있는 배열을 시간 차번호 입출고로 split
		// 시간은 분단위로 계산하기 위해 h와 m으로 split하고 Number로 바꾼다.
    // IN과 OUT으로 배열을 만들어 구분한다.
    records.forEach((record) => {
        const [time, carNumber, history] = record.split(" ")
        let [h, m] = time.split(":").map(Number)
        if(history === "IN") inCar.push([h*60+m, Number(carNumber)])
        else if(history === "OUT") outCar.push([h*60+m, Number(carNumber)])
    })
    
		// 차량 번호가 빠른 순서대로 출력해야 하기 때문에 차 번호 오름차순 정렬했다.
    inCar = twoSort(inCar)
    outCar = twoSort(outCar)
    
		// 차량 번호를 key로 갖고 object를 입차시간, 출차시간 배열을 갖도록 했다.
    const inCarObject = arrayToObject(inCar)
    const outCarObject = arrayToObject(outCar)
    
		// 각 차량번호마다 주차시간을 계산한다.
    Object.keys(inCarObject).forEach((key) => {
        const inCarValues = inCarObject[key]
        const outCarValues = outCarObject[key] || []
        
				// 입차한 차들과 출차한 차들의 수가 같지않으면 마지막 입차는 23시59분에 출차한다.
        // lastTime을 추가한다.
        if(inCarValues.length !== outCarValues.length) {
            outCarValues.push(lastTime)
        }

				// 주차시간 계산
        let parkingTime = 0
        inCarValues.forEach((value, idx) => {
            parkingTime += outCarValues[idx] - value
        })
     
        // 주차시간 - 기본주차시간 / 단위주차시간은 안나누어떨어질 시 올림해야한다.
				// 주차시간이 기본주차시간보다 적으면 기본요금만 내면 된다.
        if(parkingTime  > baseTime) answer.push(baseFee + (Math.ceil((parkingTime - baseTime)/unitTime)) * unitFee )
        else answer.push(baseFee)
                                         
    })
    
    return answer;
}
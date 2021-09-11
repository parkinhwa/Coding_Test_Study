function solution(numbers) {
    var answer = 0;
    var numbers = numbers.split("");
    var numbers = getNumbeOfCases(numbers);
    var length = numbers.length
    
    for(var i = 0; i < length; i++){
        if(numbers[i] < 2){
            numbers.splice(i, 1);
            i--;
        }
        for(var j = 2; j < numbers[i]; j++){
            if(numbers[i]%j == 0){
                numbers.splice(i, 1);
                i--;
            }
        }
    }
    console.log(numbers)
    answer = numbers.length;
    return answer;
}

function getNumbeOfCases(numbers) {
	// 중복을 막기 위해서
	const result = new Set();
	// 재귀 함수를 통해 만든다.
	const temp = (currFix, eachArr) => {
		for (let i = 0; i < eachArr.length; i++) {
			const tempEachArr = [...eachArr];
			const tempCurrFixVal = tempEachArr.splice(i, 1)[0];
			const tempCurrFix = currFix + tempCurrFixVal;
			result.add(Number(tempCurrFix));
			if (tempEachArr.length > 0) temp(tempCurrFix, tempEachArr);
		}
	};
	// 시작
	for (let i = 0; i < numbers.length; i++) {
		let target = numbers[i];
		result.add(Number(target));
		const eachArr = [...numbers];
		eachArr.splice(i, 1);
		temp(target, eachArr);
	}

	return new Array(...result);
}


function getFriendlyNumbers(start, end){
	let sum = 0,
		arrRange = [],
		arrRes = [];

	for (let j = start; j < end; j++) {
		for (let i = 1; i < j; i++){
			if (!(j % i)) {
				sum += i;
			}
		}
		arrRange.push(sum);
		sum = 0;
	}
	console.log(arrRange);
	console.log(sum);

	let z = 0;
	for (let z = 0; z < arrRange.length; z++) {
		for (let i = 1; i < arrRange[z]; i++){
			if (!(arrRange[z] % i)) {
				sum += i;
			}
		}
		arrRes.push(sum);
		sum = 0;
	}
	console.log(arrRes);

	let result = [],
		arrResult = [];

	for (let j = start; j < end; j++) {
		arrResult.push(j);
	}
	console.log(arrResult);

	for (let z = 0; z < arrRes.length; z++) {
		if (arrResult[z] == arrRes[z] && 
			arrRange[z] == arrRes[z]) {
			continue;
		} else if (arrResult[z] == arrRes[z]) {
			result.push(arrResult[z]);
		}
	}
	console.log(result);
}

getFriendlyNumbers(1, 500);



	
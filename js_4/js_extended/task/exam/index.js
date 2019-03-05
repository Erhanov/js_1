function getFriendlyNumbers(start, end) {
	let sum = 0,
		arrRange = [],
		arrRes = [];

	for (let j = start; j < end + 1; j++) {
		for (let i = 1; i < j; i++){
			if (!(j % i)) {
				sum += i;
			}
		}
		arrRange.push(sum);
		sum = 0;
	}

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

	let result = [],
		arrResult = [];

	for (let j = start; j < end + 1; j++) {
		arrResult.push(j);
	}

	for (let z = 0; z < arrRes.length; z++) {
		if (arrResult[z] == arrRes[z] && 
			arrRange[z] == arrRes[z]) {
			continue;
		} else if (arrResult[z] == arrRes[z]) {
			result.push(arrResult[z]);
		}
	}

	let last = [];
	if (result == [] || result.length == 1) {
		return [];

	} else if (start < 0 || end < 0) {
		return false;
	} else if (start > end) {
		return false
	} else if (typeof(start) === 'string' && typeof(end) === 'string') {
		return false;
	} else {
		for (let i = 0; i < result.length / 2; i++) {
			last[i] = [result[i * 2], result[(i * 2) + 1]];
		}
	}

    return last;
}

console.log(getFriendlyNumbers(284, 500));

module.exports = {
    firstName: 'Azat',
    secondName: 'Yearzhanov',
    task: getFriendlyNumbers
}
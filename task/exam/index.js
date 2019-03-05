function getFriendlyNumbers(start, end) {
	let i = 1,
		arr = [];
	while ( start < end ) {
		if (end % i == 0) {
			arr.push(i);
			start++;
			i++;
		}
	}
    return arr;
}


getFriendlyNumbers(1, 20);
console.log(arr);

module.exports = {
    firstName: 'Azat',
    secondName: 'Yerzhanov',
    task: getFriendlyNumbers
}
let arrRes = [];

function isPrime(num) {
	if(num < 2) return false;
	for (var i = 2; i < num; i++) {
		if (num % i == 0)
			return false;
	}
	return true;
}

for(var i = 0; i < 100; i++){
	if(isPrime(i)) arrRes.push(i);
}

arrRes.forEach(function(item, i, arr) {
	console.log((i + 1) + ' : ' + item + ' - Делители этого числа: 1 и ' + item);
});

let str = 'урок-3-был слишком легким, кому как, :D',
	firstUpperCase = (str) => {
		return (str.charAt(0)).toUpperCase();
	};


str = firstUpperCase(str) + str.substring(1);
console.log(str);

let spaceMaker = (str) => {
	for (let i = 0; i < str.length - 1; i++) {
		if (str[i] == '-') {
			str = str.replace(str.charAt(i), ' ');
		}
	}
	return str;
}

console.log(spaceMaker(str));

let easy = str.substr(19, 6),
	lastTwoDigitsO = (str) => {
		let a = str.slice(-2);
		a = 'oo';
		return a;
	}
console.log(easy.substr(0, 4) + lastTwoDigitsO(easy));

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

let arr = [20, 33, 1, 'Человек', 2, 3],
	strangeFunc = (arr) => {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			if ( !isNaN(arr[i]) ) {
				sum = sum + Math.pow(arr[i], 3);
			} 	
		}
		return Math.sqrt(sum);
	}

console.log(strangeFunc(arr));

let longStr = ['Text', 50, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit elit'];
let textFunc = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if ( isNumeric(arr[i]) ) {
			console.log('NUMBER! Oh NO!');
		} else if (arr[i].length > 50) {
			let str1 = arr[i].substr(0, 50);
			for (let i = 0; i < str1.length - 1; i++) {
					if (str1[i] == ' ') {
						str1 = str1.replace(str1.charAt(i), '');
					}
				}
			console.log(str1 + '...');
		} else {
			console.log(arr[i]);
		}
	}
}

textFunc(longStr);
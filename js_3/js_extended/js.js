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

let longStr = prompt('Text?', '50');
let textFunc = (str) => {
	while ( isNumeric(str) ) {
		str = prompt('Text?', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio non mollitia adipisci officiis repudiandae repellendus laudantium hic. Est quibusdam nam nulla voluptatem officiis ad aperiam vero repudiandae earum obcaecati doloremque consequatur dicta eum, magni quas reprehenderit velit sed quaerat ab, iure recusandae nihil at. Commodi placeat sapiente explicabo labore voluptatem modi dolores consectetur, quos facere. Quisquam, dolor eos ullam alias.');
	}

	if (str.length > 50) {
		let lastThreeDigits = str.substr(50); 
		lastThreeDigits = '...';
		let strLast = str.substr(0 , 50) + lastThreeDigits;
		return strLast;
	} else {
		return str;
	}
	 
}

console.log(textFunc(longStr));
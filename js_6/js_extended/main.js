function formatDate(date) {

	let day = date.getDate(),
		month = date.getMonth() + 1,
		year = date.getFullYear() % 100,
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();

	let zeroPlus = (date) => {
		if (date < 10) date = '0' + date;
		return date; 
	}




	return  zeroPlus(hours) + ':' + 
			zeroPlus(minutes) + ':' + 
			zeroPlus(seconds) + ' ' + 
			zeroPlus(day) + '.' + 
			zeroPlus(month) + '.' + 
			zeroPlus(year) + ' ';
}



let getCurrentDay = (date) => {
	let day = date.getDay();
	switch (day) {
		case 0 :
			document.write('Воскресенье');
			break;
		case 1 :
			document.write('Понедельник');
			break;
		case 2 :
			document.write('Вторник');
			break;
		case 3 :
			document.write('Среда');
			break;
		case 4 :
			document.write('Четверг');
			break;
		case 5 :
			document.write('Пятница');
			break;
		case 6 :
			document.write('Суббота');
			break;
	}
};

let date = new Date();
document.write(formatDate(date));
getCurrentDay(date);

let btn = document.getElementById('btn');

btn.addEventListener('click', function() {
	let firstDay = document.getElementById('fisrt'),
		secondDay = document.getElementById('second');

	let fisrtValue = new Date(Date.parse(firstDay.value)).getDate(),
		secondValue = new Date(Date.parse(secondDay.value)).getDate(),
		compare1 = new Date(2019, 2, (fisrtValue - secondValue)).getDate(),
		thirdDay = document.getElementById('differ');

	console.log(compare1);

	let zeroPlus = (date) => {
		if (date < 10) date = '0' + date;
		return date; 
	}

		thirdDay.value = '2019-02-' + zeroPlus(compare1)

	console.log(fisrtValue);
	console.log(secondValue);
});



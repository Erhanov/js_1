function formatDate(date) {

	let day = date.getDate();
	if (day < 10) day = '0' + day;

	let month = date.getMonth() + 1;
	if (month < 10) month = '0' + month;

	let year = date.getFullYear() % 100;
	if (year < 10) year = '0' + year;

	let hours = date.getHours();
	if (hours < 10) hours = '0' + hours;

	let minutes = date.getMinutes();
	if (minutes < 10) minutes = '0' + minutes;

	let seconds = date.getSeconds();
	if (seconds < 10) seconds = '0' + seconds;

	return hours + ':' + minutes + ':' + seconds + ' ' + day + '.' + month + '.' + year + ' ';
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



let differTwoDay = () => {
	let fisrtDay = document.getElementById('fisrt'),
	secondDay = document.getElementById('second');

	console.log(fisrtDay.value);
	console.log(secondDay.value);

	let x, y, overall;

	switch (fisrtDay.value) {
		case 'Вс' :
			x = 0;
			break;
		case 'Пн' :
			x = 1;
			break;
		case 'Вт' :
			x = 2;
			break;
		case 'Ср' :
			x = 3;
			break;
		case 'Чт' :
			x = 4;
			break;
		case 'Пт' :
			x = 5;
			break;
		case 'Сб' :
			x = 6;
			break;
	}
	console.log(x);
	switch (secondDay.value) {
		case 'Вс' :
			y = 0;
			break;
		case 'Пн' :
			y = 1;
			break;
		case 'Вт' :
			y = 2;
			break;
		case 'Ср' :
			y = 3;
			break;
		case 'Чт' :
			y = 4;
			break;
		case 'Пт' :
			y = 5;
			break;
		case 'Сб' :
			y = 6;
			break;
	}
	console.log(y);
	overall = x - y;
	console.log(overall);
	switch (overall) {
		case 0 :
			console.log('Одни и те же дни')
			break;
		case 1 :
			console.log(1);
			break;
		case 2 :
			console.log(2);
			break;
		case 3 :
			console.log(3);
			break;
		case 4 :
			console.log(4);
			break;
		case 5 :
			console.log(5);
			break;
		case 6 :
			console.log(6);
			break;
		default :
			console.log('не муддри');


	}
	return overall;
}

let dif = document.getElementById('differ');

dif.value = differTwoDay();
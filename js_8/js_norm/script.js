/*function formatDate(date) {

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



let date = new Date();



document.write(formatDate(date));

*/

function currentDate() {
	let date = new Date(),
		year = date.getFullYear() % 100,
		month = date.getMonth() + 1,
		day = date.getDate(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();

	let zeroPlus = (date) => {
		if (date < 10) date = '0' + date;
		return date; 
	}

	date_time = "Сегодня - " + zeroPlus(day) + " : " + zeroPlus(month) + " : " + zeroPlus(year) +
				" : Текущее время - "+ zeroPlus(hours) + " : " + zeroPlus(minutes) + " : " + zeroPlus(seconds);
	if (document.layers) {
		document.layers.doc_time.document.write(date_time);
		document.layers.doc_time.document.close();
	} else {
		document.getElementById("doc_time").innerHTML = date_time;
	}


	setTimeout("currentDate()", 1000);
}


currentDate();
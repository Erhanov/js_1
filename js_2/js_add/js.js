'use strict'

let week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	arr = ['321', '4687', '46548', '6849', '7654'];


for (let i = 0; i < arr.length; i++) {
	let n = parseInt(arr[i]);
	let n1;
	if ( n > 9 ) {
  		while ( n > 9 ) {
    		n = n / 10;
    		n1 = n;
  		};
 		n1 = Math.floor(n1);
		} else {
 			n1 =0 ;
		};


	if ( n1 == 3 || n1 == 7 ) {
		console.log(arr[i]);
	};
};
for (let i = 0; i < 7; i++) {
	if (i == 5 || i == 6) {
		document.write('<strong>');
		document.write('Week day is ' + week[i]);
		document.write('</strong>');
		document.write('<br>');
	} else if (i == 4) {
		document.write('<i>');
		document.write('Week day is ' + week[i]);
		document.write('</i>');
		document.write('<br>');
	} else {
		document.write('Week day is ' + week[i]);
		document.write('<br>');
	}
};
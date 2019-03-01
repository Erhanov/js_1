let week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	arr = [321, 4687, 46548, 6849, 7654];





for (let i = 0; i < arr.length; i++) {
	var n = arr[i];
	var n1;
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



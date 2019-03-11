//let timerID = setTimeout(sayHello, 3000);


/*let timerID = setInterval(sayHello, 3000);	
clearTimeout(timerID);

function sayHello() {
	console.log('hello');
}*/

let timerID = setTimeout(function log() {
	console.log('hello');
	setTimeout(log, 2000);
});
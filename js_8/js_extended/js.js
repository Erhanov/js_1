let btn = document.querySelector('button'),
	elem = document.querySelector('.box');

let myAnimation = () => {
	let pos = 0;

	let id = setInterval(frame, 10);

	function frame() {
		if (pos == 200) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.left = pos + 'px';
		}
	}
}

btn.addEventListener('click', myAnimation);


elem.onclick = function() {
	animate(function(timePassed) {
		elem.style.left = timePassed / 5 + 'px';
	}, 2000);
};

function animate(draw, duration) {
	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		let timePassed = time - start;
		if (timePassed > duration) {
			timePassed = duration;
		} 
		draw(timePassed);
		if (timePassed < duration) {
			requestAnimationFrame(animate);
		}

	});
}
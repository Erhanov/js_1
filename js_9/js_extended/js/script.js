window.addEventListener('DOMContentLoaded', function() {

	'use strict';
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(a) {
		if (tabContent[a].classList.contains('hide')) {
			tabContent[a].classList.remove('hide');
			tabContent[a].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Timer 
	let deadline = '2019-03-17';

	function getTimeRemain(endTime) {
		let zeroPlus = (date) => {
			if (date < 10 && date >= 0) date = '0' + date;
			return date; 
		}

		let t = Date.parse(endTime) - new Date().getTime(),
			seconds = zeroPlus(Math.floor((t / 1000) % 60)),
			minutes = zeroPlus(Math.floor((t / 1000 / 60) % 60)),
			hours = zeroPlus(Math.round(new Date().getUTCHours()) - Math.floor(t / (1000 * 60 * 60)));

		console.log(Date.parse(endTime));
		console.log(Math.round(new Date().getUTCHours()));

		if (seconds < 0) {
			return {
				'total' : t,
				'hours' : '00',
				'minutes' : '00',
				'seconds' : '00'
			}
		} else {
			return {
				'total' : t,
				'hours' : hours,
				'minutes' : minutes,
				'seconds' : seconds
			}
		}
	}

	function setClock(id, endTime) {
		let timer = document.getElementById(id),
			hours = document.querySelector('.hours'),
			minutes = document.querySelector('.minutes'),
			seconds = document.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		console.log(getTimeRemain())

		function updateClock() {
			let t = getTimeRemain(endTime);

			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if (t.total < 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('timer', deadline);

	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
	  anchor.addEventListener('click', function (e) {
	    e.preventDefault()
	    
	    const blockID = anchor.getAttribute('href')
	    
	    document.querySelector('' + blockID).scrollIntoView({
	      behavior: 'smooth',
	      block: 'start'
	    })
	  })
	}
});
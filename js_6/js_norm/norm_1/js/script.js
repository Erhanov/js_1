let menu = document.querySelector('.menu'),
	li = document.createElement('li'),
	h1 = document.getElementById('title'),
	column = document.querySelectorAll('.column'),
	adver = document.querySelector('.adv');

li.classList.add('menu-item');
li.innerHTML = 'Пятый пункт';
h1.textContent = 'Мы продаем только подлинную технику Apple';

console.log(column[1]);
console.log(adver);


menu.appendChild(li);
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
column[1].removeChild(adver);

let ans = prompt('Like Apple', 'Android better!'),
	promptAns = document.getElementById('prompt');

promptAns.textContent = ans;
let divID = document.getElementById('container'),
	btn = document.getElementsByTagName('button'),
	divClass = document.getElementsByClassName('text'),
	divImg = document.querySelectorAll('.img'),
	firstImg = document.querySelector('.img'),
	btn_container = document.querySelector('.btn-container');

console.log(divID);
console.log(btn);
console.log(btn[2]);
console.log(divClass[0]);
console.log(divImg[1]);

divID.style.backgroundColor = 'blue';

for (let i = 0; i < btn.length; i++) {
	btn[i].style.backgroundColor = 'rgba(0, 0, 0, ' + ((i + 1) / 10) + ')';
}


let divAdd = document.createElement('div'),
	divText = document.createTextNode('I\'m here');

divAdd.classList.add('black');

//document.body.appendChild(divAdd);
//btn_container.appendChild(divAdd);

//divAdd.innerHTML = '<h1>Hello World!</h1>';
divAdd.textContent = 'Hello World!';

divAdd.style.color = 'white';
document.body.insertBefore(divAdd, divImg[0]);
document.body.removeChild(divImg[1]);

document.body.replaceChild(divImg[2], divImg[0]);

console.log(divAdd);


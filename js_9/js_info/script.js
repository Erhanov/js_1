let box = document.querySelector('.box');

let widthC = box.clientWidth,
	heightC = box.clientHeight,
	widthO = box.offsetWidth,
	heightO = box.offsetHeight;
	widthS = box.scrollWidth,
	heightS = box.scrollHeight;

console.log(widthC);
console.log(widthO);
console.log(widthS);
console.log(heightC);
console.log(heightO);
console.log(heightS);
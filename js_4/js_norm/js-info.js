/*let options = {
	width: 1024,
	height: 1024,
	name: 'test'
};

console.log(options.name);
options.bool = false;
options.colors = {
	border: 'black',
	bg: 'red'
};

for (let key in options) {
	console.log('Свойство ' + key + ' имеет значение ' + options[key]);
};

console.log(Object.keys(options).length);

let arr = [1, 2, 3, 4, 5];


arr.forEach(function(item, i, arr) {
	console.log(i + ': ' + item + ' (array: ' + arr + ')');
});

let es6 = [1, 3, 5, 7, 9];
for (let key in es6) {
	console.log(key);
}

for (let key of es6) {
	console.log(key);
}


let ans = prompt('', ''),
	arr = [];

arr = ans.split(',');
console.log(arr);


let arr = ['a', 'b', 'c'],
	i = arr.join(', ');

console.log(i);
*/

let arr = [1, 15, 4],
	i = arr.sort(compareNum );

function compareNum(a, b) {
	return a - b;s
}

console.log(i);
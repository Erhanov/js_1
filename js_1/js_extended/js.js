'use strict'



let number = +prompt('Число ', '33721'),
	arr = [],
	sum = 1;
while (number) {
    arr.push(number % 10);
    number = Math.floor(number / 10);
}

for ( let i = 0; i < arr.length; i++) {
	sum *= arr[i];
}

sum *= sum * sum;

while (sum > 100) {
    arr.push(sum % 10);
    sum = Math.floor(sum / 10);
}
console.log(sum);
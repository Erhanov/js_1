let btnStart = document.getElementById('start');
console.log(btnStart);


let budjetValue = document.querySelector('.budget-value'),
	dayBudjetValue = document.querySelector('.daybudget-value'),
	levelValue = document.querySelector('.level-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
	incomeValue = document.querySelector('.income-value'),
	monthSavingsValue = document.querySelector('.monthsavings-value'),
	yearSavingsValue = document.querySelector('.yearsavings-value'),
	btnExpense = document.getElementsByTagName('button')[0],
	btnOptExpense = document.getElementsByTagName('button')[1],
	btnDayCount = document.getElementsByTagName('button')[2],
	btnAllCount = document.getElementsByTagName('button')[3],
	optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	expensesItem = document.querySelectorAll('.expenses-item'),
	incomeChoose = document.querySelector('.choose-income'),
	sumChoose = document.querySelector('.choose-sum'),
	percentChoose = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value'),
	checkSavings = document.getElementById('savings');

btnExpense.disabled = true;
btnOptExpense.disabled = true;
btnDayCount.disabled = true;


let money, time;

btnStart.addEventListener('click', function() {
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет за месяц?", "50000");

	while(isNaN(money) || 
		money == '' || 
		money == null) {
		money = +prompt("Ваш бюджет за месяц?", "50000");
	}
	appData.budjet = money;
	appData.timeData = time;
	budjetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();

	btnDayCount.disabled = false;

	for (let i = 0; i < expensesItem.length; i++) {
		expensesItem.addEventListener('input', function() {
			for (let i = 0; i < expensesItem.length; i++) {
				if (expensesItem[i].value !== '') {
					btnExpense.disabled = false;
				}
			}
		});
	}
});

expensesItem.forEach(function(item, i, arr) {
	expensesItem[i].addEventListener('input', function() {
		if (expensesItem[i].value !== '') {
			btnExpense.disabled = false;
		}
	});
});

btnExpense.addEventListener('click', function() {
	let sum = 0;
	for (let i = 0; i < expensesItem.length; i++) {
		let expense_question = expensesItem[i].value,
			expense_question1 = expensesItem[++i].value;

			if (typeof(expense_question) === 'string' && 
				typeof(expense_question) != null && 
				typeof(expense_question1) != null && 
				expense_question != '' && expense_question1 != '' && 
				expense_question.length < 50) {
					console.log('done');
					appData.expense[expense_question] = expense_question1;
					sum += +expense_question1;
				} else {
					i = i - 1;
				}		
	}
	expensesValue.textContent = sum;
});




btnOptExpense.addEventListener('click', function() {
	for (let i = 0; i < optionalexpensesItem.length; i++) {
		appData.optionalExpences[i] = optionalexpensesItem[i].value;
		optionalexpensesValue.textContent += appData.optionalExpences[i] + ' '; 
	}
});

btnDayCount.addEventListener('click', function() {
	let sum = 0;
	for (let key in appData.expense) {
		sum += +appData.expense[key];
	}

	console.log(sum);

	if (appData.budjet != undefined) {
		appData.moneyPerDay = ((appData.budjet - sum) / 30).toFixed();
		dayBudjetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = 'Ниже среднего';
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = 'Средний';
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = 'Выше среднего';
		} else {
			levelValue.textContent = 'Ошибка';
		}
	} else {
		dayBudjetValue.textContent = 'Ошибка';
	}

});

incomeChoose.addEventListener('input', function() {
	let items = incomeChoose.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
	if (appData.savings == true) {
		appData.savings = false
	} else {
		appData.savings = true;
	}
});

sumChoose.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +sumChoose.value,
			percent = +percentChoose.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentChoose.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +sumChoose.value,
			percent = +percentChoose.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budjet: money,
	timeData: time,
	expense: {},
	optionalExpences: {},
	income: [],
	savings: false
};




console.log(budjetValue);
console.log(levelValue);
console.log(expensesValue);
console.log(optionalexpensesValue);
console.log(incomeValue);
console.log(monthSavingsValue);
console.log(yearSavingsValue);
console.log(btnExpense);
console.log(btnOptExpense);
console.log(btnDayCount);
console.log(btnAllCount);
console.log(optionalexpensesItem);
console.log(expensesItem);
console.log(incomeChoose);
console.log(sumChoose);
console.log(percentChoose);
console.log(yearValue);
console.log(monthValue);
console.log(dayValue);

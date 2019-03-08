/*let money, time;

function start() {
	money = +prompt("Ваш бюджет за месяц?", "50000");
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

	while(isNaN(money) || 
		money == '' || 
		money == null) {
		money = +prompt("Ваш бюджет за месяц?", "50000");
	}
};
start();


let appData = {
	budjet: money,
	timeData: time,
	expense: {},
	optionalExpences: {},
	income: [],
	savings: true,
	chooseExpences: function() {
		for (let i = 0; i < 2; i++) {
			let expense_question = prompt("Введите обязательную статью расходов?", "Стул"),
				expense_question1 = prompt("Во сколько обойдется", "5000");

				if (typeof(expense_question) === 'string' && 
					typeof(expense_question) != null && 
					typeof(expense_question1) != null && 
					expense_question != '' && expense_question1 != '' && 
					expense_question.length < 50) {
					console.log('done');
					appData.expense[expense_question] = expense_question1;
				} else {
					i = i - 1;
				}		
		}
	},
	detectDayBudjet: function() {
		appData.moneyPerDay = (appData.budjet / 30).toFixed(1);
		alert('everyday earn is ' + appData.moneyPerDay);
	},
	detectLevel: function() {
		if (appData.moneyPerDay < 100) {
			console.log('min');
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log('norm');
		} else if (appData.moneyPerDay > 2000) {
			console.log('max');
		} else {
			console.log('error');
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt('Какого сумма депозита?', '5000'),
				percent = +prompt('Под какой процент', '12');

			appData.monthIncome = save / 100 / 12 * percent;
			alert('Доход в месяц = ' + appData.monthIncome);
		}
	},
	chooseOptExpences: function() {
		for (let i = 1; i < 4; i++) {
			appData.optionalExpences[i] = prompt('Дополнительные расхoды', 'Стол');
		}
	},
	chooseIncome: function() {
		let items = prompt('Доход? (через запятую)', 'аренда, подработка, хобби');
		while (typeof(items) !== 'string' ||
			items == '') {
			items = prompt('Доход? (через запятую)', '');
		}
		appData.income = items.split(', ');
		appData.income.push(prompt('Smth else', 'основная работа'));
		appData.income.sort();
		appData.income.forEach(function(item, i, arr) {
			console.log((i + 1) + ': Способы доп. заработка: ' + item);
		});
	},
	showAppData: function() {
		console.log('Наша программа включает в себя данные: ');
		for (let key in appData) {
			console.log(key);
		}
	}
};*/


let btnStart = document.getElementById('start');
console.log(btnStart);


let budjetValue = document.querySelector('.budget-value'),
	levelValue = document.querySelector('.level-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
	incomeValue = document.querySelector('.income-value'),
	monthSavingsValue = document.querySelector('.monthsavings-value'),
	yearSavingsValue = document.querySelector('.yearsavings-value'),
	incomeInput = document.getElementsByClassName('expenses-item'),
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
	dayValue = document.querySelector('.day-value');


console.log(budjetValue);
console.log(levelValue);
console.log(expensesValue);
console.log(optionalexpensesValue);
console.log(incomeValue);
console.log(monthSavingsValue);
console.log(yearSavingsValue);
console.log(incomeInput);
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

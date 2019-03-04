let money, time;

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
	savings: true
};

function chooseExpences() {
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
	};
}

chooseExpences();

function detectDayBudjet() {
	appData.moneyPerDay = (appData.budjet / 30).toFixed(1);
	alert('everyday earn is ' + appData.moneyPerDay);
};

detectDayBudjet();

function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log('min');
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log('norm');
	} else if (appData.moneyPerDay > 2000) {
		console.log('max');
	} else {
		console.log('error');
	}
};

detectLevel();

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt('Какого сумма депозита?', '5000'),
			percent = +prompt('Под какой процент', '12');

		appData.monthIncome = save / 100 / 12 * percent;
		alert('Доход в месяц = ' + appData.monthIncome);
	}
}

checkSavings();

function chooseOptExpences() {
	for (let i = 1; i < 4; i++) {
		appData.optionalExpences[i] = prompt('Дополнительные расхoды', 'Стол');
	}
};

chooseOptExpences();
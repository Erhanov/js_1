var money = +prompt("Ваш бюджет за месяц?", "");
	time = prompt("Введите дату в формате YYYY-MM-DD", ""),
	expense_question = prompt("Введите обязательную статью расходов?", ""),
	expense_question1 = prompt("Во сколько обойдется", ""),
	expense_question = prompt("Введите обязательную статью расходов?", ""),
	expense_question1 = prompt("Во сколько обойдется", "");


var appData = {
	budjet: money,
	timeData: time,
	expense: {
		expense_question: expense_question1
	},
	optionalExpences: {},
	income: [],
	savings: false
};



appData.moneyPerDay = appData.budjet / 30;

alert('everyday earn is ' + appData.moneyPerDay);

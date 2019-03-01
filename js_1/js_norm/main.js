var money = +prompt("Ваш бюджет за месяц?", "500000");
	time = prompt("Введите дату в формате YYYY-MM-DD", ""),
	expense_question = prompt("Введите обязательную статью расходов?", ""),
	expense_question1 = +prompt("Во сколько обойдется", "500"),
	expense_question2 = prompt("Введите обязательную статью расходов?", ""),
	expense_question3 = +prompt("Во сколько обойдется", "501");


var appData = {
	budjet: money,
	timeData: time,
	expense: {
		expense_question: expense_question1,
		expense_question2: expense_question3
	},
	optionalExpences: {},
	income: [],
	savings: false
};



appData.moneyPerDay = appData.budjet / 30;

alert('everyday earn is ' + appData.moneyPerDay);
console.log(appData);
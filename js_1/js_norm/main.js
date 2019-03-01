'use strict'

let money = +prompt("Ваш бюджет за месяц?", "500000"),
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

let expense_question = prompt("Введите обязательную статью расходов?", "Стул"),
	expense_question1 = +prompt("Во сколько обойдется", "500"),
	expense_question2 = prompt("Введите обязательную статью расходов?", "Стол"),
	expense_question3 = +prompt("Во сколько обойдется", "501");



let appData = {
	budjet: money,
	timeData: time,
	expense: {},
	optionalExpences: {},
	income: [],
	savings: false
};

appData.expense[expense_question] = expense_question1,
appData.expense[expense_question2] = expense_question3;


appData.moneyPerDay = appData.budjet / 30;

alert('everyday earn is ' + appData.moneyPerDay);
console.log(appData);
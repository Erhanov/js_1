var money = +prompt("Ваш бюджет за месяц?", "");
var time = +prompt("Введите дату в формате YYYY-MM-DD", "");
var expense_question = +prompt("Введите обязательную статью расходов?", "");
var expense_question1 = +prompt("Во сколько обойдется", "");


var appData = {
	budjet: money,
	timeData: time,
	expense: expense_question1,
	optionalExpences: "",
	income: "",
	savings: false
};




alert(appData.money);


var n = 33721;
n = 3 * 3 * 7 * 2 * 1;
n *= n * n;
console.log(n);
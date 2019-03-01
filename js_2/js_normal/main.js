var money = +prompt("Ваш бюджет за месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");

var appData = {
	budjet: money,
	timeData: time,
	expense: {},
	optionalExpences: {},
	income: [],
	savings: false
};

/*for (let i = 0; i < 2; i++) {
	var expense_question = prompt("Введите обязательную статью расходов?", ""),
		expense_question1 = prompt("Во сколько обойдется", "");

		if (typeof(expense_question) === 'string' && 
			typeof(expense_question) != null && 
			typeof(expense_question1) != null && 
			expense_question != '' && expense_question1 != '' && 
			expense_question.length < 50) {
			console.log('done');
			appData.expense[expense_question] = expense_question1;
		} else {

		}		
};
*/

var i = 0;

/*
do {
	i++;
	var expense_question = prompt("Введите обязательную статью расходов?", ""),
		expense_question1 = prompt("Во сколько обойдется", "");

	

	if (typeof(expense_question) === 'string' && 
		typeof(expense_question) != null && 
		typeof(expense_question1) != null && 
		expense_question != '' && expense_question1 != '' && 
		expense_question.length < 50) {
		console.log('done');
		appData.expense[expense_question] = expense_question1;
	} else {

	}

} 
while (i < 2);

*/
while (i < 2) {
	i++;

	var expense_question = prompt("Введите обязательную статью расходов?", ""),
		expense_question1 = prompt("Во сколько обойдется", "");

	if (typeof(expense_question) === 'string' && 
		typeof(expense_question) != null && 
		typeof(expense_question1) != null && 
		expense_question != '' && expense_question1 != '' && 
		expense_question.length < 50) {
		console.log('done');
		appData.expense[expense_question] = expense_question1;
	} else {

	}
};

appData.moneyPerDay = appData.budjet / 30;

alert('everyday earn is ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log('min');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('norm');
} else if (appData.moneyPerDay > 2000) {
	console.log('max');
} else {
	console.log('error');
}
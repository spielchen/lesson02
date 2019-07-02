let money = 2222222, 
		income = "Фриланс",
		addExpenses = "Расходы на дорогу, проживание, развлечения",
		deposit = true,
		mission = 3333333,
		period = 11;


console.log( typeof money, typeof income, typeof deposit );
console.log(income.length);
console.log("Период " + period + " месяцев");
console.log("Цель заработать " + mission + " евро");
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(", "));

let budgetDay = money/30;
console.log("Дневной бюджет: " + budgetDay);
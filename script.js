let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    nessesaryExpense1 = 
        prompt("Введите обязательную статью расходов в этом месяце"),
    howMuch1 = prompt("Во сколько обойдется?"),
    nessesaryExpense2 = 
        prompt("Введите обязательную статью расходов в этом месяце"),
    howMuch2 = prompt("Во сколько обойдется?");

let optionalExpenses = {

};

let appData = {
    budjet: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.nessesaryExpense1 = appData.howMuch1;
appData.nessesaryExpense2 = appData.howMuch2;

alert("Бюджет на день = " + money/30);



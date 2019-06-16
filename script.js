let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let optionalExpenses = {

};

let appData = {
    budjet: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};


for (let i = 0; i < 2; i++) {
    let nessesaryExpense = 
        prompt("Введите обязательную статью расходов в этом месяце", ''),
        howMuch = prompt("Во сколько обойдется?", '');
    if (typeof(nessesaryExpense) === 'string' && typeof(nessesaryExpense != null) && typeof(howMuch != null) && nessesaryExpense != '' && howMuch != '' && nessesaryExpense.length < 50) {
        console.log("Done!");
        appData.expenses[nessesaryExpense] = howMuch;       
    }else {

    }

}

appData.moneyPerDay = appData.budjet / 30;

alert("Бюджет на день = " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");    
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка.");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка.");
} else {
    console.log("Error!"); 
}



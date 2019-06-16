let money,
    time;

let optionalExpenses = {

};

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

let appData = {
    budjet: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    choseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let nessesaryExpense = 
                prompt("Введите обязательную статью расходов в этом месяце", ''),
                howMuch = prompt("Во сколько обойдется?", '');
            if (typeof(nessesaryExpense) === 'string' && 
            typeof(nessesaryExpense != null) && 
            typeof(howMuch != null) && nessesaryExpense != '' && 
            howMuch != '' && nessesaryExpense.length < 50) {
                console.log("Done!");
                appData.expenses[nessesaryExpense] = howMuch;   
            }else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        alert("Бюджет на день = " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");    
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка.");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка.");
        } else {
            console.log("Error!"); 
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Каково сумма накоплений"),
                percent = +prompt("Под какой процент");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let optionalExpense = 
                prompt("Статья необязательных расходов? ", '');
            if (typeof(optionalExpense) === 'string' && 
            typeof(optionalExpense != null) && 
            optionalExpense != ''&& optionalExpense.length < 50) {
                console.log("Done!");
                appData.optionalExpenses[i] = optionalExpense;   
            }else {
                i = i - 1;
            }
        }
    },
    choseIcome: function() {
        let items = prompt("Что принесет доп. доход? (укажите через запятую).", '');
        while(typeof(items) !== 'string' || typeof(items) == null || items == '') {
            items = prompt("Ошибка введенных данных! Что принесет доп. доход? (укажите через запятую).", '');      
        }
        appData.income = items.split(', ');
        appData.income.push(prompt("Что-то еще?"));
        appData.income.sort();  
        appData.income.forEach(function (element, i) {
            console.log((i+1) + ': ' + element);
        });
    },
    showProp: function() {
        console.log('Наша программа включает в себя данные: ');
        for(let prop in appData) {
            console.log('- ' + prop);   
        }
    }
};

// start();
// choseExpenses();
// detectDayBudget();
// detectLevel();
// checkSavings();
//appData.chooseOptExpenses();
// appData.choseIcome();
appData.showProp();

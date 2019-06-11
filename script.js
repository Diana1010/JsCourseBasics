'use strict';


var budget = prompt("Ваш бюджет на месяц?");
var date = prompt("Введите дату в формате YYYY-MM-DD");


var appDate = { 
    budget: budget,
    timeData: date,
    expenses: {} ,
    optionalExpenses: {} ,
    income: [45,1],
    savings: false
};

for (let i = 0; i<2 ; i++){
    let consumption = prompt("Введите обязательную статью расходов в этом месяце?");
    let consumptionCost  = prompt("Во сколько обойдётся?");
    appDate.expenses[consumption] = consumptionCost;
}

function sum (object ){
    var total = 0;
    
    for (var property in object) {
        total += +object[property];
    }
    return total;
}

console.log(appDate);
 var oneDayBudget = (appDate.budget - sum(appDate.expenses) + sum(appDate.income))/30 ;
 alert("Бюджет на 1 день: " + oneDayBudget );


'use strict';

let budget, date;

function start(){

     while (isNaN(budget) || budget === null || budget === ""){
        budget = prompt("Ваш бюджет на месяц?");
     }

     date = prompt("Введите дату в формате YYYY-MM-DD");
}

start();

var appDate = { 
    budget: budget,
    timeData: date,
    expenses: {} ,
    optionalExpenses: {} ,
    income: [45,1],
    savings: true
};

function chooseExpenses(){
    for (let i = 0; i<2 ; i++){
        let consumption = prompt("Введите обязательную статью расходов в этом месяце?"),
         consumptionCost  = +prompt("Во сколько обойдётся?");
         if (typeof(consumption)==='string' && (typeof(consumption) != null) && (typeof(consumptionCost) != null && consumption !="" && consumptionCost != "") ){
            appDate.expenses[consumption] = consumptionCost;
         }
       
    }
}
chooseExpenses();


function sum (object ){
    var total = 0;
    
    for (var property in object) {
        total += object[property];
    }
    return total;
}

console.log(appDate);
 var oneDayBudget = ((appDate.budget - sum(appDate.expenses) + sum(appDate.income))/30).toFixed() ;
 alert("Бюджет на 1 день: " + oneDayBudget );

if (oneDayBudget < 100){
    console.log("Min budget");
}else if( oneDayBudget < 500 && oneDayBudget > 100){
    console.log("Fine budget");
}else if( oneDayBudget > 500){
    console.log("Awesome budget");
}else {
    console.log("Some error");
}

function checkSavings(){
    if (appDate.savings == true){
        let save = +prompt("Какова сумма накоплений"),
        percent = +prompt("Под какой процент?");
        appDate.monthIncome = save/100/12*percent;
        alert("Доход в месяц с депозита: " + appDate.monthIncome);
    }
}
checkSavings();
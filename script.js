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
    moneyPerDay: 0,
    optionalExpenses: {} ,
    income: [45,1],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i<2 ; i++){
        let consumption = prompt("Введите обязательную статью расходов в этом месяце?"),
         consumptionCost  = +prompt("Во сколько обойдётся?");
         if (typeof(consumption)==='string' && (typeof(consumption) != null) && (typeof(consumptionCost) != null && consumption !="" && consumptionCost != "") ){
            appDate.expenses[consumption] = consumptionCost;
         }
         else {
             i--;
         }
        } 
    },
    oneDayBudget: function() {
        function sum (object ){
            var total = 0;
            
            for (var property in object) {
                total += object[property];
            }
            return total;
        };
        appDate.moneyPerDay = ((appDate.budget - sum(appDate.expenses) + sum(appDate.income))/30).toFixed() ;
        alert("Бюджет на 1 день: " + appDate.moneyPerDay );
    },
    detectLevel: function() {
        if (appDate.moneyPerDay < 100){
            console.log("Min budget");
        }else if( appDate.moneyPerDay < 500 && appDate.moneyPerDay > 100){
            console.log("Fine budget");
        }else if( appDate.moneyPerDay > 500){
            console.log("Awesome budget");
        }else {
            console.log("Some error");
        }
    },
    checkSavings: function(){
        if (appDate.savings == true){
            let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент?");
            appDate.monthIncome = save/100/12*percent;
            alert("Доход в месяц с депозита: " + appDate.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i=0; i <= 3; i++){
            let opt = prompt("Статья необязательных расходов?", "");
            appDate.optionalExpenses = opt;
        }

    },
    chooseIncome: function(){

        let item = "";
        do{
            item = prompt("Что принесёт дополнительный доход?","");
           
        }      
        while (typeof(item) != 'string' || item == "");
        appDate.income = item.split(", ");
       
        appDate.income.push(prompt("Может ещё?", ""));
        appDate.income.sort();
        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
    }   
    
};

function printInfo(){
    for (let key in appData) {
        console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
    }
}
printInfo();



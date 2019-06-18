'use strict';

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');
	
	let budget, date;


startBtn.addEventListener('click', function(){
	date = prompt("Введите дату в формате YYYY-MM-DD");
	while (isNaN(budget) || budget === null || budget === ""){
        budget = prompt("Ваш бюджет на месяц?");
	 }
	 appDate.budget = budget;
	 appDate.timeData = date;
	 budgetValue.textContent = budget;
	 let timeDate = new Date(Date.parse(date));
	 yearValue.value = timeDate.getFullYear();
	 monthValue.value = timeDate.getMonth() + 1;
	 dayValue.value =  timeDate.getDate();

});

expensesBtn.addEventListener('click', function(){
    let sum = 0;
	for (let i = 0; i< expensesItem.length ; i++){
        let consumption = expensesItem[i].value,
         consumptionCost  = expensesItem[++i].value;
         if (typeof(consumption)==='string' && (typeof(consumption) != null) && (typeof(consumptionCost) != null && consumption !="" && consumptionCost != "") ){
            appDate.expenses[consumption] = consumptionCost;
            sum += +consumptionCost;
         }
         else {
             i--;
         }
        } 
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i=0; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;
        appDate.optionalExpenses = opt;
        optionalExpensesValue.textContent += appDate.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function(){
    function sum (object ){
        var total = 0;
        
        for (var property in object) {
            total += object[property];
        }
        return total;
    };
    appDate.moneyPerDay = ((appDate.budget - sum(appDate.expenses) + sum(appDate.income))/30).toFixed() ;
    dayBudgetValue.textContent = appDate.moneyPerDay;

    if (appDate.budget != undefined){

        if (appDate.moneyPerDay < 100){
            levelValue.textContent = "Min budget";
        }else if( appDate.moneyPerDay < 500 && appDate.moneyPerDay > 100){
            levelValue.textContent = "Fine budget";
        }else if( appDate.moneyPerDay > 500){
            levelValue.textContent = "Awesome budget";
        }else {
            levelValue.textContent = "Some error";
        }
    }else {
        dayBudgetValue.textContent = "Some error";
    }

});

var appDate = { 
    budget: budget,
    timeData: date,
    expenses: {} ,
    moneyPerDay: 0,
    optionalExpenses: {} ,
    income: [45,1],
    savings: true,
    chooseExpenses: function() {
       
    },
    oneDayBudget: function() {
       
        alert("Бюджет на 1 день: " + appDate.moneyPerDay );
    },
    detectLevel: function() {
       
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
        appDate.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
    }   
    
};

function printInfo(){
	
    for (let key in appDate) {
        console.log("Наша программа включает в себя данные: " + key + " - " + appDate[key]);
    }
}
//printInfo();


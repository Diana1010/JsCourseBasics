'use strict';

let person ={
    name: "John",
    age: 25
}

// console.log(person["name"], person.name);
// var years = prompt('Сколько вам лет?', 100);

// alert('Вам ' + years + ' лет!')

// var test = prompt("Тест", '');

// var age = prompt('возраст?', 18);

// var message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';

// alert( message );
// console.log(typeof(null));  //object
// console.log(typeof(45 +"456"));  //string
// console.log(typeof(45 + +"456"));  //number

let n  = 55;
switch (+n) {
    case 55:
        console.log("20 more");
    break;
    case 55:
         console.log("30 more");
    break;
    case 10:
        console.log("small");
    default:
        console.log("other value");
    break;
}

let arr= ["one", "two", "three"]; //keys
for (let i in arr){
    console.log(i);
}

let arr1= ["one", "two", "three"]; //values
for (let ij of arr){
    console.log(ij);
}

let str = arr1.join(", "); // join array to string
console.log(str);

let arrNumber = [2,1,45,16];

let arrSort = arrNumber.sort(); //sorting as string
console.log(arrSort);

function compareNum(a, b){
    return(a-b);
}

console.log(arrNumber.sort(compareNum));

let soldier = {  //inheritance
    health:100,
    armor: 400
};

let john = {
    health:300
};
john.__proto__ = soldier;
console.log(john);
console.log(john.armor);
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

// let n  = 55;
// switch (+n) {
//     case 55:
//         console.log("20 more");
//     break;
//     case 55:
//          console.log("30 more");
//     break;
//     case 10:
//         console.log("small");
//     default:
//         console.log("other value");
//     break;
// }

// let arr= ["one", "two", "three"]; //keys
// for (let i in arr){
//     console.log(i);
// }

// let arr1= ["one", "two", "three"]; //values
// for (let ij of arr){
//     console.log(ij);
// }

// let str = arr1.join(", "); // join array to string
// console.log(str);

// let arrNumber = [2,1,45,16];

// let arrSort = arrNumber.sort(); //sorting as string
// console.log(arrSort);

// function compareNum(a, b){
//     return(a-b);
// }

// console.log(arrNumber.sort(compareNum));

// let soldier = {  //inheritance
//     health:100,
//     armor: 400
// };

// let john = {
//     health:300
// };
// john.__proto__ = soldier;
// console.log(john);
// console.log(john.armor);

console.log( [ ] + false - null + true ); //output: nan\
//NaN - Not a number.

// Пустой массив преобразуется в пустую строку.

// Далее идет сложение пустой строки и false - получается "false"

// Когда мы пытаемся от строки отнять что-то - выполняется математически неверная операция и мы получаем NaN

// Это задача на динамическую типизацию в JS (по простому - преобразование типов данных один в другой)


// console.log(false - null+ true); //output 1
// console.log([ ] + false + true); //falsetrue
// console.log([ ] - null); //0
// console.log( []); //[]

// let y = 1; 
// let x = y = 2;
//  alert(x); // 2

//  console.log([ ] +1 + 2 ); //output 12
//  console.log( "1"[0] ); // 1

//  console.log( 2 && 1 && null && 0 && undefined); //null
 //Выведет null, так как оператор И возвращает первое ложное значение.

  //В логическом контексте в JS только 5 сущностей представляют собой неправду (false) - это 0, пустая строка "" , null , undefined , NaN


//  console.log(2 && 1 && null); //null
//  console.log(0 && null); //0
//  console.log(1 && undefined); //undefined
//  console.log(0 && undefined); //0
//  console.log(null && undefined); // null

//  console.log( typeof(!!( 0 && 1 ))); //boolean
//  console.log( typeof( 0 && 1 )); //number

//  console.log( null || 2 && 3 || 4 );  //3 

 // Выведет 3. Почему так? Мы разбиваем этот кусочек кода на 3 части.

// Сначала, в операции ИЛИ - из двух частей вернет 2. ИЛИ возвращает всегда первое правдивое утверждение.

// После оператор И сравнит 2 и 3 и вернет последнее - 3ку. Оператор И возвращает первое ложное значение, но если его нет - то последнее.

// И в конце ИЛИ возвращает первое правдивое утверждение. 


//  console.log(2 && 3 ); // 3 last value
//  console.log(45 || 3); // first value - 45

//  let a = [1, 2, 3],
//  b = [1, 2, 3]; 
// if (a == b ){  // no 
//     console.log("yes"); 
// }
 
//  console.log(typeof(+"Infinity") ); //number
//  console.log(  "Ёжик" > "яблоко"); //false
//  console.log(0 || "" || 2 || undefined || true || falsе);
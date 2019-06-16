let menu = document.querySelector('.menu');
console.log(menu);
let menuli = document.createElement('li');
menuli.classList.add('menu-item');
var item5 = document.createTextNode("Пятый пункт");         // add menu
menuli.appendChild(item5);   
console.log(menuli);
menu.appendChild(menuli);
console.log(menu);

document.body.style.backgroundImage = "url('img/apple_true.jpg')"; // add image

document.getElementById("title").textContent ="Мы продаем только подлинную технику Apple";
let adv = document.querySelector('.adv');
adv.remove();
 
let promptforApple = document.getElementById("prompt");
let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
promptforApple.textContent = yourOpinion;

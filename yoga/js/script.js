window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    
    let tab = document.querySelectorAll('.info-header-tab'),
        info  = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

        function hideTabContent(a){
            for (let i = a; i < tabContent.length; i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        };

        //hideTabContent(1);
        
        function showTabContent(b){
            if(tabContent[b].classList.contains('hide')){
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        };

        info.addEventListener('click', function(event){
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')){
                for (let i =0; i< tab.length; i++){
                    if (target == tab[i]){
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }

        });


        // Timer

        let deadline = '2019-06-23';

        function getTimeRemaining(endTime) {
            let t = Date.parse(endTime)- Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60)% 60),
            hours = Math.floor(t/(1000 *60 * 60));

            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        };

        function setClock(id, endTime){
            let timer= document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds =  timer.querySelector('.seconds'),
            timeInterval = setInterval( update, 1000);

            function update(){
                let t = getTimeRemaining(endTime);
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;

                 if (t.total <=0 ){
                     clearInterval(timeInterval);
                     hours.textContent = '00';
                     minutes.textContent = '00';
                     seconds.textContent = '00';
                 }

            }
        };

        setClock('timer', deadline);


        // modal 

        let more = document.querySelector('.more'), 
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close');

            more.addEventListener('click', function(){
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            });

            close.addEventListener('click', function(){
                overlay.style.display = 'none';
                more.classList.remove('more-splash');
                document.body.style.overflow = '';
            });


            class Options{
                consructor(height, width, bg, fontSize, textAlign){
                    this.height= height;
                    this.width= width;
                    this.bg = bg;
                    this.fontSize = fontSize;
                    this.textAlign= textAlign;
                }

                addText(str){
                    var div = document.createElement('div');
                    document.body.appendChild(div);
                    div.textContent = str;
                    div.style.cssText =  `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
                }
            }

            let option = new Options(300, 350, "red", 14, "center");
            option.addText("Hello");

});

// Form 

let message = {
    loading: 'Загрузка...',
    success: 'Спасибо',
    failure: 'Error'
  };

  let form  = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    // form.addEventListener('submit', function(event){
    //     event.preventDefault();
    //     form.appendChild(statusMessage);

        // не json

    //     let request = new XMLHttpRequest;
    //     request.open('POST', 'server.php');
    //     request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    //     let formData = new FormData(form);
    //     request.send(formData);

    //     request.addEventListener('readystatechange', function(){
    //         if (request.readyState < 4){
    //             statusMessage.innerHTML = message.loading;
    //         }
    //         else if (request.readyState == 4 && request.status == 200  ){
    //             statusMessage.innerHTML = message.success;
    //         }
    //         else{
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });

    //     for (let i = 0; i< input.length; i++){
    //         input[i].value = '';
    //     }
    // }) 


    // json

//     let request = new XMLHttpRequest;
//     request.open('POST', 'server.php');
//     request.setRequestHeader('Content-Type', 'application/json');

//     let formData = new FormData(form);
//     let obj ={};

//     formData.forEach(function(value, key){ //turn formData into sth readable
//             obj[key] = value;
//     });

//     let json = JSON.stringify(obj);
//     request.send(json);

//     request.addEventListener('readystatechange', function(){
//         if (request.readyState < 4){
//             statusMessage.innerHTML = message.loading;
//         }
//         else if (request.readyState == 4 && request.status == 200  ){
//             statusMessage.innerHTML = message.success;
//         }
//         else{
//             statusMessage.innerHTML = message.failure;
//         }
//     });

//     for (let i = 0; i< input.length; i++){
//         input[i].value = '';
//     }
// }) 


// Prmise with
 form.addEventListener('submit', function(event){

         event.preventDefault();
         form.appendChild(statusMessage);

function sendRequest() {
    return new Promise(function(resolve, reject){

        let request = new XMLHttpRequest;
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json');

        let formData = new FormData(form);
        let obj ={};

        formData.forEach(function(value, key){ //turn formData into sth readable
                obj[key] = value;
        });

        let json = JSON.stringify(obj);
        request.send(json);

        request.onload = function() {
            if (request.readyState < 4){
                resolve( message.loading);
            }
            else if (request.readyState == 4 && request.status == 200  ){
                resolve(message.success);
            }
            else{
                reject();
                
            }
        };
    });
};

    sendRequest()
        .then(response => {
            statusMessage.innerHTML = response;
        })
        .catch(() => statusMessage.innerHTML = message.failure)
        .then(() => { for (let i = 0; i< input.length; i++){
            input[i].value = '';}
        } );

    
}) ;

// Slider

let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);


    function showSlides(n){

        if(n > slides.length){
            slideIndex = 1;
        }

        if( n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n){
        showSlides(slideIndex+=n);
    }

    function currentSlide(n){
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(+1);
    });

    dotsWrap.addEventListener('click', function(event){
        for (let i = 0; i < dots.length + 1; i++){
            if(event.target.classList.contains('dot') && event.target == dots[i-1]){
                currentSlide(i);
            }
        }
    })


    // Calculator

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDay = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;



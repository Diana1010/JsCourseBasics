$(document).ready(function(){
    alert('Структура страницы сформирована, можно приступать!');

    $('.col-sm-offset-3 col-sm-3').on('click', function(){
        $(".overlay").fadeIn("slow");
        $(".modal").show("slow");
      });

      $('.col-sm-3').on('click', function(){
        $(".overlay").fadeIn("slow");
        $(".modal").show("slow");
      });
      $('.close').on('click', function(){
        $(".modal").hide("slow");
        $(".overlay").fadeOut("slow");
       
      });
  });
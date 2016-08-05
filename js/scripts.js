$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100&&$(window).scrollTop() <  $( window ).height()){
            $("#nav-icon li:nth-child(2)").addClass("active");
            $("#nav-icon li:nth-child(1)").removeClass("active");
            $("#nav-icon li:nth-child(3)").removeClass("active");

        }else if($(window).scrollTop()>=$( window ).height()){
          $("#nav-icon li:nth-child(3)").addClass("active");
          $("#nav-icon li:nth-child(2)").removeClass("active");
          $("#nav-icon li:nth-child(1)").removeClass("active");

        }
        else if($(window).scrollTop() < 100){
          $("#nav-icon li:nth-child(1)").addClass("active");
          $("#nav-icon li:nth-child(2)").removeClass("active");
          $("#nav-icon li:nth-child(3)").removeClass("active");
        }
    });
});

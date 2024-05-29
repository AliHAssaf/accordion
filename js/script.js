$(document).ready(function(){
    $(".accordion-item:first").addClass("active");
    $(".accordion-item:first").children(".accordion-trigger").children("img").attr("src", "img/minus.png");
    $(".accordion-item:first").children(".accordion-trigger").addClass("selected").next().show();

    $(".accordion-trigger").click(function () { 
        if($(this).hasClass("selected")){
            $(this).removeClass("selected");
            $(this).children("img").attr("src","img/add.png");
            $(this).next().slideUp();
            $(this).parent().removeClass("active");
        }
        else{
            $(".accordion-trigger").removeClass("selected");
            $(this).addClass("selected");
            $(".accordion-trigger").children("img").attr("src","img/add.png");
            $(this).children("img").attr("src","img/minus.png");
            $(".accordion-trigger").next().slideUp();
            $(this).next().slideDown();
            $(".accordion-item").removeClass("active");
            $(this).parent().addClass("active");
        }
    });
})
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 150){
        document.querySelector(".navbar").style.opacity="1";
    }
    else{
        document.querySelector(".navbar").style.opacity="0";
    }
});
$(".nav-item, btn-ghost").click(function(){
    if(
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,'')
        && 
        location.hostname == this.hostname
    ){
        var target = $(this.hash);
        target = target.length ? target : $('(name=' + this.hash.slice(1) + ')');
        if(target.length){
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 3000);
            return false
        }
    }
});
$(".navbar li a").click(function(){
    $(".navbar li a").parent().removeClass("active");
    $(this).parent().addClass("active");
});
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 0 && scroll <= 600){
        $("#home1").parent().addClass("active");
    }
    else{
        $("#home1").parent().removeClass("active");
    }
});
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 601 && scroll <= 2000){
        $("#about1").parent().addClass("active");
    }
    else{
        $("#about1").parent().removeClass("active");
    }
});
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 2001 && scroll <= 2700){
        $("#features1").parent().addClass("active");
    }
    else{
        $("#features1").parent().removeClass("active");
    }
});
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 2701){
        $("#contact1").parent().addClass("active");
    }
    else{
        $("#contact1").parent().removeClass("active");
    }
});
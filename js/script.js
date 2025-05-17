$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');

        if ($(this).hasClass('fa-times')){
            $(this).attr('aria-label', 'Close navigation menu');
        } else {
            $(this).attr('aria-label', 'Open navigation menu');
        }
    });

    $(window).on('scroll load',function(){
        
        $('#menu').removeClass('fa-times').attr('aria-label', 'Open navigation menu');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }

    });
    $('a[href*="#"]').click(function(e){
        const target = $(this).attr('href');

        if (target.length > 1 && $(target).length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 500,'linear');
        }
    });
 });
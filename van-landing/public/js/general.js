

// Burger menu
// TODO: Сделать как у яндекса с анимацией и из отдельных блоков
var menuStatus = false;
$('.header__burger').on('click', function() {
    if (menuStatus) {
        $('.header__menu').hide();
        
        menuStatus = false;
    } else {
        $('.header__menu').show();
        menuStatus = true
    }
});

// Anchor
function anchorScroll(anchor) {
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
    }, 800);
}

// TODO: использовать не только <a> 
$("a").on("click", function(e){
    e.preventDefault();
    var tag = $(this).prop("tagName");

    if (!$(this).prop('disabled')) {
        if (tag == 'A') {
            var anchor = $(this).attr('href');
            if ($(this).attr('href') != '' && $(this).attr('href') != '#') {
                anchorScroll(anchor);
            }    
        } else {
            var anchor = $(this).attr('data-href');
            anchorScroll(anchor);
        }
    }
});

// Adaptive
function start() {
    if (window.screen.width <= 1370) {
        if (!menuStatus) {
            $('.header__menu').css({'display':'none'});
        } else {
            $('.header__menu').css({'display':'block'});
        }
    } else {
        $('.header__menu').css({'display':'flex'});
    }
}

window.addEventListener('resize', start);


start();

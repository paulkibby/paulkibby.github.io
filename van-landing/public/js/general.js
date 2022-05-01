

// Burger menu
var menuStatus = false;
$('.header__burger').on('click', function() {
    if (menuStatus) {
        $('.header__content').removeClass('hb_active');
        $('.header__menu').removeClass('hm_active');
        $('.header__menu').hide();
        menuStatus = false;
    } else {
        $('.header__content').addClass('hb_active');
        $('.header__menu').addClass('hm_active');
        $('.header__menu').show();
        menuStatus = true
    }

    start();
});

// Anchor
function anchorScroll(anchor) {
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
    }, 800);
}

$('a, button').on("click", function(e){
    e.preventDefault();
    var tag = $(this).prop("tagName");

    if (!$(this).is('disabled')) {
        if (tag == 'A') {
            var anchor = $(this).attr('href');
            if (anchor != '' && anchor != '#') {
                anchorScroll(anchor);
            }    
        } else {
            var anchor = $(this).attr('data-href');
            if (anchor != '') {
                anchorScroll(anchor);
            }
        }
    }
});

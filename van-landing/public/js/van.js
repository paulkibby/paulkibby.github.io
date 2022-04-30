
// Scroll
var scroll;
function scrollLogic() {
    scroll = $(window).scrollTop();
    var offset = $('.home__content_video').offset().top + $('.home__content_video').height() - $(window).height();

    if (scroll >= 20 && scroll < $('.transition-vid').height()/2) {
        $('.transition-vid').fadeIn(318);
        $('.main-vid').fadeOut(318);
    } else if ((scroll < $('.transition-vid').height()/2)) {
        $('.main-vid').fadeIn(318);
        $('.transition-vid').fadeOut(318);
    } else if ((scroll > $('.transition-vid').height()/2)) {
        $('.transition-vid').show();
    }

    if (scroll >= offset) {
        $('.home__content__video__arrow__container').fadeOut(318);
    } else {
        $('.home__content__video__arrow__container').fadeIn(318);
    }
}

$(window).scroll(function() {
    scrollLogic();
});

// Arrow top blocks
$('.home__content__video__arrow__container').on('click', function() {
    if (scroll < 20) {
        $('html, body').stop().animate({
            scrollTop: 190
        }, 200);
    } else {
        anchorScroll('.air-vid');
    }
});

// Overlay effect
$(function() {
    var id = '#rec001';
    
    $('head').append('<style>body {overflow-x: hidden;}#allrecords {overflow: visible !important;}#t-header,#t-footer {position: relative;z-index: 2;} .t-rec {position: relative;z-index: 1;overflow-x: hidden;}'+id+' { position: -webkit-sticky; position: sticky; top: 0; z-index: 0;}</style>');
    
    $(window).on('load resize', function(){
        $(id).each(function(){
            var topPosition = $(window).height() - $(this).height();
            if (topPosition < 0) {
                $(this).css('top',topPosition);
            } else {
                $(this).css('top',0);
            }
        });
    });
});


scrollLogic();


$('.home-categories__item').on('click', function() {
    $('.home-categories__item').find('.text-gradient').addClass('hci__main').removeClass('text-gradient');
    $('.home-categories__item').find('.hci__phantom_hide').removeClass('hci__phantom_hide');
    
    $(this).find('.hci__main').addClass('text-gradient').removeClass('hci__main');
    $(this).find('.hci__phantom').addClass('hci__phantom_hide');
});

var modelsIsShow = false;
function showModels(id) {
    $('.home__models').fadeOut(218);

    if (modelsIsShow) {
        $('#'+id+', .home__models__close').show();
    } else {
        $('#'+id+', .home__models__close').fadeIn(118);
    }

    modelsIsShow = true;
}

$('.home__models__close').on('click', function() {
    modelsIsShow = false;

    $('.home-categories__item').find('.text-gradient').addClass('hci__main').removeClass('text-gradient');
    $('.home-categories__item').find('.hci__phantom_hide').removeClass('hci__phantom_hide');
    
    $('.home__models, .home__models__close').fadeOut(218);
});

var kbGallery = new Object();

function kbGalleryInit(name, pageIndex = 1, pageNum = 3) {
    if ($('#' + name).length > 0) {
        var images = $('#' + name).children();
        var maxPages = Math.ceil(images.length / pageNum);

        kbGallery[name] = {"pageIndex": pageIndex, "pageNum": pageNum, "maxPages": maxPages, "images": images};
        
        if ($('#' + name + '_len').length > 0) {
            $('#' + name + '_len').text('/' + maxPages);
        }
        
        slide(name, true);
    }
}

function pageConvert(page, pageNum) {
    return page * pageNum;
}

// FIXME: Если открыт последний слайд, не анимировать числа по нажатию на кнопку "далее"
function nextSlide(name) {
    if (kbGallery.hasOwnProperty(name)) {
        if (kbGallery[name]['pageIndex'] < Math.ceil($(kbGallery[name]['images']).length / kbGallery[name]['pageNum'])) {
            kbGallery[name]['pageIndex'] += 1;
            slide(name);
        }
    }
}

function previousSlide(name) {
    if (kbGallery.hasOwnProperty(name)) {
        if (kbGallery[name]['pageIndex'] > 1) {
            kbGallery[name]['pageIndex'] -= 1;
            slide(name);
        }
    }
}

function nextSlideAnim(name) {
    $('#kb_3').css({'height': $('#kb_3').height() + 'px'});
    
    nextSlide(name);
    setTimeout(function() {
        animate(kbGallery[name]['pageIndex']);
    }, 500);
}

function previousSlideAnim(name) {
    $('#kb_3').css({'height': $('#kb_3').height() + 'px'});

    previousSlide(name);
    setTimeout(function() {
        animate(kbGallery[name]['pageIndex']);
    }, 500);
}

function slide(name, first = false) {
    if (kbGallery.hasOwnProperty(name)) {
        lockSlideButton(name);

        if (first) {
            timeTO = 0;
        } else {
            timeTO = 500;
        }

        var pageC = pageConvert(kbGallery[name]['pageIndex'], kbGallery[name]['pageNum']);
        
        if (window.innerWidth <= 742) {
            $(kbGallery[name]['images']).fadeOut(500).children().removeClass('anim_show_border_75');
        } else {
            $(kbGallery[name]['images']).fadeOut(500).children().removeClass('anim_show_border_75').addClass('anim_hide_w_right');
        }

        setTimeout(function() {
            for (let i = pageC-kbGallery[name]['pageNum']; i < pageC; i++) {
                if (window.innerWidth <= 742) {
                    $(kbGallery[name]['images'][i]).fadeIn(500).children().removeClass('anim_hide_w_right');
                } else {
                    $(kbGallery[name]['images'][i]).fadeIn(500).children().removeClass('anim_hide_w_right').addClass('anim_show_border_75');
                }
            }
        }, timeTO);

        if ($('#' + name + '_page').length > 0) {
            $('#' + name + '_page').text(kbGallery[name]['pageIndex']);
        }

        // if (kbGallery[name]['pageIndex'] >= kbGallery[name]['maxPages']) {
        //     kbGallery[name]['pageIndex'] = 0;
        // }
    }
}

function lockSlideButton(name) {
    if ($('.' + name + '_btn').length > 0) {
        $('.' + name + '_btn').prop('disabled', true);

        setTimeout(function() {
            if (kbGallery[name]['pageIndex'] <= 1) {
                $('.' + name + '_btn').eq(1).prop('disabled', false);
            } else if (kbGallery[name]['pageIndex'] < kbGallery[name]['maxPages'] && kbGallery[name]['pageIndex'] != 1) {
                $('.' + name + '_btn').eq(0).prop('disabled', false);
                $('.' + name + '_btn').eq(1).prop('disabled', false);
            } else if (kbGallery[name]['pageIndex'] >= kbGallery[name]['maxPages']) {
                $('.' + name + '_btn').eq(0).prop('disabled', false);
            }
        }, 1000);
    }
}

kbGalleryInit('kb_3', 1, 1);

function animateNumbers(el, time, start, end) {
    $(el).each(function() {
        $(this).prop('Counter', start).stop().animate({
            Counter: end
        }, {
        duration: time,
        easing: 'linear',
        step: function(now) {
            $(this).text(new Intl.NumberFormat('ru-RU').format(Math.ceil(now)));
        }
        });
    });
}

function animate(num) {
    num = String(num);
    
    var animValues = {
        "price": Number($('.hifmt_price_' + num).attr('data-value')),
        "width": Number($('.hifmt_width_' + num).attr('data-value')),
        "lenght": Number($('.hifmt_lenght_' + num).attr('data-value')),
        "height": Number($('.hifmt_height_' + num).attr('data-value')),
    };
    
    animateNumbers('.hifmt_price_' + num, 2000, (animValues['price']-10), animValues['price']);
    animateNumbers('.hifmt_width_' + num, 1250, (animValues['width']-10), animValues['width']);
    animateNumbers('.hifmt_lenght_' + num, 1500, (animValues['lenght']-10), animValues['lenght']);
    animateNumbers('.hifmt_height_' + num, 1000, (animValues['height']-5), animValues['height']);
}

// var animSlideLineTimer;
// function animSlideLine() {
//     $('.home__line__timer').stop().animate({
//         width: '100%'
//     }, {
//         duration: 10000
//     });

//     animSlideLineTimer = setTimeout(function() {
//         nextSlideAnim('kb_3');
//         $('.home__line__timer').stop().css({'width': '0'});
//     }, 10000);
// }

// var animSlideLineInterval = setInterval(animSlideLine, 10000);

// $('.hcc2').on('mouseenter', function() {
//     clearTimeout(animSlideLineTimer);
//     clearInterval(animSlideLineInterval);
//     $('.home__line__timer').stop();
// });

// $('.hcc2').on('mouseleave', function() {
//     $('.home__line__timer').stop().css({'width': '0'});
    
//     $('.home__line__timer').stop().animate({
//         width: '100%'
//     }, {
//         duration: 10000
//     });
//     animSlideLineInterval = setInterval(animSlideLine, 10000);
// });



// Categories scroll
// TODO: Optimize
function categoriesScroll(direction) {
    var sl = $('.home-categories__body').scrollLeft();
    var st = $('.home-categories__body').scrollTop();

    if (direction == 'right') {
        slTo = sl + 107;
    } else if (direction == 'left') {
        slTo = sl - 115;
    } else if (direction == 'up') {
        stTo = st - 115;
    } else if (direction == 'down') {
        stTo = st + 107;
    }

    if (direction == 'left' || direction == 'right'){
        $('.home-categories__body').animate({
            scrollLeft: slTo
        }, {
            duration: 300
        });
    } else if (direction == 'up' || direction == 'down') {
        $('.home-categories__body').animate({
            scrollTop: stTo
        }, {
            duration: 300
        });
    }
    
}

// Galleries init
$('.work__gallery').owlCarousel({
    items: 3,
    lazyLoad: true,
    loop: true,
    margin: 50,
    responsive: {
        0: {
            items: 1,
            margin: 20
        },

        600: {
            items: 2,
            margin: 20
        },

        900: {
            margin: 20
        },

        1000: {
            items: 3,
        }
    }
});

$('.work__gallery2').owlCarousel({
    items: 1,
    lazyLoad: true,
    loop: true,
    margin: 20
});

// Adaptive
function start() {
    if (window.innerWidth <= 1370) {
        if (!menuStatus) {
            $('.header__menu').css({'display':'none'});
        } else {
            $('.header__menu').css({'display':'block'});
        }

        $('.hca_1').attr('onclick', "categoriesScroll('left')");
        $('.hca_2').attr('onclick', "categoriesScroll('right')");
    } else {
        $('.header__menu').css({'display':'flex'});
        
        $('.hca_1').attr('onclick', "categoriesScroll('up')");
        $('.hca_2').attr('onclick', "categoriesScroll('down')");
    }

    if (window.innerWidth <= 1190) {
        $('.kb_3_btn').attr('data-href', '#kb_3');
    } else {
        $('.kb_3_btn').attr('data-href', '');
    }
    
    $('#kb_3').css({'height': ''});
}

window.addEventListener('resize', start);
start();
animate(1);


// "Буферизация" (неполная) видео
// $('.air-vid_video')[0].addEventListener('loadeddata', function() {
//     var e = this;
//     var int = setInterval(function() {
//         if(e.duration == e.buffered.end(0)){
//             console.log('Загрузилось :)');
//             clearInterval(int);
//         };
//     }, 100);
// });

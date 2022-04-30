
var hciPos = { };
$('.home-categories__item').on('click', function() {
    $('.home-categories__item').find('.text-gradient').addClass('hci__main').removeClass('text-gradient');
    $('.home-categories__item').find('.hci__phantom_hide').removeClass('hci__phantom_hide');
    
    $(this).find('.hci__main').addClass('text-gradient').removeClass('hci__main');
    $(this).find('.hci__phantom').addClass('hci__phantom_hide');

    $('.home__models__close').offset({top: $(this).offset().top + 15, left: $(this).offset().left + 93});
    $('.home__models, .home__models__close').fadeIn(218);
});

$('.home__models__close').on('click', function() {
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
    nextSlide(name);
    animate(kbGallery[name]['pageIndex']);
}

function previousSlideAnim(name) {
    previousSlide(name);
    animate(kbGallery[name]['pageIndex']);
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
        
        if (window.screen.width <= 742) {
            $(kbGallery[name]['images']).fadeOut(500).children().removeClass('anim_show_border_75');
        } else {
            $(kbGallery[name]['images']).fadeOut(500).children().removeClass('anim_show_border_75').addClass('anim_hide_w_right');
        }

        setTimeout(function() {
            for (let i = pageC-kbGallery[name]['pageNum']; i < pageC; i++) {
                if (window.screen.width <= 742) {
                    $(kbGallery[name]['images'][i]).fadeIn(500).children().removeClass('anim_hide_w_right');
                } else {
                    $(kbGallery[name]['images'][i]).fadeIn(500).children().removeClass('anim_hide_w_right').addClass('anim_show_border_75');
                }
            }
        }, timeTO);

        if ($('#' + name + '_page').length > 0) {
            $('#' + name + '_page').text(kbGallery[name]['pageIndex']);
        }
    }
}

function lockSlideButton(name) {
    if ($('.' + name + '_btn').length > 0) {
        $('.' + name + '_btn').prop('disabled', true);

        setTimeout(function() {
            $('.' + name + '_btn').prop('disabled', false);
        }, 1000);
    }
}

$('.home__line__item_btn').on('click', function(){
    $('.home__line__item_btn').prop('disabled', true);

    setTimeout(function() {
        $('.home__line__item_btn').prop('disabled', false);
    }, 1000);
});

kbGalleryInit('kb_3', 1, 1);

function animateNumbers(el, time, start, end) {
    $(el).each(function() {
        $(this).prop('Counter', start).animate({
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

// Categories scroll
function categoriesScroll(direction) {
    sl = $('.home-categories__body').scrollLeft();

    if (direction == 'right') {
        slTo = sl + 107;
    } else if (direction == 'left') {
        slTo = sl - 115;
    }

    $('.home-categories__body').animate({
        scrollLeft: slTo
    }, {
        duration: 300
    });
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

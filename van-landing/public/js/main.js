$('.home-categories__item').on('click', function() {
    $('.home-categories__item').find('.text-gradient').addClass('hci__main').removeClass('text-gradient');
    $('.home-categories__item').find('.hci__phantom_hide').removeClass('hci__phantom_hide');
    
    $(this).find('.hci__main').addClass('text-gradient').removeClass('hci__main');
    $(this).find('.hci__phantom').addClass('hci__phantom_hide');

    $('.home__models').fadeIn(218);
});

// var galleryItems = Math.ceil($('.work__img').length / 3);

// var pageIndex = 1;
// var pageNum = 3;
// var pages = $('.work__img__container');
// var p = Math.ceil($('.work__img__container').length / pageNum);
// $('.wlg_len').text('/' + p);

var kbGallery = new Object();

function kbGalleryInit(name, pageIndex = 1, pageNum = 3) {
    if ($('#' + name).length > 0) {
        var images = $('#' + name).children();
        var maxPages = Math.ceil(images.length / pageNum);

        kbGallery[name] = {"pageIndex": pageIndex, "pageNum": pageNum, "maxPages": maxPages, "images": images};
        
        if ($('#' + name + '_len').length > 0) {
            $('#' + name + '_len').text('/' + maxPages);
        }
        
        slide(name);
    }
}

function pageConvert(page, pageNum) {
    return page * pageNum;
}

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

function slide(name) {
    if (kbGallery.hasOwnProperty(name)) {
        lockSlideButton(name);

        var pageC = pageConvert(kbGallery[name]['pageIndex'], kbGallery[name]['pageNum']);

        $(kbGallery[name]['images']).fadeOut(500).children().removeClass('anim_show_border_75').addClass('anim_hide_w_right');

        setTimeout(function() {
            for (let i = pageC-kbGallery[name]['pageNum']; i < pageC; i++) {
                $(kbGallery[name]['images'][i]).fadeIn(500).children().removeClass('anim_hide_w_right').addClass('anim_show_border_75');
            }
        }, 500);

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

// kbGalleryInit('kb_1', 1, 1);
// kbGalleryInit('kb_2', 1, 3);

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

var animValues = {
    "price": Number($('.hifmt_price').text()),
    "width": Number($('.hifmt_width').text()),
    "lenght": Number($('.hifmt_lenght').text()),
    "height": Number($('.hifmt_height').text()),
};

animateNumbers('.hifmt_price', 2000, (animValues['price']-10), animValues['price']);
animateNumbers('.hifmt_width', 1250, (animValues['width']-10), animValues['width']);
animateNumbers('.hifmt_lenght', 1500, (animValues['lenght']-10), animValues['lenght']);
animateNumbers('.hifmt_height', 1000, (animValues['height']-5), animValues['height']);

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

var menuStatus = false;
$('.header__burger').on('click', function() {
    if (menuStatus) {
        $('.header__menu').slideUp();
        menuStatus = false;
    } else {
        $('.header__menu').slideDown();
        menuStatus = true
    }
});

// windowSize3 = false;
// windowSize2 = false;
// windowSize1 = false;
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

    
    // if (window.screen.width <= 1000) {
    //     if (!windowSize1) {
    //         kbGallery['kb_2']['pageNum'] = 1;
    //         slide('kb_2');
    //         windowSize3 = false;
    //         windowSize2 = false;
    //         windowSize1 = true;
    //         console.log('1000');
    //     }
    // } else if (window.screen.width <= 1600) {
    //     if (!windowSize2) {
    //         kbGallery['kb_2']['pageNum'] = 2;
    //         slide('kb_2');
    //         windowSize3 = false;
    //         windowSize2 = true;
    //         windowSize1 = false;
    //         console.log('1600');
    //     }
    // } else {
    //     if (!windowSize3) {
    //         kbGallery['kb_2']['pageNum'] = 3;
    //         slide('kb_2');
    //         windowSize3 = true;
    //         windowSize2 = false;
    //         windowSize1 = false;
    //         console.log('> 1600');
    //     }
    // }
}

start();
window.addEventListener('resize', start);



// $('.home-categories__item').on('mouseenter', function() {
//     $(this).find('.hci__main').addClass('text-gradient');
// });

// $('.home-categories__item').on('mouseleave', function() {
//     $(this).find('.hci__main').removeClass('text-gradient');
// });






// $('.work__gallery').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
    
// });

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


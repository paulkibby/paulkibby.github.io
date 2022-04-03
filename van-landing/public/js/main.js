$('.home-categories__item').on('click', function() {
    $('.home-categories__item').find('.text-gradient').addClass('hci__main').removeClass('text-gradient');
    $('.home-categories__item').find('.hci__phantom_hide').removeClass('hci__phantom_hide');
    
    $(this).find('.hci__main').addClass('text-gradient').removeClass('hci__main');
    $(this).find('.hci__phantom').addClass('hci__phantom_hide');

    $('.home__models').fadeIn(218);
});

// var galleryItems = Math.ceil($('.work__img').length / 3);


var pageIndex = 1;
var pageNum = 3;
var pages = $('.work__img__container');
var p = Math.ceil($('.work__img__container').length / pageNum);
$('.wlg_len').text('/' + p);

function pageConvert(page) {
    return page * pageNum;
}

function nextSlide() {
    if (pageIndex < pageConvert(pages.length)) {
        slide(pageIndex += 1);
    }
}

function nextSlide() {
    if (pageIndex < p) {
        slide(pageIndex += 1);
    }
}

function previousSlide() {
    if (pageIndex > 1) {
        slide(pageIndex -= 1);
    }
}

function slide(page) {
    var pageC = pageConvert(page);

    $('.work__img__container').fadeOut(118);

    setTimeout(function() {
        for (let i = pageC-pageNum; i < pageC; i++) {
            $(pages[i]).fadeIn(118);
        }
    }, 150);

    $('.wlg_page').text(page);
}

$('.home__line__item_btn').on('click', function(){
    $('.home__line__item_btn').prop('disabled', true);

    setTimeout(function() {
        $('.home__line__item_btn').prop('disabled', false);
    }, 160);
});

slide(1);













// $('.home-categories__item').on('mouseenter', function() {
//     $(this).find('.hci__main').addClass('text-gradient');
// });

// $('.home-categories__item').on('mouseleave', function() {
//     $(this).find('.hci__main').removeClass('text-gradient');
// });










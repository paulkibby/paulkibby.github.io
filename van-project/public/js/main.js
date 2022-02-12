
$('.combo-box-cat__input, .combo-box-cat__arrow').on('click focus', function() {
    if ($(this).attr('data-element') == 'input') {
        $(this).parent().siblings('.combo-box-cat__body').slideDown('fast');
    } else {
        $(this).parent().siblings('.combo-box-cat__body').slideToggle('fast');
    }
});

$('.combo-box-cat__category-item').on('click', function() {
    $(this).siblings('.combo-box-cat__item-body').slideToggle('fast');
    $(this).children('.combo-box-cat__item-info').find('i').toggleClass('rotate-90');
});

$('.combo-box-cat__item').on('click', function() {
    let name = $(this).attr('data-name');
    $(this).parent().parent().parent().siblings('.combo-box-cat__header').children('input').val(name);
    $(this).parent().parent().parent('.combo-box-cat__body').slideToggle('fast');
    $(this).parent().parent().parent().find('.combo-box-cat__item-body').slideUp('fast');
    $(this).parent().parent().parent().find('.fa-chevron-right').removeClass('rotate-90');
});

$(document).on('mouseup', function(e){ // событие клика по веб-документу
    var el = $(".combo-box-cat");
    if ( !el.is(e.target) && el.has(e.target).length === 0 ) {
        $('.combo-box-cat__body').slideUp('fast');
        $('.combo-box-cat__item-body').slideUp('fast');
        $('.combo-box-cat__category-arrow').removeClass('rotate-90');
    }
});

// --- SEARCH ---

var searchList = $('.combo-box-cat__item');
var isSearch = 0;

$('.combo-box-cat__input').on('keyup', function(e) {
    $(this).parent().parent().find('.combo-box-cat__category-arrow').removeClass('rotate-90');

    let userInput = $(this).val().trim().toLowerCase();
    if (userInput != '') {
        $(this).parent().parent().find('.combo-box-cat__category-item').slideUp('fast');

        $(searchList).each(function() {
            if ($(this).attr('data-name').toLowerCase().search(userInput) == -1) {
                $(this).slideUp('fast');
                isSearch++;
            } else {
                $(this).parent('.combo-box-cat__item-body').slideDown('fast');
                $(this).slideDown('fast');
                isSearch = 0;
            }
        });

        if (($(searchList).length - isSearch) <= 0) {
            $('.combo-box-cat__search-message-body').slideDown();
        } else {
            $('.combo-box-cat__search-message-body').slideUp();
        }

    } else {
        $(this).parent().parent().find('.combo-box-cat__category-item').slideDown('fast');
        $('.combo-box-cat__item-body').slideUp('fast');
        $('.combo-box-cat__search-message-body').slideUp();
        $(searchList).slideDown('fast');
        isSearch = 0;
    }
});


// ---
var svgns = "http://www.w3.org/2000/svg";
var svgItems = {"side": [], "above": [], "back": []};

function drawLine(side, mX, mY, lX, lY) {
    var shape = document.createElementNS(svgns, "path");
    shape.setAttributeNS(null, "fill", 'none');
    shape.setAttributeNS(null, "stroke", '#000000');
    shape.setAttributeNS(null, "style", 'stroke-width: 2;');
    shape.setAttributeNS(null, "d", 'M '+mX+', '+mY+' L '+lX+', '+lY+'');
    
    svgItems[side].push(shape);
}

function drawAll() {
    $('#svg-side').html(svgItems.side);
    $('#svg-above').html(svgItems.above);
    $('#svg-back').html(svgItems.back);

    svgItems = {"side": [], "above": [], "back": []};
}

var vanLenght = 3000;
var vanWidth = 1500;
var vanHeight = 1200;
var vanLenghtPlus = vanLenght;
var a, b;

function drawFrame() {
    drawLine('side', 0, 1, vanLenght, 1);
    drawLine('side', 0, 0, 0, vanHeight);
    drawLine('side', 0, vanHeight-1, vanLenght, vanHeight-1);
    drawLine('side', vanLenght, 0, vanLenght, vanHeight);

    drawLine('above', 0, 1, vanLenght, 1);
    drawLine('above', 0, 0, 0, vanWidth);
    drawLine('above', 0, vanWidth-1, vanLenght, vanWidth-1);
    drawLine('above', vanLenght, 0, vanLenght, vanWidth);

    drawLine('back', 0, 1, vanWidth, 1);
    drawLine('back', 1, 0, 1, vanHeight);
    drawLine('back', 0, vanHeight-1, vanWidth, vanHeight-1);
    drawLine('back', vanWidth-1, 0, vanWidth-1, vanHeight);
}

function calcFrame() {
    a = (vanLenght / vanHeight);
    b = (vanLenght / vanWidth);
    vanLenghtPlus = vanLenght;

    if (a > 2) {
        vanLenght = 600;
        vanHeight = 600 / a;
    } else if (a > 1) {
        vanHeight = 300 / a;
        vanLenght = 600;
    } else {
        vanHeight = 300;
        vanLenght = 300 * a;
    }
    
    if (b > 2) {
        vanLenghtPlus = 600;
        vanWidth = 600 / b;
    } else if (b > 1) {
        vanWidth = 300 / b;
        vanLenghtPlus = 600;
    } else {
        vanWidth = 300;
        vanLenghtPlus = 300 * b;
    }
}

$('.data-input__input[name=lenght], .data-input__input[name=width], .data-input__input[name=height]').on('keyup', function() {
    vanLenght = (Number(vanLenght) != 0) ? Number($('.data-input__input[name=lenght]').val()) : 4;
    vanWidth = (Number(vanWidth) != 0) ? Number($('.data-input__input[name=width]').val()) : 4;
    vanHeight = (Number(vanHeight) != 0) ? Number($('.data-input__input[name=height]').val()) : 4;

    calcFrame();
    drawFrame();
    drawAll();
});

calcFrame();
drawFrame();
drawAll();



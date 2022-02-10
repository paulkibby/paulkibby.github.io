
$('.dd-list-input, .dd-list-header-arrow').click(function() {
    if ($(this).attr('data-dd-el') == 'input') {
        $(this).parent().siblings('.dd-list-content').slideDown('fast');
    } else {
        $(this).parent().siblings('.dd-list-content').slideToggle('fast');
    }
});

$('.dd-list-category-header').click(function() {
    $(this).siblings('.dd-list-item-content').slideToggle('fast');
    $(this).children('.dd-list-item-info').find('.fa-chevron-right').toggleClass('rotate-90');
});

$('.dd-list-item-header').click(function() {
    var name = $(this).attr('data-name');
    $(this).parent().parent().parent().parent().siblings('.dd-list-header').children('input').val(name);
    $(this).parent().parent().parent().parent('.dd-list-content').slideToggle('fast');
    $(this).parent().parent().parent().parent().find('.dd-list-item-content').slideUp('fast');
    $(this).parent().parent().parent().parent().find('.fa-chevron-right').removeClass('rotate-90');
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

$('.data-input__input[name=lenght], .data-input__input[name=width], .data-input__input[name=height]').keyup(function() {
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




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

var svgItems = {"side": "", "above": "", "back": ""};
var frameSideView = {"side": "", "above": "", "back": ""};

function drawLine(side, mX, mY, lX, lY) {
    svgItems[side] += '<path fill="none" stroke="#000000" style="stroke-width: 2;" stroke-linecap="square" d="M '+mX+', '+mY+' L '+lX+', '+lY+'"></path>';
}

function drawAll() {
    frameSideView.side = '<div class="svg-side-block"><svg id="svg-side" width="600" height="300" viewBox="-1 -1 600 300">'+svgItems.side+'</svg>';
    frameSideView.above = '<svg id="svg-above" width="600" height="300" viewBox="-1 -1 600 300">'+svgItems.above+'</svg></div>';
    frameSideView.back = '<div class="svg-side-block"><svg id="svg-back" width="300" height="300" viewBox="-1 -1 300 300">'+svgItems.back+'</svg></div>';
    
    $('.svg-side-view').html(frameSideView.side + frameSideView.above + frameSideView.back);

    svgItems = {"side": "", "above": "", "back": ""};
    frameSideView = {"side": "", "above": "", "back": ""};
}

var vanLenght = 3000;
var vanWidth = 1500;
var vanHeight = 1200;
var vanLenghtPlus = vanLenght;
var a, b;

function drawFrame() {
    drawLine('side', -1, 0, vanLenght-1, 0);
    drawLine('side', 0, 0, 0, vanHeight-3);
    drawLine('side', -1, vanHeight-2, vanLenght-1, vanHeight-2);
    drawLine('side', vanLenght-2, 0, vanLenght-2, vanHeight-1);

    drawLine('above', -1, 0, vanLenght-1, 0);
    drawLine('above', 0, 0, 0, vanWidth-1);
    drawLine('above',-1, vanWidth-2, vanLenght-1, vanWidth-2);
    drawLine('above', vanLenght-2, 0, vanLenght-2, vanWidth-1);

    drawLine('back', -1, 0, vanWidth-1, 0);
    drawLine('back', 0, 0, 0, vanHeight-1);
    drawLine('back', -1, vanHeight-2, vanWidth-1, vanHeight-2);
    drawLine('back', vanWidth-2, 0, vanWidth-2, vanHeight-2);
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

$('.input-data[name=lenght], .input-data[name=width], .input-data[name=height]').keyup(function() {
    vanLenght = (Number(vanLenght) != 0) ? Number($('.input-data[name=lenght]').val()) : 4;
    vanWidth = (Number(vanWidth) != 0) ? Number($('.input-data[name=width]').val()) : 4;
    vanHeight = (Number(vanHeight) != 0) ? Number($('.input-data[name=height]').val()) : 4;

    calcFrame();
    drawFrame();
    drawAll();
});

calcFrame();
drawFrame();
drawAll();






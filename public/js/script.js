function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = ('0' + t.days).slice(-2);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
            daysSpan.innerHTML = ('00');
            hoursSpan.innerHTML = ('00');
            minutesSpan.innerHTML = ('00');
            secondsSpan.innerHTML = ('00');
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 100);
}
  
var deadline="December 25 2021 00:00:00 GMT+0300";
initializeClock('countdown', deadline);

$(document).ready(function() {
    setTimeout(function() {$('.wrapper').fadeTo(250, 1);}, 250);
    setTimeout(function() {$('.bottom svg path:nth-child(1)').fadeTo(218, 1);}, 250);
    setTimeout(function() {$('.bottom svg path:nth-child(2)').fadeTo(218, 1);}, 350);
    setTimeout(function() {$('.bottom svg path:nth-child(3)').fadeTo(218, 1);}, 450);
    setTimeout(function() {$('.countdown-title').fadeTo(250, 1);}, 850);
    setTimeout(function() {$('.countdown-time').fadeTo(250, 1);}, 1100);
    setTimeout(function() {$('.countdown-text').fadeTo(250, 1);}, 1350);
    
    function fsuc(data) {
        alert(data);
    }
    
    $('.bottom-btn').on('click', function() {
        $('.main').fadeIn(250);
    });

    $('.x').on('click', function() {
        $('.main').fadeOut(250);
    });

    $('.form').on('click','.input-button', function(event) {
        // event.preventDefault();

        message = $.trim($('.input-block-textarea').val());
        if (message == '') {
            Swal.fire('Ааа неет!', 'Ну-ка давай пиши и поподробнее', 'warning');
        } else {
            $.get("a.php", "message="+message, function(data) {
                if (data == 1) {
                    Swal.fire('Желание загадано!', 'Теперь... осталось чуть-чуть подождать!', 'success');
                    $('.main').fadeOut(250);
                    $('.input-block-textarea').val('');
                } else {
                    Swal.fire('Упс... ошибка!', 'Программист называется...', 'error');
                }
            }), "jsonp";
        }
    });

});

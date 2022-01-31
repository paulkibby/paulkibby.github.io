$(document).ready(function() {
    var cardsBlock = $('.cards');
    var canvasFlashes = $('.canvas-flash');
    var button = $('.btn');
    var balanceInfo = $('.money');
    var creditInfo = $('#credit_num');

    var width = $(window).width();
    var cycleValues = {0: 172, 1: 249};
    var sec = {0: "3", 1: "4", 2: "5"};
    var newGame = true;

    var money = 2000;
    var winAmount = 5000;
    var twistAmount = 450;
    var credit = 0;
    var creditAmount = 2000;

    function setCookie(name, value) {
        document.cookie = name + '=' + value;
    }

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function defaultValues() {
        var cookieMoney = getCookie('money');
        var cookieCredit = getCookie('credit');
        
        if (cookieMoney) {
            money = Number(cookieMoney);
        } else {
            setCookie('money', money);
        }
        
        if (cookieCredit) {
            credit = Number(cookieCredit);
        } else {
            setCookie('credit', credit);
        }

        updateMoney();
        updateCredit();
    }

    function updateMoney() {
        setCookie('money', money);
        balanceInfo.text(new Intl.NumberFormat('ru-RU').format(money) + ' р.');
    }

    function changeMoney(act, value) {
        if (act == 'add') {
            money += value;
        } else if (act == 'sub') {
            money -= value;
        }

        updateMoney();
    }

    function updateCredit() {
        setCookie('credit', credit);
        creditInfo.text(credit);

        if (credit == 0) {
            $('#take_credit').prop('disabled', false);
            $('#repay_credit').prop('disabled', true);
        } else if (credit == 3) {
            $('#take_credit').prop('disabled', true);
            $('#repay_credit').prop('disabled', false);
        } else {
            $('#take_credit').prop('disabled', false);
            $('#repay_credit').prop('disabled', false);
        }
    }

    function addCredit() {
        if (credit < 3) {
            credit++;

            changeMoney('add', creditAmount);
            updateCredit();
        } else {
            notify('Достигнут лимит по количеству кредитов');
        }
    }

    function repayCredit() {
        if (credit > 0){
            if (money >= (creditAmount+200)) {
                credit--;

                changeMoney('sub', (creditAmount+200));
                updateCredit();
            } else {
                notify('Недостаточно средств для погашения кредита');
            }
        } else {
            notify('У вас нет кредитов');
        }
    }

    function reset() {
        adaptive();
        newGame = false;
    }

    function canvasFlash(act) {
        if (act) {
            canvasFlashes.fadeIn(80);
        } else {
            canvasFlashes.fadeOut(80);
        }
    }

    function twist() {
        if (money >= twistAmount) {
            var rand = {};
            
            button.prop('disabled', true);
            changeMoney('sub', twistAmount);

            if (!newGame) {
                canvasFlash(true);
                setTimeout(canvasFlash, 100, false);
            }

            function cycle() {
                for(i = 0; i < 3; i++) {
                    rand[i] = Math.floor(Math.random() * (39 - 35) + 35);
            
                    // delete / replace
                    if (rand[0] == rand[1]) {
                        rand[i] = rand[0];
                    }
            
                    // cardsBlock.eq(i).css({'transition':'all '+sec[i]+'s cubic-bezier(0, 0.11, 0.33, 1) 0s', 'margin-top':((-rand[i] * cycleValues[0]) - (rand[i]*cycleValues[1]) + cycleValues[2]) + 'px'});
                    cardsBlock.eq(i).css({'transition':'all '+sec[i]+'s cubic-bezier(0, 0.11, 0.33, 1) 0s', 'margin-top':(-rand[i] * cycleValues[0]) + (cycleValues[1]) + 'px'});
                }
                // $('.btn').text(rand[0]+' '+rand[1]+' '+rand[2]);
            }

            setTimeout(reset, 100);
            setTimeout(cycle, 150);
            setTimeout(function(){
                if ((rand[0] == rand[1]) && (rand[0] == rand[2])) {
                    changeMoney('add', winAmount);
                }

                button.prop('disabled', false);
            }, 5000);
        } else {
            notify('Деняк не хватает. Возьми кредит');
        }
    }

    $('.btn').click(function() {
        twist();
    });

    $('.balance-btn').click(function() {
        $('body').addClass('body-overflow-hide');
        $('.credit-background, .credit-modal').fadeIn(218);
    });

    $('.modal-close').click(function() {
        $('body').removeClass('body-overflow-hide');
        $('.credit-background, .credit-modal, .notify-modal').fadeOut(218);
    });

    $('#take_credit').click(function() {
        addCredit();
    });

    $('#repay_credit').click(function() {
        repayCredit();
    });

    // window.addEventListener('resize', start);

    // function start(){
    //     console.log('w: '+document.documentElement.clientWidth+' h: '+document.documentElement.clientHeight);
    // }

    function adaptive() {
        if (width <= 660) {
            cycleValues = {0: 100, 1: 139};
            cardsBlock.css({'margin-top':'-62px', 'transition':'none'});
        } else {
            cycleValues = {0: 172, 1: 249};
            cardsBlock.css({'margin-top':'-95px', 'transition':'none'});
        }
    }

    $(window).resize(function() {
        width = $(window).width();
        adaptive();
    });

    defaultValues();
    adaptive();

    function notify(text) {
        if (notifyTimer) { clearTimeout(notifyTimer); }
        $('#notify_text').text(text);
        $('.notify-modal').fadeIn(418);
        var notifyTimer = setTimeout(function() {
            $('.notify-modal').fadeOut(418);
        }, 3000);
    }
});

// function start() {
//     random = Math.floor(Math.random() * (11 - 1) + 1);
//     cardsBlock.style.left = (-random * 224) + (384+100) + 'px';
//     document.querySelector('.btn').innerText = random;
//     random--;
//     cards[random].style.background = 'red';
// }

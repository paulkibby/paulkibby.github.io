$(document).ready(function() {

    let gifts = {
        0: {
            'title': 'Ушки',
            'subtitle': 'Греть ушки классными звуками',
            'img': 'headphone.svg',
        },
        1: {
            'title': 'Квадрат малевича',
            'subtitle': 'Если найдём для него место =)',
            'img': 'monitor.svg',
        },
        2: {
            'title': 'QWERTY',
            'subtitle': 'Какие-то кнопки, красивые',
            'img': 'keyboard.svg',
        },
        3: {
            'title': 'ручная мыш(ь)',
            'subtitle': 'Твёрдая опора для твоей ручки',
            'img': 'mouse.svg',
        },
        4: {
            'title': 'Вкусняшки',
            'subtitle': 'Которые ты получишь сегодня)',
            'img': 'heart.svg',
        },
    };

    let currentGiftId = 0;
    let giftsOver = false;
    function setGift(id) {
        $('#gift__img').attr('src', 'public/img/' + gifts[id].img);
        $('#gift__title').text(gifts[id].title);
        $('#gift__subtitle').text(gifts[id].subtitle);
    }
    setGift(currentGiftId);
    
    function openGiftModal() {
        $('#gift__button').prop('disabled', false);
        $('#gift__modal').fadeIn();
        $('#gift__modal').addClass('modal--show');
        setTimeout(() => {
            $('#gift__modal__window').fadeIn();
        }, 400);
    }

    function closeGiftModal() {
        $('#gift__modal__window').fadeOut();
        setTimeout(() => {
            $('#gift__modal').removeClass('modal--show');
            $('#gift__modal').fadeOut();
        }, 400);
    }

    function setGiftModalButtonText(text) {
        $('#gift__button').text(text);
    }

    function currentGiftIdIncrement() {
        if (currentGiftId < (Object.keys(gifts).length - 1)) {
            currentGiftId++;
        } 
        
        if (currentGiftId >= (Object.keys(gifts).length - 1)) {
            setTimeout(() => {
                setGiftModalButtonText('Ура!');
            }, 800);
            giftsOver = true;
        }
    }

    function openLastModal() {
        $('#last__modal').fadeIn();
        $('#last__modal').addClass('modal--show');
        setTimeout(() => {
            $('#last__modal__window').fadeIn();
        }, 400);
    }

    function closeLastModal() {
        $('#last__modal__window').fadeOut();
        setTimeout(() => {
            $('#last__modal').removeClass('modal--show');
            $('#last__modal').fadeOut();
        }, 400);
    }
    
    $('#gift__button').on('click', function() {
        $(this).prop('disabled', true);
        closeGiftModal();
        if (!giftsOver) {
            currentGiftIdIncrement();
            $('#open-gift').fadeOut();
            setTimeout(() => {
                $('#open-gift').fadeIn();
                openGiftRestart();
            }, 300);
        } else {
            setTimeout(() => {
                openLastModal();
            }, 1000);
        }
    });

    $('#loading__chest').on('click', function() {
        $('#loading__chest').attr('src', 'public/img/chest.gif');
        backgroundMusic.volume = 0.15;
        backgroundMusic.play();
        setTimeout(() => {
            $('.loading__chest').fadeOut();

            setTimeout(() => {
                $('.loading').fadeOut(400);
                $('.loading').snowfall('clear');
                openGiftRestart();
            }, 1000);
        }, 500);
    });

    let vid = document.querySelector('#open-gift');
    let backgroundMusic = document.querySelector('#background-music');
    function openGiftPlay() {
        vid.play();
    }

    function openGiftRestart() {
        vid.currentTime = 0;
        vid.play();
        videoCheck();
    }

    function videoCheck() {
        let vidInterval = setInterval(() => {
            if (vid.currentTime >= (vid.duration - 2.8)) {
                setGift(currentGiftId);
                openGiftModal();
                clearInterval(vidInterval);
            }
        }, 500);
    }

    $('#last__button').on('click', function() {
        closeLastModal();
        $('.bye-bye').snowfall({minSize: 2, maxSize: 7, flakeCount: 15, maxSpeed: 0.5});
        $('.bye-bye').fadeIn(800);
        setTimeout(() => { $('.bye-bye--text').fadeIn(800); }, 1600);
    });
    
    // start
    setTimeout(() =>{
        $('.loading__title').fadeIn(800);
        setTimeout(() => { $('.loading__footer__img').fadeIn(800); }, 400);
        setTimeout(() => {
            $('.loading__title').fadeOut(800);
            setTimeout(() => {
                $('.loading__footer__img').fadeOut(800);
            }, 400);
    
            setTimeout(() => {
                $('.loading__chest').fadeIn(800);
                setTimeout(() => {
                    $('.loading__chest__prompt').addClass('loading__chest__prompt--show');
                }, 1000);
            }, 1000);
        }, 3500);
    }, 300);

    $('.loading').snowfall({minSize: 2, maxSize: 7, flakeCount: 15, maxSpeed: 0.5});

});

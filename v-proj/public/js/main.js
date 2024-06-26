const swiper = new Swiper(".home-slide", {
    loop: true,
    keyboard: true,
    effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    speed: 1500,

    pagination: {
        el: '.slide__dots',
    },

    navigation: {
        nextEl: '.home-nav__button-next',
        prevEl: '.home-nav__button-prev',
    },

    autoplay: {
        delay: 5000,
    },
});

let homeSlides = document.querySelectorAll('.swiper-slide');

swiper.on('slideChange', function () {
    showHideAnimate(document.querySelectorAll('.anim-show-hide'));
});


const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
});

function animNum(el, numStart, numEnd, numTime = 190) {
    let e = document.querySelector(el);
    let interval = setInterval(() => {
        if (numStart >= numEnd) {
            clearInterval(interval);
        }

        e.innerHTML = new Intl.NumberFormat('ru-RU').format(Math.ceil(numStart));
        numStart = numStart + 1;
    }, numTime);
}

function changeHomeInfo(homeSlides, index) {
    let numValues = {
        'title': homeSlides[index].getAttribute('data-h-title'),
        'subtitle': homeSlides[index].getAttribute('data-h-subtitle'),
        'price': Number(homeSlides[index].getAttribute('data-h-price')),
        'length': Number(homeSlides[index].getAttribute('data-h-length')),
        'width': Number(homeSlides[index].getAttribute('data-h-width')),
        'height': Number(homeSlides[index].getAttribute('data-h-height')),
    };

    animNum('.home-price', numValues['price']-5, numValues['price']);
    animNum('.home-length', numValues['length']-6, numValues['length']);
    animNum('.home-width', numValues['width']-7, numValues['width']);
    animNum('.home-height', numValues['height']-8, numValues['height']);

    document.querySelector('.home-title').innerHTML = numValues['title'];
    document.querySelector('.home-subtitle').innerHTML = numValues['subtitle'];
}

function showHideAnimate(elements) {
    let len = elements.length;

    function showHide(act) {
        let i = 0;

        let interval = setInterval(() => {
            if (i < len) {
                if (act == 'hide') {
                    elements[i].classList.add('anim-hide');
                } else {
                    elements[i].classList.remove('anim-hide');
                }

                i++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    }

    showHide('hide');
    
    setTimeout(() => {
        showHide('show');
        changeHomeInfo(homeSlides, swiper.activeIndex);
    }, 1000);

}







// function a1() {
//     // el = document.querySelector('.category-menu-item-link').getBoundingClientRect();
//     let elem = document.elementFromPoint(x, y);

//     var parentPos = document.querySelector('.category-menu-nav').getBoundingClientRect(),
//     childrenPos = document.querySelector('.category-menu-item-link').getBoundingClientRect(),
//     relativePos = {};

//     relativePos.top = childrenPos.top - parentPos.top,
//     relativePos.right = childrenPos.right - parentPos.right,
//     relativePos.bottom = childrenPos.bottom - parentPos.bottom,
//     relativePos.left = childrenPos.left - parentPos.left;

//     console.log(relativePos);
// }








/*
ИДЕИ:
    - Почему выбирают нас
    - О нас
    - Галерея
    - 

СТРУКТУРА
Главная страница:
    - Главный блок
    - 

*/




/*
TODO: После завершения разработки:
    - Удалить все id __DEV_*
    - Удалить библиотеку Intro js
    - Удалить весь код в main.js под комментарием __DEV__
*/
















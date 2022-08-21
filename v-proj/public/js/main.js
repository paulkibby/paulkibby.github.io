const swiper = new Swiper(".swiper", {
    loop: true,
    keyboard: true,
    effect: 'fade',
    speed: 1500,

    pagination: {
        el: '.home-nav__dots',
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

function closeMenu() {
    document.querySelector('.menu__container').classList.remove('menu__container-show');
    document.querySelector('.menu__background').style = 'opacity: 0;';
    
    setTimeout(() => {
        document.querySelector('.menu').style = 'display: none;';
        
    }, 333);
}

function openMenu() {
    document.querySelector('.menu').style = 'display: block;';
    setTimeout(() => {
        document.querySelector('.menu__background').style = 'opacity: 1;';
        document.querySelector('.menu__container').classList.add('menu__container-show');
    }, 10);
}

function fadeIn(element) {
    let elements = document.querySelectorAll(element);
    elements.forEach((el) => {
        el.classList.remove('hide-display');
        el.classList.add('show-display');

        setTimeout(() => {
            el.classList.remove('hide-opacity');
            el.classList.add('show-opacity');
        }, 10);
    });
}

function fadeOut(element) {
    let elements = document.querySelectorAll(element);

    elements.forEach((el) => {
        el.classList.remove('show-opacity');
        el.classList.add('hide-opacity');

        setTimeout(() => {
            el.classList.remove('show-display');
            el.classList.add('hide-display');
        }, 333);
    });
}

function show(element) {
    let elements = document.querySelectorAll(element);
    elements.forEach((el) => {
        el.classList.remove('hide-display');
        el.classList.add('show-display');
        el.classList.remove('hide-opacity');
        el.classList.add('show-opacity');
    });
}

function hide(element) {
    let elements = document.querySelectorAll(element);

    elements.forEach((el) => {
        el.classList.remove('show-opacity');
        el.classList.add('hide-opacity');
        el.classList.remove('show-display');
        el.classList.add('hide-display');
    });
}

function homeMenuColor(color) {
    elements = document.querySelectorAll('.hcc');

    elements.forEach((e) => {
        e.style = 'color: ' + color + ';';
    });
}

function openHomeCatalog(index, element) {
    closeHomeCatalog(false);
    
    element.classList.add('menu-btn-active');
    fadeIn('.home-catalog');
    fadeIn(index);
    homeMenuColor('#FFFFFF');
}

function closeHomeCatalog(fade = true) {
    let elements = document.querySelectorAll('.category-menu-item-link');

    elements.forEach((e) => {
        e.classList.remove('menu-btn-active');
    });

    if (fade) {
        fadeOut('.home-catalog__body');
        fadeOut('.home-catalog');
    } else {
        hide('.home-catalog__body');
        hide('.home-catalog');
    }
    
    homeMenuColor('#171A20');
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
















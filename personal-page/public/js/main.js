const swiper = new Swiper(".last-images-slider", {
    // loop: true,
    slidesPerView: "auto",
    spaceBetween: 35,
    // keyboard: true,
    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    // speed: 1500,

    // pagination: {
    //     el: '.slide__dots',
    // },

    navigation: {
        nextEl: '#last-image-button-next',
        prevEl: '#last-image-button-prev',
    },

    // autoplay: {
    //     delay: 5000,
    // },
});

// const swiper2 = new Swiper('.projects-slider', {
//     allowTouchMove: false,
//     effect: 'fade',
// });

function changeTab(tabsGroup, tabIndex, activeElement) {
    let tabs = document.querySelectorAll(tabsGroup + ' > .tabs__item');

    tabs.forEach((element) => {
        element.classList.remove('tabs__item_active');
    });

    activeElement.classList.add('tabs__item_active');
    swiper2.slideTo(tabIndex-1, 0);
}

// const swiper2 = new Swiper(".projects-slider", {
//     // slidesPerView: "auto",
//     // spaceBetween: 35,
//     navigation: {
//         nextEl: '#projects-desktop-button-next',
//         prevEl: '#projects-desktop-button-prev',
//     },
// });

const swiper3 = new Swiper(".projects-web-slider", {
    slidesPerView: "auto",
    spaceBetween: 35,
    navigation: {
        nextEl: '#projects-web-button-next',
        prevEl: '#projects-web-button-prev',
    },
});

const swiper4 = new Swiper(".projects-desktop-slider", {
    slidesPerView: "auto",
    spaceBetween: 35,
    // navigation: {
    //     nextEl: '#projects-desktop-button-next',
    //     prevEl: '#projects-desktop-button-prev',
    // },
});


// Tabs

function KBTab(slides) {
    slides = document.querySelectorAll(slides + ' > .kb-slide');
    slides[0].classList.add('kb-active');
}

function KBOpenSlide(slides, openslide) {
    slides = document.querySelectorAll(slides + ' > .kb-slide');
    
    slides.forEach(element => {
        element.classList.remove('kb-active');
        element.classList.replace('show', 'hide');
        if (element.getAttribute('data-kb-slide') == openslide) {
            element.classList.add('kb-active');
            return;
        }
    });
}

KBTab('.kb-slides');























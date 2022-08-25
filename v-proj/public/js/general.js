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

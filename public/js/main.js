function imgSizes(element, src) {
    let img = new Image();
    img.onload = function() {
        element.parentElement.setAttribute('data-pswp-width', this.width)
        element.parentElement.setAttribute('data-pswp-height', this.height)
    };

    img.src = src;
}

let imgs = document.querySelectorAll('.pswp-i-img');
imgs.forEach(function(element) {
    imgSizes(element, element.src);
});

// ---

const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    waitTransitions: true,
    catchFocus: false
});

// ---

setTimeout(() => {
    let styleEl = document.createElement('style');
    styleEl.innerHTML = "* { color-scheme: dark; }";
    document.querySelector('head').append(styleEl);
}, 1100);

const it = document.querySelectorAll('.kba');

let len = it.length;
let i = 0;

setTimeout(() => {
    let interval = setInterval(() => {
        if (i < len) {
            it[i].classList.add('kba-r');
            i++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}, 600);

// ---

document.querySelector('#close-notice').addEventListener('click', () => {
    document.querySelector('.coming-soon').classList.replace('notice-show', 'notice-hide');
});

setTimeout(() => {
    document.querySelector('.coming-soon').classList.replace('n-hide', 'notice-show');
}, 2200);

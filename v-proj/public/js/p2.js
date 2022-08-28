const ps_1 = new Swiper('#ps_1', {
    allowTouchMove: false,
    autoHeight: true,
    effect: 'fade',
});

function selectTab() {

}

ps_1.on('slideChange', function () {
    let tabs = document.querySelector('#ps_1_tabs');
    ps_1.activeIndex
});


function changeTab(tabsGroup, tabIndex, activeElement) {
    let tabs = document.querySelectorAll(tabsGroup + ' > .tabs__item');

    tabs.forEach((element) => {
        element.classList.remove('tabs__item_active');
    });

    activeElement.classList.add('tabs__item_active');
    ps_1.slideTo(tabIndex, 0);
}

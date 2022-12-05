import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

new Swiper('.swiper', {
    loop: true,
    centerSlide: 'true',
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/// show header menu 
const openMenu = document.querySelector('.icon-menu');
const bodyMenu = document.querySelector('.menu__body');

openMenu.addEventListener('click', () => {
    if(openMenu.classList.contains('active') || bodyMenu.classList.contains('active')) {
        openMenu.classList.remove('active');
        bodyMenu.classList.remove('active');
    }else{
        openMenu.classList.add('active');
        bodyMenu.classList.add('active');
    }
})
const swiper = new Swiper('.swiper', {
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    allowTouchMove: false, // блокировка пользовательского управления
    autoplay: {
        delay: 3000,
    },
    effect: "fade",
});
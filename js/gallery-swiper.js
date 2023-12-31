const swiper = new Swiper('.gallery-swiper', {
    loop: true,
    slidesPerView:2.5,
    spaceBetween: 32,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay:{
        delay: 2000,
    },
    speed: 800,
});

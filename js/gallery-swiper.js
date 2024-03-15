const swiper = new Swiper('.gallery-swiper', {
    loop: true,
    slidesPerView:2.5,
    spaceBetween: 32,
    autoplay:{
        delay: 2000,
    },
    speed: 800,
});

document.getElementById('openMenu').addEventListener('click', function() {
    document.getElementById('menuOverlay').style.display = 'block';
    document.body.classList.add('menu-open');
});

document.getElementById('closeMenu').addEventListener('click', function() {
    document.getElementById('menuOverlay').style.display = 'none';
    document.body.classList.remove('menu-open');
});


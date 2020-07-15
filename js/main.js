(function(){
    const header = document.querySelector('.header');
    const header__item = document.querySelector('.header__item');
    const headerList = document.querySelector('.header__list');

    const mobileMenu = $('.mobile-menu');
    const headerNav = $('.header__nav');

    window.onscroll = () => {
        if (window.pageYOffset > 30) {
            header.classList.add('header__active');
            header__item.classList.add('header__item-active');
            headerList.classList.add('header__list__active');
        } else {
            header.classList.remove('header__active');
            header__item.classList.remove('header__item-active');
            headerList.classList.remove('header__list__active');
        }
    };

    mobileMenu.on('click', function() {
        headerNav.toggleClass('active');
    });
}());
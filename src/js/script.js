$(function () {
    $('.header__hamburger').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close');
    });
    $(document).ready(function(){
        $('.carousel__slider').slick({
            dots: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
        });
    });
});



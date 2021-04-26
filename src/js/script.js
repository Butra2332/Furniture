$(function () {
    $('.header__hamburger').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close');
    });
    $('.carousel__slider').slick({
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    });

    $('.contact-slider').slick({ 
        dots: true, 
        slidesToShow: 1,
        slideToScroll: 1,
        arrows: false
    });
    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });
    
    $('[data-fancybox]').fancybox({
        protect: true
    });   
});















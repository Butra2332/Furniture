$(function () {
  $('.header__hamburger').on('click', function() {
      $('.rightside-menu').removeClass('rightside-menu--close');
  });
  $('.rightside-menu__close').on('click', function() {
      $('.rightside-menu').addClass('rightside-menu--close');
  });


  $('.header__hamburger-menu').on('click', function() {
      $('.menu').toggleClass('menu--open');
  });
  


  $('.carousel__slider').slick({
      dots: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false
  });

  $('.contact-slider').slick({ 
      slidesToShow: 1,
      slideToScroll: 1,
      dots: true, 
      arrows: false,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 1,
            slideToScroll: 10,
          }
        },
        {
          breakpoint: 1511,
          settings: {
            slidesToShow: 8,
            slideToScroll: 8,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slideToScroll: 4,
          }
        },
        {
          breakpoint: 841,
          settings: {
            slidesToShow: 3,
            slideToScroll: 3,
          }
        },
        {
          breakpoint: 551,
          settings: {
            slidesToShow: 2,
            slideToScroll: 2,
          }
        },
        {
          breakpoint: 376,
          settings: {
            slidesToShow: 1,
            slideToScroll: 1,
          }
        },
        
      ]
  });

  $('.article-slider__box').slick({ 
      prevArrow: '<button type="button" class="slick-prev"><img src="icon/left_arrow.svg" alt="arrow"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icon/right_arrow.svg" alt="arrow"></button>',
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















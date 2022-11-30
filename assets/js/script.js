$(function () {
  'use strict';

  // Menu fix

  var navtop = $('#main_menu').offset().top;

  $(window).scroll(function () {

    var navscroll = $(this).scrollTop();

    if (navscroll > navtop) {
      $('#main_menu').addClass('fix_nav');
    } 
    else {
      $('#main_menu').removeClass('fix_nav');
    }
  });

  // venobox

  $('.venobox').venobox();

  // Bact to Top

  var footer = $('#footer').offset().top;

  $('.backtotop').click(function () {

    $('html,body').animate({
      scrollTop: 0,
    }, 3000);

  });

  $('.backtodown').click(function () {
    
    $('html,body').animate({
      scrollTop: footer,
    }, 3000);

  });


  // Slider 

  $('.banner_slider').slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      vertical:true,
      verticalSwiping:true,
      cssEase: 'linear',
      nextArrow: '<i class="fas fa-chevron-down banner_down"></i>',
      prevArrow: '<i class="fas fa-chevron-up banner_up"></i>',
      responsive: [
        {
          breakpoint: 1101,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:false,
            verticalSwiping:false,
          }
        }
      ]
  });

  $('.client_slider').slick({
      dots: false,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      responsive: [
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        }
      ]
  });

  $('.testi_slider_content').slick({
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      nextArrow: '<i class="fas fa-chevron-right testi_down"></i>',
      prevArrow: '<i class="fas fa-chevron-left testi_up"></i>',
      responsive: [
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });

  // // Product Navbar

  var containerEl = document.querySelector('.product_list');

  var mixer = mixitup(containerEl);

  
  

});
$(function () {

  //--- global ---

  //1. Header size on scroll
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (window.innerWidth > 991) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $('.header').addClass('header-mini');
      } else {
        $('.header').removeClass('header-mini');
      }
    } else {
      $('.header').removeClass('header-mini');
    }
  }

  //2. Menu
  $('.menu__btn').on('click', function () {
    $('html').toggleClass('menu-opened');
    $('.menu__list').toggleClass('active');
    $('.menu__btn').toggleClass('active');
  });


  // --- main page ---

  //1. Top slider (slick)
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 5000,
  });

  //2. Clock
  const $clock = $('.promo__clock');

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  }

  function initializeClock($clock, endtime) {
    const $days = $clock.find('.promo__days');
    const $hours = $clock.find('.promo__hours');
    const $minutes = $clock.find('.promo__minutes');
    const $seconds = $clock.find('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      $days.text(t.days);
      $hours.text(('0' + t.hours).slice(-2));
      $minutes.text(('0' + t.minutes).slice(-2));
      $seconds.text(('0' + t.seconds).slice(-2));

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $clock.attr('data-time');
  initializeClock($clock, deadline);



  //shop
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
      $('input[name="min_price"]').val(data.from);
      $('input[name="max_price"]').val(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
      $('input[name="min_price"]').val(data.from);
      $('input[name="max_price"]').val(data.to);
    },
  });



  $('.shop-content__filter-btn ').on('click', function () {
    $('.shop-content__filter-btn ').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });


 




  //open filter at page shop on small screens
  $('.shop__filter-btn').on('click', function () {
    $('body').toggleClass('menu-opened');
    $('.shop__filters').slideToggle();
  });



  // $('.filter__btn').on('click', function () {
  //   $('.shop__filters').slideToggle();
  // });

  //change display of shop content
  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
    $('.shop-content__inner').addClass('shop-content__nogrid');
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
    $('.shop-content__inner').removeClass('shop-content__nogrid');
  });




  

  //slider on page-blog
  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="7px" height="14px" viewBox="0 0 7 14" version="1.1">< g ><path d="M 5.25 12.25 C 5.027344 12.25 4.800781 12.164062 4.632812 11.992188 L 0.257812 7.617188 C -0.0859375 7.277344 -0.0859375 6.722656 0.257812 6.382812 L 4.632812 2.007812 C 4.972656 1.664062 5.527344 1.664062 5.867188 2.007812 C 6.210938 2.347656 6.210938 2.902344 5.867188 3.242188 L 2.113281 7 L 5.871094 10.757812 C 6.210938 11.097656 6.210938 11.652344 5.871094 11.996094 C 5.699219 12.164062 5.472656 12.25 5.25 12.25 Z M 5.25 12.25 " /> </></svg ></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="7px" height="14px" viewBox="0 0 7 14" version="1.1">< g ><path d="M 1.75 12.25 C 1.527344 12.25 1.300781 12.164062 1.132812 11.992188 C 0.789062 11.652344 0.789062 11.097656 1.132812 10.757812 L 4.890625 7 L 1.132812 3.242188 C 0.789062 2.902344 0.789062 2.347656 1.132812 2.003906 C 1.472656 1.664062 2.027344 1.664062 2.367188 2.003906 L 6.742188 6.378906 C 7.085938 6.722656 7.085938 7.277344 6.742188 7.617188 L 2.367188 11.992188 C 2.199219 12.164062 1.972656 12.25 1.75 12.25 Z M 1.75 12.25 " /></></svg ></button>',
    infinite: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 3000
  });


  //slider on page product
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1051,
        settings: {
          draggable: true,
        }
      },
    ]
  });

  //product-tabs
  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });


  $('.select-style, .product-one__num').styler();



  //--- plugins ---

  //1. Rateyo
  $(".star").rateYo({
    readOnly: true,
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"><path d="m8.102.555-2.04 4.14-4.566.664C.68 5.477.352 6.49.946 7.066l3.3 3.22-.781 4.546c-.14.82.726 1.438 1.45 1.05L9 13.739l4.086 2.145c.723.383 1.59-.23 1.45-1.051l-.782-4.547 3.3-3.219c.594-.578.266-1.59-.55-1.707l-4.567-.664L9.899.555c-.367-.735-1.425-.746-1.796 0Zm0 0" style="stroke:none;fill-rule:nonzero;fill-opacity:1"/></svg>',
  });

  //2. Fancybox - for video and photos
  Fancybox.bind("[data-fancybox]", {
  });

  //3. AOS- animations
  AOS.init({
    disable: function () {
      let maxWidth = 1200;
      return window.innerWidth < maxWidth;
    },
    startEvent: 'DOMContentLoaded',
    offset: 100,
    delay: 200,
    duration: 1500,
  });

  //4. Map
  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

});


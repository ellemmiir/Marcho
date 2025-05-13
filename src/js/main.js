$(function () {

  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector('header').classList.add('header-mini');
    } else {
      document.querySelector('header').classList.remove('header-mini');
    }
  }


  //shop
   $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });



  $('.shop-content__filter-btn ').on('click', function () {
    $('.shop-content__filter-btn ').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  //open filter at page shop on small screens
  $('.shop__filter-btn').on('click', function () {
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


  //main page
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });


  //main slider
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 5000,
  });


  $(".star").rateYo({
    readOnly: true,
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"><path d="m8.102.555-2.04 4.14-4.566.664C.68 5.477.352 6.49.946 7.066l3.3 3.22-.781 4.546c-.14.82.726 1.438 1.45 1.05L9 13.739l4.086 2.145c.723.383 1.59-.23 1.45-1.051l-.782-4.547 3.3-3.219c.594-.578.266-1.59-.55-1.707l-4.567-.664L9.899.555c-.367-.735-1.425-.746-1.796 0Zm0 0" style="stroke:none;fill-rule:nonzero;fill-opacity:1"/></svg>',
  });


  //main page - clock
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);


  

  Fancybox.bind("[data-fancybox]", {
  });

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

});


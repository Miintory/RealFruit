$(function () {
  var swiper1 = new Swiper(".sec2_slide1", {
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: {
      nextEl: ".next1",
      prevEl: ".prev1",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
  var swiper2 = new Swiper(".sec2_slide2", {
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: {
      nextEl: ".next2",
      prevEl: ".prev2",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
  var swiper3 = new Swiper(".sec4_slide1", {
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: {
      nextEl: ".next3",
      prevEl: ".prev3",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  $(".ham").click(function () {
    $(".hd .gnb").toggleClass("on");
  });
  $(window).resize(function () {
    setTimeout(function () {
      $(".hd .gnb").removeClass("on");
    }, 1000);
  });
});

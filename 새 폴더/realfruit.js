$(function () {
  var swiper1 = new Swiper(".sec2_slide1", {
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: {
      nextEl: ".next1",
      prevEl: ".prev1",
    },
  });
  var swiper2 = new Swiper(".sec2_slide2", {
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: {
      nextEl: ".next2",
      prevEl: ".prev2",
    },
  });
  var swiper3 = new Swiper(".sec4_slide1", {
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: {
      nextEl: ".next3",
      prevEl: ".prev3",
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

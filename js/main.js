"use strict";

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}

// меню бургер -----------------------

const burgerMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const toggleMenu = function () {
  headerMenu.classList.toggle("_active");
  burgerMenu.classList.toggle("_active");
};

if (burgerMenu) {
  burgerMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    burgerMenu.classList.toggle("_active");
    headerMenu.classList.toggle("_active");
  });
}

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_headerMenu = target == headerMenu || headerMenu.contains(target);
  const its_burgerMenu = target == burgerMenu;
  const headerMenu_is_active = headerMenu.classList.contains("_active");

  if (!its_headerMenu && !its_burgerMenu && headerMenu_is_active) {
    toggleMenu();
  }
});

// -------main-slider -------- Swiper
const mainSlider = document.querySelector(".main-slider__body");

const mainSwiper = new Swiper(mainSlider, {
  //   // If we need pagination
  pagination: {
     el: ".swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".main-slider__body .swiper-button-next",
    prevEl: ".main-slider__body .swiper-button-prev"
  },
});

// ------------------------------------------

const footerArrow = document.querySelector('.footer__arrow');
const footerInfoList = document.querySelector('.footer-info__list');

footerArrow.addEventListener('click', function(){
  footerArrow.classList.toggle('_active');
  footerInfoList.classList.toggle('_active');
})
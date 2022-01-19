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
// console.log(burgerMenu);
// console.log(headerMenu);

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
    // el: ".slider-content__counts",
    type: "fraction",
    // clicable: true,
    // renderFraction: function (currentClass, totalClass) {
    //   return '0<span class="' + currentClass + '"></span>' + '/' +
    //   '0<span class="' + totalClass + '"></span>';
    // },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".main-slider__body .swiper-button-next",
    prevEl: ".main-slider__body .swiper-button-prev"
  },

  // Pagination fraction

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});

// const categorySlider = document.querySelector(".category-slider");

// let categorySwiper;

// function mobileSlider() {
//   if (window.innerWidth <=767 && categorySlider.dataset.mobile == 'false') {
//     categorySwiper = new Swiper(categorySlider, {
//       slidesPerView: 1.5,
//       loop: true,
//       // slideBetween: 50,
//       pagination: {
//         el: '.swiper-pagination',
//         // type: 'fraction',
//         // type: 'bullets',
//         clickable: true,
//         dynamicBullets: true,
//       },
//       breakpoints: {
//         480: {
//           slidesPerView: 2.5,
//         }
//       }
//       // navigation: {
//       //   nextEl: '.swiper-button-next',
//       //   prevEl: '.swiper-button-prev',
//       // },
//     }); 

//     categorySlider.dataset.mobile = "true";
//   }

//   if (window.innerWidth > 767) {
//     categorySlider.dataset.mobile = "false";

//     if (categorySlider.classList.contains('swiper-initialized')) {
//       categorySwiper.destroy();
//     }

    
//   }
// }
// mobileSlider();

// window.addEventListener('resize', () => {
//   mobileSlider();
// });


  //   if (window.innerWidth <= 767 && categorySlider.dataset.mobile == "false") {
  //     
        // breakpoints: {
        //   480: {
        //     slidesPerView: 2.5,
        //   }
        // }
  //     });
  //     categorySlider.dataset.mobile = "true";
// }

//   if (window.innerWidth > 767) {
//     categorySlider.dataset.mobile = "false";

//     // categorySlider.destroy();
//   }
// }
// // mobileSlider();

// window.addEventListener('resize', () => {
//   mobileSlider();
// });

// -----------------------------------------

let area = document.querySelector('.form__textarea');
let areaPlaceholder = area.getAttribute("placeholder");
let newAreaPlaceholder = areaPlaceholder.split('').splice(-1, 1)[0];

area.hasAttribute('placeholder');

// areaPlaceholder = areaPlaceholder.spliе(', ');

console.log(area);
console.log(area.hasAttribute('placeholder'));
console.log(area.getAttribute('placeholder'));
console.log(areaPlaceholder.split('').splice(-1, 1));
console.log(newAreaPlaceholder);

console.log(areaPlaceholder);

// ------------------------------------------

const footerArrow = document.querySelector('.footer__arrow');
const footerInfoList = document.querySelector('.footer-info__list');

footerArrow.addEventListener('click', function(){
  footerArrow.classList.toggle('_active');
  footerInfoList.classList.toggle('_active');
})
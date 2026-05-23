import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

var swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Keyboard],

  slidesPerView: 1,
  spaceBetween: 16,

  mousewheel: true,
  keyboard: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

var swiper2 = new Swiper('.mySwiper2', {
  modules: [Navigation,  Keyboard],
  slidesPerView: 1,
  spaceBetween: 16,
  keyboard: true,
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 10 },
    1024: { slidesPerView: 4, spaceBetween: 20 },
  },
});

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  mousewheel: true,
  keyboard: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

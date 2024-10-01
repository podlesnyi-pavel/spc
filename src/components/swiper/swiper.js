// eslint-disable-next-line
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    768: {
      autoplay: false,
      pagination: false,
      simulateTouch: false,
      spaceBetween: 0,
    },
  },
});

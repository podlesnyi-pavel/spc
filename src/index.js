'use strict';

import './index.html';
import './styles/main.scss';
import './components/swiper/swiper';

console.log('Hello!');

const swiperWrapper = document.querySelector('.swiper__wrapper');
const brandsButton = document.querySelector(
  '.brands-section__show-more-button',
);
const textBrandsButton = brandsButton.querySelector('.show-more-button__text');

brandsButton.addEventListener('click', function () {
  swiperWrapper.classList.toggle('swiper__wrapper--show-all');

  if (swiperWrapper.classList.contains('swiper__wrapper--show-all')) {
    textBrandsButton.textContent = 'Скрыть';
    brandsButton.classList.add(
      'show-more-button--active',
      'brands-section__show-more-button--active',
    );
  } else {
    textBrandsButton.textContent = 'Показать все';
    brandsButton.classList.remove(
      'show-more-button--active',
      'brands-section__show-more-button--active',
    );
  }
});

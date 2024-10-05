'use strict';

import './index.html';
import './styles/main.scss';
import './components/swiper/swiper';
import './components/modal/modal';

console.log('Hello!');

const burgerMenu = document.getElementById('header__burger-menu');
const asideMenu = document.querySelector('.aside-menu');
const asideMenuCloseButton = document.querySelector(
  '.aside-menu__close-button',
);

burgerMenu.addEventListener('click', function () {
  asideMenu.classList.add('aside-menu--open');
});

asideMenuCloseButton.addEventListener('click', function () {
  asideMenu.classList.remove('aside-menu--open');
});

// show-more-buttons with sliders =========================
const swiperWrappers = document.querySelectorAll('.swiper__wrapper');

const showMoreButtonsSection = document.querySelectorAll(
  '.show-more-button--section',
);

const textShowMoreButtonsSection = document.querySelectorAll(
  '.show-more-button__text',
);

for (let i = 0; i < showMoreButtonsSection.length; i++) {
  showMoreButtonsSection[i].addEventListener('click', function () {
    swiperWrappers[i].classList.toggle('swiper__wrapper--show-all');

    showMoreButtonsSection[i].classList.toggle(
      'show-more-button--active',
      'show-more-button--section--active',
    );

    if (swiperWrappers[i].classList.contains('swiper__wrapper--show-all')) {
      textShowMoreButtonsSection[i].textContent = 'Скрыть';

      const screenWidth = window.innerWidth;
      const children = swiperWrappers[i].children;
      const slidehHight = children[0].offsetHeight;
      const gap = 16;
      const elementByLine = screenWidth >= 1440 ? 4 : 3;
      const lines = Math.ceil(children.length / elementByLine);
      const swiperWrapperHeight = lines * slidehHight + lines * gap - gap;

      swiperWrappers[i].style.maxHeight = `${swiperWrapperHeight}px`;
    } else {
      textShowMoreButtonsSection[i].textContent = 'Показать все';
      swiperWrappers[i].style.removeProperty('max-height');
    }
  });
}
// ========================================================

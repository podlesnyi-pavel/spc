'use strict';

import './index.html';
import './styles/main.scss';
import './components/swiper/swiper';
import './components/modal/modal';

import { modal } from './components/modal/modal';

export const body = document.querySelector('.body');
const burgerMenu = document.getElementById('header__burger-menu');
const asideMenu = document.querySelector('.aside-menu');
const asideMenuCloseButton = document.querySelector(
  '.aside-menu__close-button',
);

export function closeAsideMenu() {
  asideMenu.classList.remove('aside-menu--open');
  body.classList.remove('body--no-scroll');
}

burgerMenu.addEventListener('click', function () {
  asideMenu.classList.add('aside-menu--open');
  body.classList.add('body--no-scroll');
});

asideMenuCloseButton.addEventListener('click', function () {
  closeAsideMenu();
});

asideMenu.addEventListener('click', function (event) {
  if (event.target.classList.contains('aside-menu')) {
    closeAsideMenu();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeAsideMenu();
  }
});

// show-more-buttons with sliders =========================
// если появится 4й слайдер с кнопкой showMoreButton должно все сломаться, не сразу увидел 3й слайдер без кнопки
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
    showMoreButtonsSection[i].classList.toggle('show-more-button--active');

    showMoreButtonsSection[i].classList.toggle(
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

const formsModal = modal.querySelectorAll('.form--modal');

for (const form of formsModal) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.reset();
  });
}

'use strict';

import './index.html';
import './styles/main.scss';
import './components/swiper/swiper';

console.log('Hello!');

const burgerMenu = document.getElementById('header__burger-menu');
const asideMenu = document.querySelector('.aside-menu');
const asideMenuCloseButton = document.querySelector(
  '.aside-menu__close-button',
);

function setAriaHidden(elem, bool) {
  elem.ariaHidden = bool;
}

document.addEventListener('DOMContentLoaded', function () {
  const desctopWidth = 1120;
  if (window.innerWidth < desctopWidth) {
    setAriaHidden(asideMenu, true);
  }
});

burgerMenu.addEventListener('click', function () {
  asideMenu.classList.add('aside-menu--open');
  setAriaHidden(asideMenu, false);
});

asideMenuCloseButton.addEventListener('click', function () {
  asideMenu.classList.remove('aside-menu--open');
  setAriaHidden(asideMenu, true);
});

const swiperWrapper = document.querySelector('.swiper__wrapper');
const brandsButton = document.querySelector(
  '.brands-section__show-more-button',
);
const textBrandsButton = brandsButton.querySelector('.show-more-button__text');

brandsButton.addEventListener('click', function () {
  swiperWrapper.classList.toggle('swiper__wrapper--show-all');

  brandsButton.classList.toggle(
    'show-more-button--active',
    'brands-section__show-more-button--active',
  );

  if (swiperWrapper.classList.contains('swiper__wrapper--show-all')) {
    textBrandsButton.textContent = 'Скрыть';
  } else {
    textBrandsButton.textContent = 'Показать все';
  }
});

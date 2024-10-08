const shodModalButtons = document.querySelectorAll('[data-type-modal]');
export const modal = document.querySelector('.modal');
const modalCloseButton = modal.querySelector('.modal__close-btn');
const modalTitle = modal.querySelector('.modal__page-title');

import { closeAsideMenu } from '~/index.js';
import { body } from '~/index.js';

function closeModal() {
  modal.classList.remove('modal--open');
  body.classList.remove('body--no-scroll');

  // сделал так пока чтоб не ломалось при закрытии aside-menu на esc
  if (currentFormModal) {
    currentFormModal.classList.remove('form--modal--is-show');
  }
}

let currentFormModal;

for (const button of shodModalButtons) {
  button.addEventListener('click', function () {
    function showFormByType(typeForm) {
      currentFormModal = modal.querySelector(`.form--${typeForm}`);
      currentFormModal.classList.add('form--modal--is-show');
    }

    closeAsideMenu();

    function setModalTitle(title) {
      modalTitle.textContent = title;
    }

    modal.classList.add('modal--open');
    body.classList.add('body--no-scroll');

    switch (button.dataset.typeModal) {
      case 'call-order':
        showFormByType('call-order');
        setModalTitle(button.dataset.modalTitle);
        break;

      case 'feedback':
        showFormByType('feedback');
        setModalTitle(button.dataset.modalTitle);
        break;

      default:
        break;
    }
  });
}

modalCloseButton.addEventListener('click', function () {
  closeModal();
});

modal.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal')) {
    closeModal();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

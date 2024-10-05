const callButtons = document.querySelectorAll('[data-type-modal]');
const modal = document.querySelector('.modal');
const modalCloseButton = modal.querySelector('.modal__close-btn');
const modalTitle = modal.querySelector('.modal__page-title');

function closeModal() {
  modal.classList.remove('modal--open');
  currentFormModal.classList.remove('form--modal--is-show');
}

let currentFormModal;

for (const button of callButtons) {
  button.addEventListener('click', function () {
    function showFormByType(typeForm) {
      currentFormModal = modal.querySelector(`.form--${typeForm}`);
      currentFormModal.classList.add('form--modal--is-show');
    }

    function setModalTitle(title) {
      modalTitle.textContent = title;
    }

    modal.classList.add('modal--open');

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

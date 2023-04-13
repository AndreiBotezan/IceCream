(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtns: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });
  const submitBtn = document.querySelector('.submit-form-button');
  submitBtn.addEventListener('click', () => {
    toggleModal();
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

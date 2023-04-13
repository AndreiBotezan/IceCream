(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-location-modal-open]'),
    closeModalBtn: document.querySelector('[data-location-modal-close]'),
    modal: document.querySelector('[data-location-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('location-modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const contactsModalRefs = {
    openModalBtn: document.querySelector('[data-contacts-modal-open]'),
    closeModalBtn: document.querySelectorAll('[data-contacts-modal-close]'),
    modal: document.querySelector('[data-contacts-modal]'),
    form: document.querySelector('.franchise-modal-form'),
  };

  contactsModalRefs.openModalBtn.addEventListener('click', toggleModal);

  for (const btn of contactsModalRefs.closeModalBtn) {
    btn.addEventListener('click', closeModal);
  }

  function toggleModal() {
    document.body.classList.toggle('contacts-modal-open');
    contactsModalRefs.modal.classList.toggle('is-hidden');
  }

  function closeModal() {
    document.body.classList.remove('contacts-modal-open');
    contactsModalRefs.modal.classList.add('is-hidden');
  }
})();

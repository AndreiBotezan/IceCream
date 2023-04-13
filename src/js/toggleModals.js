function toggleModals(id) {
  document.getElementById(id).classList.toggle('hidden-modal');
}

function showOverlay(id) {
  document.getElementById(id).classList.toggle('show-produc-info');
}

const mobileMenuBtns = document.querySelectorAll('.mobile-menu__item');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtns.forEach(item =>
  item.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
  })
);

function buyNowBtn() {
  const modal = document.querySelector('[data-modal]');
  mobileMenu.classList.remove('is-open');
  modal.classList.toggle('is-hidden');
}

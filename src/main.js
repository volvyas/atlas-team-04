const menuEl = document.getElementById('mobile-menu');
const menuOpenButtons = document.querySelectorAll('.header-menu-icon');
const menuCloseButton = document.querySelector('[data-menu-close]');

function toggleMenu() {
  menuEl?.classList.toggle('is-open');
}

menuCloseButton?.addEventListener('click', toggleMenu);
menuOpenButtons.forEach(button => button.addEventListener('click', toggleMenu));

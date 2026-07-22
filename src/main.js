const menuEl = document.getElementById('mobile-menu');
const menuCloseButton = document.querySelector('[data-menu-close]');

function toggleMenu() {
  menuEl?.classList.toggle('is-open');
}

menuCloseButton?.addEventListener('click', toggleMenu);

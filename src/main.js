const bodyEl = document.body;
const menuEl = document.getElementById('mobile-menu');
const menuNavigationEl = document.querySelector('.menu-nav');
const overlayEl = document.getElementById('mobile-menu-overlay');
const menuOpenButtons = document.querySelectorAll('.header-menu-icon');
const menuCloseButton = document.querySelector('[data-menu-close]');

function toggleMenu() {
  menuEl?.classList.toggle('is-open');
  overlayEl?.classList.toggle('is-open');
}
function checkScroll() {
  const headerEl = document.querySelector('.header');
  if (window.scrollY > 0) {
    headerEl?.classList.add('is-scrolled');
  } else {
    headerEl?.classList.remove('is-scrolled');
  }
}
function handleOverlayClick(event) {
  if (event.target === overlayEl) {
    toggleMenu();
  }
}
function handleMenuNavigationClick(event) {
  const target = event.target;
  if (target.tagName === 'A' && menuEl?.classList.contains('is-open')) {
    toggleMenu();
  }
}
function handleEscapeKey(event) {
  if (event.key === 'Escape' && menuEl?.classList.contains('is-open')) {
    toggleMenu();
  }
}

function lockScroll() {
  if (menuEl?.classList.contains('is-open')) {
    bodyEl.style.overflow = 'hidden';
  } else {
    bodyEl.style.overflow = '';
  }
}

menuCloseButton?.addEventListener('click', () => {
  toggleMenu();
  lockScroll();
});
menuOpenButtons.forEach(button =>
  button.addEventListener('click', () => {
    toggleMenu();
    lockScroll();
  })
);
menuEl?.addEventListener('click', handleMenuNavigationClick);
window.addEventListener('scroll', checkScroll);
document.addEventListener('keydown', event => {
  handleEscapeKey(event);
  lockScroll();
});
overlayEl?.addEventListener('click', event => {
  handleOverlayClick(event);
  lockScroll();
});

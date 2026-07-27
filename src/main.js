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


emailjs.init({
  publicKey: "5zeWkXDw85VBguJij",
});

function showSuccessNotification() {
  document.querySelector('[data-email-success]')?.remove();

  const notificationEl = document.createElement('div');
  notificationEl.dataset.emailSuccess = '';
  notificationEl.setAttribute('role', 'status');
  notificationEl.setAttribute('aria-live', 'polite');
  notificationEl.textContent = 'Your application has been sent successfully!';

  Object.assign(notificationEl.style, {
    position: 'fixed',
    top: '24px',
    right: '16px',
    zIndex: '1000',
    width: 'min(360px, calc(100vw - 32px))',
    padding: '16px 20px',
    borderRadius: '12px',
    backgroundColor: '#4dc274',
    boxShadow: '0 8px 24px rgba(18, 20, 23, 0.2)',
    color: '#ffffff',
    fontWeight: '600',
    lineHeight: '1.5',
    opacity: '0',
    transform: 'translateY(-16px)',
    transition: 'opacity 250ms ease, transform 250ms ease',
  });

  document.body.append(notificationEl);

  requestAnimationFrame(() => {
    notificationEl.style.opacity = '1';
    notificationEl.style.transform = 'translateY(0)';
  });

  window.setTimeout(() => {
    notificationEl.style.opacity = '0';
    notificationEl.style.transform = 'translateY(-16px)';
    notificationEl.addEventListener(
      'transitionend',
      () => notificationEl.remove(),
      { once: true }
    );
  }, 4000);
}

document
  .getElementById("application-form")
  .addEventListener("submit", async e => {

    e.preventDefault();
    const selectedTeacher = e.currentTarget.querySelector(
      'input[name="teacher"]:checked'
    );

    await emailjs.send(
      "service_4zu15cg",
      "template_4zq3z4q",
      {
        from_name: document.getElementById('id_name').value,
        reply_to: document.getElementById('id_email').value,
        name: document.getElementById('id_name').value,
        email: document.getElementById('id_email').value,
        teacher: selectedTeacher?.value || 'Не обрано',
        phone: document.getElementById('id_phone').value,
        comment: document.getElementById('id_comment').value,
      }
    );

    showSuccessNotification();
    e.currentTarget.reset();
  });

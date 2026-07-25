const menuEl = document.getElementById('mobile-menu');
const overlayEl = document.getElementById('mobile-menu-overlay');
const menuOpenButtons = document.querySelectorAll('.header-menu-icon');
const menuCloseButton = document.querySelector('[data-menu-close]');

function toggleMenu() {
  menuEl?.classList.toggle('is-open');
  overlayEl?.classList.toggle('is-open');
}

menuCloseButton?.addEventListener('click', toggleMenu);
menuOpenButtons.forEach(button => button.addEventListener('click', toggleMenu));


emailjs.init({
  publicKey: "5zeWkXDw85VBguJij",
});

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
  });

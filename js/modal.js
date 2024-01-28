(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();


document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.hamburger-button');
  const menu = document.querySelector('.nav-menu');

  button.addEventListener('click', function () {
      menu.classList.toggle('show');
  });
});
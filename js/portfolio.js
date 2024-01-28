document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.hamburger-button');
  const menu = document.querySelector('.nav-menu');

  button.addEventListener('click', function () {
      menu.classList.toggle('show');
  });
});
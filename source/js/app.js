let main_nav = document.querySelector('.main-nav');
let open_button = document.querySelector('.header__open-button');
let close_button = document.querySelector('.main-nav__close-button');

open_button.addEventListener('click', function () {
  main_nav.classList.remove('main-nav--closed');
});

close_button.addEventListener('click', function () {
  main_nav.classList.add('main-nav--closed');
});


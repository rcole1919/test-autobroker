'use strict';

(function () {
  const open = document.querySelector('.header__menu');
  const close = document.querySelector('.menu__close');
  const menu = document.querySelector('.menu');

  const openMenu = evt => {
    evt.preventDefault();
    menu.classList.remove('menu-close');
    menu.classList.remove('hidden');
    menu.classList.add('menu-open');
    close.addEventListener('click', closeMenu);
  }

  const closeMenu = evt => {
    evt.preventDefault();
    menu.classList.remove('menu-open');
    menu.classList.add('menu-close');
    setTimeout(function () {
      menu.classList.add('hidden');
    }, 500);
    close.removeEventListener('click', closeMenu);
  }

  open.addEventListener('click', openMenu);
})();

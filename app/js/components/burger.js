let burger = () => {
  let header = document.querySelector('header');
  let menuBody = header.querySelector('.menu__body');
  let menuBurger = header.querySelector('.menu__burger');

  menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('_active');
    if (menuBurger.classList.contains('_active')) {
      menuBody.style.right = '0';
    } else {
      menuBody.style.right = '-100%';
    }
  });
}
burger();
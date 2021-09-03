(function () {
  const pageHeader = document.querySelector(`.page-header`);
  const headerToggle = pageHeader.querySelector(`.main-nav__toggle`);
  const mainNav = document.querySelector(`.page-header__main-nav`);
  const mainNavLinks = document.querySelectorAll(`.main-nav__item-link`);

  const popupToggle = () => {
    pageHeader.classList.toggle(`page-header--nav-opened`);
    headerToggle.classList.toggle(`main-nav__toggle--nav-opened`);
    mainNav.classList.toggle(`main-nav--nav-opened`);
  };

  const popupClose = () => {
    pageHeader.classList.remove(`page-header--nav-opened`);
    headerToggle.classList.remove(`main-nav__toggle--nav-opened`);
    mainNav.classList.remove(`main-nav--nav-opened`);
  };

  popupClose();

  headerToggle.addEventListener(`click`, popupToggle);

  mainNavLinks.forEach((link) => {
    link.addEventListener(`click`, popupClose);
  });
})();

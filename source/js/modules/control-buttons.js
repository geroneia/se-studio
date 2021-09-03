(function () {
  const body = document.querySelector(`#body`);
  const scrollLink = document.querySelector(`.go-top-button`);
  if (scrollLink) {
    window.addEventListener(`scroll`, () => {
      if (window.pageYOffset > document.documentElement.clientHeight) {
        scrollLink.classList.add(`go-top-button--active`);
      } else {
        scrollLink.classList.remove(`go-top-button--active`);
      }
    });

    const goTopHandler = (evt) => {
      evt.preventDefault();
      body.scrollIntoView({
        behavior: `smooth`,
        block: `start`,
      });
    };

    scrollLink.addEventListener(`click`, goTopHandler);
  }

  // Плавно подкручивает к разделу, если совершен переход по якорной ссылке с другой страницы или на той же
  const sectionScrolling = () => {
    if (window.location.hash) {
      const {hash} = window.location;
      const section = document.querySelector(hash);
      setTimeout(() => {
        window.scroll(0, 0);
        section.scrollIntoView({
          behavior: `smooth`,
          block: `start`,
        });
      }, 1);
    }
  };

  sectionScrolling();
  window.addEventListener(`hashchange`, sectionScrolling);

  const promoButton = document.querySelector(`.promo-button`);
  const scrollHeight = document.documentElement.clientHeight;

  if (promoButton) {
    promoButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      window.scrollTo({
        top: scrollHeight,
        behavior: `smooth`,
      });
    });
  }

})();

/* eslint-disable no-new */
/* eslint-disable no-undef */
(function () {
  if (document.querySelector(`.swiper`)) {
    new Swiper(`.image-slider`, {
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`
      },
      pagination: {
        el: `.swiper-pagination`,
        clickable: true,
        dynamicBullets: true,
      },
      slideToClickedSlide: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDoun: true,
      },
      watchOverflow: true,
      zoom: {
        maxRatio: 2,
        minRatio: 1,
      },
      ally: {
        enabled: true,
        prevSlideMessage: `Previous slide`,
        nextSlideMessage: `Next slide`,
        firstSlideMessage: `First slide`,
        lastSlideMessage: `Last slide`,
        notificationClass: `swiper-notification`,
        containerMessage: ``,
        containerRoleDescriprionMessage: ``,
        itemRoleDescriptionMessage: ``,
      },
    });
  }
})();

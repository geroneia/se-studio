const pageHeader=document.querySelector(".page-header"),headerToggle=pageHeader.querySelector(".main-nav__toggle"),mainNav=document.querySelector(".page-header__main-nav");pageHeader.classList.remove("page-header--nav-opened"),headerToggle.classList.remove("main-nav__toggle--nav-opened"),mainNav.classList.remove("main-nav--nav-opened"),headerToggle.addEventListener("click",function(){pageHeader.classList.toggle("page-header--nav-opened"),headerToggle.classList.toggle("main-nav__toggle--nav-opened"),mainNav.classList.toggle("main-nav--nav-opened")}),new Swiper(".image-slider",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},slideToClickedSlide:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDoun:!0},watchOverflow:!0,zoom:{maxRatio:2,minRatio:1},ally:{enabled:!0,prevSlideMessage:"Предыдущий слайд",nextSlideMessage:"Следующий слайд",firstSlideMessage:"Первый слайд",lastSlideMessage:"Последний слайд",notificationClass:"swiper-notification",containerMessage:"",containerRoleDescriprionMessage:"",itemRoleDescriptionMessage:""},breakpoints:{320:{zoom:{maxRatio:2,minRatio:1}},768:{zoom:{maxRatio:2,minRatio:1}}}});
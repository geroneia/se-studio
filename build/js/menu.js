const menu=()=>{const e=document.querySelector(".page-header"),a=e.querySelector(".main-nav__toggle"),n=document.querySelector(".page-header__main-nav");e.classList.remove("page-header--nav-opened"),a.classList.remove("main-nav__toggle--nav-opened"),n.classList.remove("main-nav--nav-opened"),a.addEventListener("click",function(){e.classList.toggle("page-header--nav-opened"),a.classList.toggle("main-nav__toggle--nav-opened"),n.classList.toggle("main-nav--nav-opened")})};export default menu;
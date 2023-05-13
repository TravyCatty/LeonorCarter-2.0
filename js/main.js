const burger = document.querySelector('.burger')
const mobileNav = document.querySelector('.navigation-mobile')
// active-mobile-nav
function active() {
  mobileNav.classList.toggle('active')
  burger.classList.toggle('cross')
}
burger.addEventListener('click', active)

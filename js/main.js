const burger = document.querySelector('.burger')
const mobileNav = document.querySelector('.navigation-mobile')
// active-mobile-nav
function active() {
  mobileNav.classList.toggle('active')
  console.log('adada')
}
burger.addEventListener('click', active)

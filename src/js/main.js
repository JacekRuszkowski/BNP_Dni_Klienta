const burgerBtn = document.querySelector('.nav__mobile-burger')
const closeBtn = document.querySelector('.nav__mobile-close')
const navMobile = document.querySelector('.nav__mobile')
const swup = new Swup()

console.log(swup);

const showNavigation = () => {
    navMobile.classList.add('show-nav')
    closeBtn.style.display = 'block'
}

const closeNavigation = () => {
    navMobile.classList.remove('show-nav')
    closeBtn.style.display = 'none'
}

burgerBtn.addEventListener('click', showNavigation)
closeBtn.addEventListener('click', closeNavigation)

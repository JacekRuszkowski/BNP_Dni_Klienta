const burgerBtn = document.querySelector('.nav__mobile-burger')
const closeBtn = document.querySelector('.nav__mobile-close')
const navMobile = document.querySelector('.nav__mobile')

const showNavigation = () => {
    navMobile.classList.add('show-nav')
    if (navMobile.classList.contains('show-nav')) {
        burgerBtn.style.display = 'none'
        closeBtn.style.display = 'block'
    } 
}

const closeNavigation = () => {
    navMobile.classList.remove('show-nav')
    burgerBtn.style.display = 'block'
    closeBtn.style.display = 'none'
}


burgerBtn.addEventListener('click', showNavigation)
closeBtn.addEventListener('click', closeNavigation)
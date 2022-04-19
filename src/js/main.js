///// VARIABLES //////
const burgerBtn = document.querySelector('.nav__mobile-burger')
const closeBtn = document.querySelector('.nav__mobile-close')
const navMobile = document.querySelector('.nav__mobile')
const popupRegister = document.querySelector('.popup')
const btnRegister = document.querySelectorAll('.day__register-btn')
const windowRegister = document.querySelector('.popup__window')
const registerCloseBtn = document.querySelector('.popup__close-btn')
const registerSendBtn = document.querySelector('.popup__send-btn')



//// FUNCTIONS //////
const showNavigation = () => {
    navMobile.classList.add('show-nav')
    closeBtn.style.display = 'block'
}

const closeNavigation = () => {
    navMobile.classList.remove('show-nav')
    closeBtn.style.display = 'none'
}

const showPopup = () => {
    popupRegister.classList.add('opacity')
    windowRegister.classList.add('transform')
}

const closePopup = () => {
    popupRegister.classList.remove('opacity')
    windowRegister.classList.remove('transform')
}



//// EVENTS /////

burgerBtn.addEventListener('click', showNavigation)
closeBtn.addEventListener('click', closeNavigation)

btnRegister.forEach(button => {
    button.addEventListener('click', showPopup)
})

registerCloseBtn.addEventListener('click', closePopup)
registerSendBtn.addEventListener('click', closePopup)


// Selectors
const menu_icon = document.querySelector('.hamburger-icon')
const navigation_links = document.querySelector('.navigation-links')
const landing = document.querySelector('.landing')
const body = document.querySelector('body')
const hero_wrapper = document.querySelector('.hero .wrapper')

// Events

// Menu click event
menu_icon.addEventListener('click', (e) => {

    hero_wrapper.classList.toggle('navigation-opened')
    body.classList.toggle('closed')
    menu_icon.classList.toggle('closed')
    navigation_links.classList.toggle('show')
    landing.classList.toggle('hide')
})

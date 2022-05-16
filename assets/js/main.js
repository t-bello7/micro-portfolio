const openBtn = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const closeBtn = document.querySelector('#close-btn');

openBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('visible')
})

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('visible')
})

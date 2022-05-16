const openBtn = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');

openBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('visible')
})

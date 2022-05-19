const openBtn = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const closeBtn = document.querySelector('#close-btn');
const contactForm = document.querySelector('#contact-form');
const errorMsg = document.querySelector('.error-msg');
const emailInput = document.querySelector('#email');

openBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('visible');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('visible');
});


contactForm.addEventListener('submit', e =>{

  let errorMsgs = [];
  
  if ( emailInput.value !== emailInput.value.toLowerCase()){
    errorMsgs.push('Your email should be in lower case')
  }

  if (errorMsgs.length > 0){
    e.preventDefault()
    errorMsg.innerText = errorMsgs.join('')
  }

})
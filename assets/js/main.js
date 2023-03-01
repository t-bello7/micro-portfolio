const openBtn = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const closeBtn = document.querySelector('#close-btn');
const navItems = document.querySelectorAll('.nav-item');
const contactForm = document.querySelector('#contact-form');
const errorMsg = document.querySelector('.error-msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const descInput = document.querySelector('#description');
const projectContainer = document.querySelector('.work-section');
const bodyContainer = document.querySelector('.body-container');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

const works = [
  {
    id: '001',
    featured: true,
    private: true,
    img_dir: './assets/img/space-hub.png',
    header: "Space Travellers' Hub",
    description: "The Space Travellers' Hub consists of Rockets, Missions, and the My Profile section. The application provides commercial and scientific space travel services by allowing users to book rockets and join selected space missions.",
    tags: ['Bootstrap5', 'ReactJS', 'Redux', 'React-Router'],
    content: "The Space Travellers' Hub consists of Rockets, Missions, and the My Profile section. The application provides commercial and scientific space travel services by allowing users to book rockets and join selected space missions.",
    liveLink: 'https://super-space-hub.netlify.app/',
    source: 'https://github.com/t-bello7/Micro-Space-Hub',
  },
  {
    id: '002',
    img_dir: './assets/img/finconnect-img.png',
    header: 'Finconnect',
    description: 'A listing web application for financial services',
    tags: ['Django', 'HTML', 'CSS', 'Python'],
    content: ' A full-stack web application to list financial services allowing the company to have a better record of financial partners and a platform for customers to easily access these financial services',
    liveLink: 'https://finconnect.herokuapp.com/',
    source: 'https://github.com/t-bello7/finconnect',
  },
  {
    id: '003',
    img_dir: './assets/img/todolist-img.png',
    header: 'Minimal Todo List',
    description: 'A minimal todo list application for keeping track of your tasks',
    tags: ['HTML', 'CSS', 'JavaScript'],
    content: 'A minimalist Todo list app that\'s everywhere you are. "To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    liveLink: 'https://t-bello7.github.io/micro-todo/',
    source: 'https://github.com/t-bello7/micro-todo',
  },
  {
    id: '004',
    img_dir: './assets/img/formula-two.jpeg',
    header: 'Formula One FanPage',
    description: 'A landing page for formula one fans',
    tags: ['CSS', 'HTML', 'Javascript'],
    content: 'A landing page for formula one fans',
    liveLink: 'https://t-bello7.github.io/micro-capstone-1/',
    source: 'https://github.com/t-bello7/micro-capstone-1',
  },
  {
    id: '005',
    img_dir: './assets/img/space-img.png',
    header: 'Space travel',
    description: 'A landing page for space travel and tourism.',
    tags: ['html', 'CSS', 'Javascript'],
    content: 'In a distant future humans would going on tours to the vast space. Ever felt the like travelling space, this is a landing page for space travel and toursim.',
    liveLink: 'https://t-bello7.github.io/space-travel/',
    source: 'https://github.com/t-bello7/space-travel',
  },
  {
    id: '006',
    img_dir: '../assets/img/hotel.png',
    header: 'Hotel Booking Application',
    description: 'Hotel is a website for booking hotels.',
    tags: ['CSS', 'HTML', 'React','JavaScript', 'Ruby', 'Ruby on Rails'],
    content: ' Hotel rooms are listed as available and can be reserved by users. Admin users are allowed to add and remove hotels from the database developers to build out the User Interface.',
    liveLink: 'https://hotel-frontend-rosy.vercel.app/',
    source: 'https://github.com/t-bello7/hotel-frontend',
  },
  {
    id: '007',
    img_dir: '../assets/img/sendchamp.png',
    header: 'SendChamp Pricing Page',
    description: 'A clone of the Sendchamp pricing page',
    content: 'SendChamp Pricig Page is a clone of the official SendChamp Pricing Page',
    tags: ['Typescript','React', 'Chakra UI'],
    source: 'https://github.com/t-bello7/sendchamp-page',
    liveLink: 'https://sendchamp-page.vercel.app',
  }
];

openBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('visible');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('visible');
})

navItems.forEach(item => (
  item.addEventListener('click', () => {
    mobileMenu.classList.toggle('visible');
  })
))

let contactDict = {};

if (JSON.parse(localStorage.getItem('contactDict')) === null) {
  contactDict = {
    name: '',
    email: '',
    description: '',
  };
} else {
  contactDict = JSON.parse(localStorage.getItem('contactDict'));
  descInput.value = JSON.parse(localStorage.getItem('contactDict')).description;
  nameInput.value = JSON.parse(localStorage.getItem('contactDict')).name;
  emailInput.value = JSON.parse(localStorage.getItem('contactDict')).email;
}

nameInput.addEventListener('change', (e) => {
  contactDict.name = e.target.value;
  localStorage.setItem('contactDict', JSON.stringify(contactDict));
});

emailInput.addEventListener('change', (e) => {
  contactDict.email = e.target.value;
  localStorage.setItem('contactDict', JSON.stringify(contactDict));
});

descInput.addEventListener('change', (e) => {
  contactDict.description = e.target.value;
  localStorage.setItem('contactDict', JSON.stringify(contactDict));
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const errorMsgs = [];

  if (emailInput.value !== emailInput.value.toLowerCase()) {
    errorMsgs.push('Your email should be in lower case');
  }

  if (errorMsgs.length > 0) {
    e.preventDefault();
    errorMsg.innerText = errorMsgs.join('');
    return
  }
  if (contactForm.coolname.value || contactForm.coolemail.value) {
    return false;
  }

  console.log('hey')
  contactForm.action = 'https://formspree.io/f/mwkywooe';
  contactForm.submit();
});

const renderDocuments = (arr, container) => {
  arr.forEach((element) => {
    if (element.featured === true) {
      container.innerHTML += `
          <div class="featured flex">
            <img  class="featured-img" src="${element.img_dir}" alt="featured-img" />
            <div>
              <h3 class="mg-1 ff-crete">${element.header}</h3>
              <p class="ff-inter">
                ${element.description}
              </p>
              <ul class="tag tag-feature mg-1 ff-inter flex">
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">  ${element.tags[0]}  </a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">  ${element.tags[1]}  </a></li>
                <li><a href="https://getbootstrap.com/">  ${element.tags[2]}  </a></li>
                <li><a href="https://www.ruby-lang.org/en/"> ${element.tags[3]}  </a></li>
              </ul>
              <button class="btn open-btn"  data-id=${element.id} type="button">See Project</button>
            </div>
        </div>
        `;
    } else {
      (
        container.innerHTML += `
        <div style="background-image:url(${element.img_dir})" class=" text-light project">
          <h2 class="mg-inline bg-text">${element.header}</h2>
          <p class="mg-1 mg-inline bg-text">
                ${element.description}
          </p>
          <ul class="mg-1 mg-inline flex tag tag-project">
            <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"> ${element.tags[0]} </a></li>
            <li><a href="https://getbootstrap.com/">  ${element.tags[1]} </a></li>
            <li><a href="https://www.ruby-lang.org/en/">  ${element.tags[2]} </a></li>
          </ul>
          <button class="btn btn-project open-btn" data-id=${element.id} type="button">See Project</button>
        </div>
        `);
    }
  });
};
renderDocuments(works, projectContainer);

const closeModal = () => {
  modalOuter.classList.remove('open');
  modalInner.innerHTML = '';
  bodyContainer.classList.remove('modalBlur');
  bodyContainer.classList.remove('disable-scroll');
};

window.addEventListener('load', () => {
  const buttons = projectContainer.querySelectorAll('.open-btn');

  const handleCardButtonClick = (e) => {
    const buttonId = e.currentTarget.dataset.id;
    const [data] = works.filter((item) => item.id === buttonId);
    modalInner.innerHTML += `
      <div class = "modal-header flex">
        <h3 class="mg-1 ff-crete"> ${data.header}</h3>
        <img id="close-btn" src="./assets/img/close-icon.png" alt="close-icon">
      </div>

      <ul class="mg-2 mg-inline flex tag tag-featured">
        <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">${data.tags[0]}</a></li>
        <li><a href="https://getbootstrap.com/"> ${data.tags[1]}</a></li>
        <li><a href="https://www.ruby-lang.org/en/"> ${data.tags[2]}</a></li>
      </ul>
      <div class="flex modal-content">
        <img class="mg-2" src="${data.img_dir}" alt="modal-image">
        <div>
          <p class="ff-inter">${data.content}</p>
          <div class="buttons mg-2 flex">
            <button class="btn flex btn-modal btn-source" onclick="window.open('${data.liveLink}')">See Live <img src="./assets/img/see-live-icon.png" alt="see-live-icon"> </button>
            <button class="btn flex btn-modal btn-source" onclick="window.open('${data.source}')">See Source <img src="./assets/img/github.png" alt="github"> </button>
          </div>
        </div>
      </div>
    `;
    bodyContainer.classList.add('disable-scroll');

    bodyContainer.classList.add('modalBlur');
    modalOuter.classList.add('open');
  };

  modalOuter.addEventListener('click', (e) => {
    const isOutside = e.target.closest('.modal-inner');
    if (!isOutside) {
      closeModal();
    }
    const closeBtn = e.target;
    if (closeBtn.id === 'close-btn') {
      closeModal();
    }
  });

  buttons.forEach((button) => {
    button.addEventListener('click', handleCardButtonClick);
  });
});

window.addEventListener('keydown', (event) => {
  if ((Object.values(modalOuter.classList).includes('open')) && (event.key === 'Escape')) {
    closeModal();
  }
});

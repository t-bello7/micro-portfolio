const openBtn = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const closeBtn = document.querySelector('#close-btn');
const contactForm = document.querySelector('#contact-form');
const errorMsg = document.querySelector('.error-msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const descInput = document.querySelector('#description');
const projectContainer = document.querySelector('.work-section');
const works = [
  {
    id: '001',
    featured: true,
    private: true,
    img_dir: './assets/img/varsity-img.png',
    header: 'Ecommerce Dashboard',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    tags: ['CSS', 'ReactJS', 'MaterialUI', 'Javascript'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveLink: 'https://varsity-admin.netlify.app/',
    source: '',
  },
  {
    id: '002',
    img_dir: './assets/img/finconnect-img.png',
    header: 'Finconnect',
    description: 'A listing web application for financial services',
    tags: ['Django', 'HTML', 'CSS', 'Python'],
    content: ' a full-stack web application to list financial services allowing the company to have a better record of financial partners and a platform for customers to easily access these financial services',
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
    liveLink: 'https://creer-pjt-105.herokuapp.com/',
    source: 'https://github.com/zuri-training/creer-be-pjt-105',
  },
  {
    id: '004',
    img_dir: './assets/img/formula-one.png',
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
];

openBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('visible');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('visible');
});
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
  const errorMsgs = [];

  if (emailInput.value !== emailInput.value.toLowerCase()) {
    errorMsgs.push('Your email should be in lower case');
  }

  if (errorMsgs.length > 0) {
    e.preventDefault();
    errorMsg.innerText = errorMsgs.join('');
  }
});

const renderDocuments = (arr, container) => {
  arr.forEach((element) => {
    if (element.featured === true) {
      container.innerHTML += `
          <div class="featured flex">
            <img src="${element.img_dir}" alt="featured-img" />
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
        <div class = "modal"> 
          <div class = "modal-header flex">
            <h3 class="mg-1 ff-crete">${element.header}</h3>
            <img id="close-btn" src="./assets/img/close-icon.png" alt="close-icon">
          </div>

          <ul class="mg-2 mg-inline flex tag tag-featured">
            <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"> ${element.tags[0]} </a></li>
            <li><a href="https://getbootstrap.com/">  ${element.tags[1]} </a></li>
            <li><a href="https://www.ruby-lang.org/en/">  ${element.tags[2]} </a></li>
          </ul>
          <div class="flex modal-content">
            <img class="mg-2" src="${element.img_dir}" alt="modal-image">
            <div>
              <p class="ff-inter">${element.content}</p>
              <div class = " buttons mg-2 flex">
                <button class="btn flex btn-modal" type="button" onclick="">See Live <img src="./assets/img/see-live-icon.png" alt="see-live-icon"> </button>
                <button class="btn flex btn-modal" type="button">See Source <img src="./assets/img/github.png" alt="github"> </button>
              </div>
            </div>
          </div>
        </div>
        `;
    } else {
      (
        container.innerHTML += `
        <div style="background-image:url(${element.img_dir})" class="mg-2 text-light project">
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
        <div class = "modal"> 
          <div class = "modal-header flex">
            <h3 class="ff-crete">${element.header}</h3>
            <img id="close-btn" src="./assets/img/close-icon.png" alt="close-icon">
          </div>

          <ul class="mg-4 flex tag tag-featured">
            <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"> ${element.tags[0]} </a></li>
            <li><a href="https://getbootstrap.com/">  ${element.tags[1]} </a></li>
            <li><a href="https://www.ruby-lang.org/en/">  ${element.tags[2]} </a></li>
          </ul>

          <div class="flex modal-content">
            <img class="mg-2" src="${element.img_dir}" alt="modal-image">
            <div class="">
              <p class="ff-inter">${element.content}</p>
              <div class = " buttons mg-2 flex">
                <a class="btn flex btn-modal btn-live"  onclick="window.open('${element.liveLink}')" type="button">See Live <img src="./assets/img/see-live-icon.png" alt="see-live-icon"> </a>
                <button class="btn flex btn-modal btn-source" onclick="window.open('${element.source}')">See Source <img src="./assets/img/github.png" alt="github"> </button>
              </div>
            </div>
          </div>
      </div>
        `);
    }
  });
};
renderDocuments(works, projectContainer);

projectContainer.addEventListener('click', (e) => {
  e.preventDefault();

  const modalBtn = e.target.closest('.open-btn');

  if (!modalBtn) return;

  let modal = modalBtn.parentNode.nextElementSibling;

  if (modal == null) {
    modal = modalBtn.parentNode.parentNode.nextElementSibling;
  }

  modal.classList.add('is-open');
  const closeBtn = modal.querySelector('#close-btn');

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('is-open');
  });
});

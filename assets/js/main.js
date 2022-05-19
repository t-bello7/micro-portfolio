const openBtn = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const closeBtn = document.querySelector('#close-btn');
const projectContainer = document.querySelector('.work-section');
const works = [
  {
    id: '001',
    featured: true,
    img_dir: './assets/img/img-placeholder-desktop.png',
    header: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    tags: ['css', 'html', 'bootstrap', 'ruby'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    id: '002',
    img_dir: './assets/img/modal-image.png',
    header: 'Profesional Art Printing Data',
    description: ` A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard`,
    tags: ['html', 'bootstrap', 'Ruby'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    id: '003',
    img_dir: './assets/img/project-img.png',
    header: 'Profesional Art Printing Data',
    description: ` A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard`,
    tags: ['html', 'bootstrap', 'Ruby'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',

  },
  {
    id: '004',
    img_dir: './assets/img/project-img.png',
    header: 'Profesional Art Printing Data',
    description: ` A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard`,
    tags: ['html', 'bootstrap', 'Ruby'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',

  },
  {
    id: '005',
    img_dir: './assets/img/project-img.png',
    header: 'Profesional Art Printing Data',
    description: ` A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard`,
    tags: ['html', 'bootstrap', 'Ruby'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',

  },
];

openBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('visible');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('visible');
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
                <button class="btn flex" type="button">See Live <img src="./assets/img/see-live-icon.png" alt="see-live-icon"> </button>
                <button class="btn flex" type="button">See Source <img src="./assets/img/github.png" alt="github"> </button>
              </div>
            </div>
          </div>
        </div>
        `;
    } else {
      (
        container.innerHTML += `
        <div class="mg-2 text-light project">
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
                <button class="btn flex" type="button">See Live <img src="./assets/img/see-live-icon.png" alt="see-live-icon"> </button>
                <button class="btn flex" type="button">See Source <img src="./assets/img/github.png" alt="github"> </button>
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
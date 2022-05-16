const openBtn = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const closeBtn = document.querySelector('#close-btn');
const projectContainer = document.querySelector('.project-container')
const works = [
    {
        id: 001,
        img_dir: `assets/img/img-placeholder-desktop.png`,
        header: `Multi-Post Stories`,
        description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
        tags: [ 'css', 'html' ,'bootstrap', 'ruby'],
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`
    },
    {
        id: 002,
        header: `Profesional Art Printing Data`,
        description: ` A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard`,
        tags: ['html', 'bootstrap', 'Ruby'],
    },
    {
        id: 003,
        header: `Profesional Art Printing Data`,
        description: ` A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard`,
        tags: ['html', 'bootstrap', 'Ruby'],

    },
    {
        id: 004,
        header: `Profesional Art Printing Data`,
        description: ` A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard`,
        tags: ['html', 'bootstrap', 'Ruby'],

    },
    {
        id: 005,
        header: `Profesional Art Printing Data`,
        description: ` A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard`,
        tags: ['html', 'bootstrap', 'Ruby'],

    }
]

openBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('visible');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('visible');
});


let renderDocuments = (arr, container) => {
    arr.forEach(element => {
        container.innerHTML += `
        <div class="mg-1 text-light project">
          <h2 class="mg-inline bg-text">${element.header}</h2>
          <p class="mg-1 mg-inline bg-text">
                ${element.description}
          </p>
          <ul class="mg-1 mg-inline flex tag tag-project">
            <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"> ${element.tags[0]} </a></li>
            <li><a href="https://getbootstrap.com/">  ${element.tags[1]} </a></li>
            <li><a href="https://www.ruby-lang.org/en/">  ${element.tags[2]} </a></li>
          </ul>
          <button class="btn btn-project" type="button">See Project</button>
        </div>
        `
    }); 

}
renderDocuments(works, projectContainer);
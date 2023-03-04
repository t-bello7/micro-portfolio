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
    img_dir: '../assets/img/hotel.png',
    header: 'Hotel Booking Application',
    description: 'Hotel Booking is an online platform that offers a user-friendly and efficient way for customers to book hotels.',
    tags: [{
      name: 'React',
      link: '',
    }, {
      name: 'CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    }, {
      name: 'Ruby',
      link: 'https://www.ruby-lang.org/en/',
    }, {
      name: 'JavaScript',

    }, {
      name: 'Ruby on Rails',
    },
    ],
    content: 'Hotel Booking is an online platform that offers a user-friendly and efficient way for customers to book hotels. The website provides a range of hotels that users can choose from different locations. Once a room of an hotel has been booked the application is updated to show the rooms available for booking. Admin users which would be hotel managers can save or delete hotels or rooms. This feature is designed by allowing the system to have users permission and authorizations.',
    liveLink: 'https://hotel-frontend-rosy.vercel.app/',
    source: 'https://github.com/t-bello7/hotel-frontend',
  },
/*
	{
    id: '002',
    img_dir: './assets/img/finconnect-img.png',
   header: 'Finconnect',
    description: 'A listing web application for financial services',
    tags: [{
      name: 'Django',
      link: '',
    }, {
      name: 'HTML',
      link: '',
    }, {
      name: 'CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    }, {
      name: 'Python',
      link: '',
    }],
    content: ' A full-stack web application to list financial services allowing the company to have a better record of financial partners and a platform for customers to easily access these financial services',
    liveLink: 'https://finconnect.herokuapp.com/',
    source: 'https://github.com/t-bello7/finconnect',
  }, */
  {
    id: '002',
    img_dir: './assets/img/todolist-img.png',
    header: 'Minimal Todo List',
    description: 'A minimal todo list application for keeping track of your tasks',
    tags: [{
      name: 'HTML',
      link: '',
    }, {
      name: 'CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    }, {
      name: 'JavaScript',
      link: '',
    }],
    content: 'A minimalist Todo list app that\'s everywhere you are. "To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    liveLink: 'https://t-bello7.github.io/micro-todo/',
    source: 'https://github.com/t-bello7/micro-todo',
  },
  {
    id: '003',
    img_dir: './assets/img/formula-two.jpeg',
    header: 'Formula One FanPage',
    description: 'A landing page for formula one fans',
    tags: [{
      name: 'CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    }, {
      name: 'HTML',
      link: '',
    }, {
      name: 'Javascript',
      link: '',
    }],
    content: 'A landing page for formula one fans',
    liveLink: 'https://t-bello7.github.io/micro-capstone-1/',
    source: 'https://github.com/t-bello7/micro-capstone-1',
  },
  {
    id: '004',
    img_dir: './assets/img/space-img.png',
    header: 'Space travel',
    description: 'A landing page for space travel and tourism',
    tags: [{
      name: 'html',
      link: '',
    }, {
      name: 'CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    }, {
      name: 'Javascript',
      link: '',
    }],
    content: 'In a distant future humans would going on tours to the vast space. Ever felt the like travelling space, this is a landing page for space travel and toursim.',
    liveLink: 'https://t-bello7.github.io/space-travel/',
    source: 'https://github.com/t-bello7/space-travel',
  },
  {
    id: '005',
    img_dir: './assets/img/space-hub.png',
    header: "Space Travellers' Hub",
    description: "The application is a booking platform for space travel enthusiasts",
    tags: [{
      name: 'Bootstrap5',
      link: 'https://getbootstrap.com/',
    }, {
      name: 'ReactJS',
      link: '',
    }, {
      name: 'Redux',
      link: '',
    }, {
      name: 'React-Router',
      link: '',
    }],
    content: "The Space Travellers' Hub consists of Rockets, Missions, and the My Profile section. The application provides commercial and scientific space travel services by allowing users to book rockets and join selected space missions.",
    liveLink: 'https://super-space-hub.netlify.app/',
    source: 'https://github.com/t-bello7/Micro-Space-Hub',
  },
 /* {
    id: '006',
    img_dir: '../assets/img/sendchamp.png',
    header: 'SendChamp Pricing Page',
    description: 'A clone of the Sendchamp pricing page',
    content: 'SendChamp Pricig Page is a clone of the official SendChamp Pricing Page',
    tags: [{
      name: 'Typescript',
      link: '',
    }, {
      name: 'React',
      link: '',
    }, {
      name: 'Chakra UI',
      link: '',
    }],
    source: 'https://github.com/t-bello7/sendchamp-page',
    liveLink: 'https://sendchamp-page.vercel.app',
  }, */

];

openBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('visible');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('visible');
});

navItems.forEach((item) => (
  item.addEventListener('click', () => {
    mobileMenu.classList.toggle('visible');
  })
));

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
  e.preventDefault();
  const errorMsgs = [];

  if (emailInput.value !== emailInput.value.toLowerCase()) {
    errorMsgs.push('Your email should be in lower case');
  }

  if (errorMsgs.length > 0) {
    e.preventDefault();
    errorMsg.innerText = errorMsgs.join('');
    return;
  }
  if (contactForm.coolname.value || contactForm.coolemail.value) {
    return;
  }

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
              <h3 class="mg-1 ff-roboto">${element.header}</h3>
              <p class="ff-poppins">
                ${element.description}
              </p>
              <ul class="tag tag-feature mg-1 ff-poppins flex">
                <li><a href="">  ${element.tags[0].name}  </a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">  ${element.tags[1].name}  </a></li>
                <li><a href="">  ${element.tags[2].name}  </a></li>
                <li><a href=""> ${element.tags[3].name}  </a></li>
              </ul>
              <button class="btn open-btn"  data-id=${element.id} type="button">See Project</button>
            </div>
        </div>
        `;
    } else {
      (
        container.innerHTML += `
        <div style="background-image:url(${element.img_dir})" class=" text-light project">
          <h2 class="mg-inline bg-gray p-1 ff-roboto">${element.header}</h2>
          <p class="mg-1 mg-inline ff-poppins p-1 bg-gray ">
                ${element.description}
          </p>
          <ul class="mg-1 mg-inline flex ff-poppins tag tag-project p-1 bg-gray">
            <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"> ${element.tags[0].name} </a></li>
            <li><a href="https://getbootstrap.com/">  ${element.tags[1].name} </a></li>
            <li><a href="https://www.ruby-lang.org/en/">  ${element.tags[2].name} </a></li>
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
        <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">${data.tags[0].name}</a></li>
        <li><a href="https://getbootstrap.com/"> ${data?.tags[1].name}</a></li>
        <li><a href="https://www.ruby-lang.org/en/"> ${data?.tags[2].name}</a></li>
        ${data?.tags[3] ? `<li><a href="https://www.ruby-lang.org/en/"> ${data?.tags[3].name} </a></li> ` : ''}
        ${data?.tags[4] ? `<li><a href="https://www.ruby-lang.org/en/"> ${data?.tags[4].name} </a></li> ` : ''}
         ${data.tags[5] ? `<li><a href="https://www.ruby-lang.org/en/"> ${data.tags[5].name} </a></li> ` : ''}
      </ul>
      <div class="flex modal-content">
        <img class="mg-2" src="${data.img_dir}" alt="modal-image">
        <div>
          <p class="ff-poppins">${data.content}</p>
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

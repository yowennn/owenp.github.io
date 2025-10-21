document.querySelectorAll('.navigation a, .btn-talk, .btn-group a, .btn-about').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
      const target = document.querySelector(this.hash);

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      document.getElementById('navbar').classList.remove('active');
      document.getElementById('menu-toggle').classList.remove('active');
    }
  });
});

const links = document.querySelectorAll('.navigation a');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 100;
  links.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navbar.classList.toggle('active');
});

const revealElements = document.querySelectorAll('section, .reveal, .card, .skill-item');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.88;

  revealElements.forEach((el, index) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add('show');

      el.style.transitionDelay = `${index * 0.08}s`;
    } else {
      el.classList.remove('show');
      el.style.transitionDelay = '0s';
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

let menuIcon = document.querySelector("#menu_icon");
let navbar = document.querySelector(".nav");
let header = document.querySelector('header');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
}

header.classList.toggle('sticky', window.scrollY > 100);

ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home_content, .title', { origin: 'top'});
ScrollReveal().reveal('.home_img, .skills_container, .portfolio_box, .timeline_items', { origin: 'bottom'});
ScrollReveal().reveal('.home_content h1, .about_img, .timeline_item', { origin: 'left'});
ScrollReveal().reveal('.about_content, .skills_box', { origin: 'left'});

const typed = new Typed('.typed_text', {
  strings: ['Frontend Developer'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true
});
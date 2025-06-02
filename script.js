/* ======================================
   1. Sticky Navbar + transparencia al scroll
   ====================================== */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

/* ======================================
   2. Toggle menú móvil
   ====================================== */
const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

/* ======================================
   3. ScrollReveal Animations (repetibles)
   ====================================== */
const sr = ScrollReveal({
  reset: true,            // Repite animaciones si vuelves a entrar en viewport
  distance: '30px',
  duration: 700,
  easing: 'ease-out',
  mobile: true
});

/* === Hero section === */
sr.reveal('.hero-title-line1', { origin: 'top', delay: 100 });
sr.reveal('.hero-visual',      { origin: 'bottom', delay: 200 });
sr.reveal('.hero-subtitle',    { origin: 'bottom', delay: 300 });
sr.reveal('.btn-box',      { origin: 'bottom', delay: 400 });

/* === About section === */
sr.reveal('#about .section-title', { origin: 'top', delay: 100 });
sr.reveal('#about .section-text',  { origin: 'left', delay: 200 });
sr.reveal('#about .icon-item',     { origin: 'bottom', interval: 100, opacity: 0.6 });

/* === Sectors section === */
sr.reveal('#sectors .section-title', { origin: 'top', delay: 100 });
sr.reveal('.sector-item',            { origin: 'bottom', interval: 100 });

/* === Catalog section === */
sr.reveal('#catalog .section-title', { origin: 'top', delay: 100});
sr.reveal('.catalog-container .section-text', { origin: 'left', delay: 150 });
sr.reveal('.btn-outline', { origin: 'right', delay: 200 });
sr.reveal('.section-hint', { origin: 'bottom', delay: 250 });
sr.reveal('.catalog-mockup img', { origin: 'right', delay: 300 });

/* === Testimonials section === */
sr.reveal('#testimonials .section-title', { origin: 'top', delay: 100 });
sr.reveal('.testimonial-item',            { origin: 'top', interval: 150 });
sr.reveal('.testimonial-item', {
  origin: 'bottom',
  interval: 150,
  distance: '20px',
  duration: 600,
  easing: 'ease-out'
});


/* === Contact section === */
sr.reveal('#contact .section-title', { origin: 'top', delay: 100 });
sr.reveal('.form-glass',             { origin: 'left', delay: 200 });
sr.reveal('.contact-social',        { origin: 'right', delay: 300 });


/* ======================================
   4. ScrollSpy (IntersectionObserver)
   ====================================== */
const sections = document.querySelectorAll('section');
const spyLinks = document.querySelectorAll('.scrollspy a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.scrollspy a[href="#${id}"]`);
    if (entry.isIntersecting) {
      spyLinks.forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { threshold: 0.5 });

sections.forEach(sec => observer.observe(sec));


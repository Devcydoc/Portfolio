// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  // Toggle Navigation
  nav.classList.toggle('active');

  // Animate Links
  navLinks.forEach((link, index) => {
    link.style.animation = link.style.animation
      ? ''
      : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
  });

  // Burger Animation
  burger.classList.toggle('toggle');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu if open
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      burger.classList.remove('toggle');
    }
  });
});

// Form Submission
function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  // Log form data (replace with your actual form submission logic)
  console.log('Form submitted:', formData);

  // Show success message
  alert('Thank you for your message! I will get back to you soon.');

  // Reset form
  event.target.reset();
}

document.getElementById('contact-form').addEventListener('submit', handleSubmit);

// Intersection Observer for Scroll Animations
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => observer.observe(section));

// Add Scroll-Based Navbar Background
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(0, 0, 0, 0.9)';
    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.background = 'rgba(0, 0, 0, 9)';
    nav.style.boxShadow = 'none';
  }
});

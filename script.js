/**
 * Cleaning Service Landing Page - KCL Devs Entry Test 2025
 * Vanilla JavaScript - No frameworks
 */

document.addEventListener('DOMContentLoaded', function () {
  // ============================================
  // Scroll to Top Button
  // ============================================
  const scrollTopBtn = document.getElementById('scroll-top');
  const scrollThreshold = 300;

  function toggleScrollTop() {
    if (window.scrollY > scrollThreshold) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleScrollTop);

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ============================================
  // Modal Popup
  // ============================================
  const ctaButton = document.getElementById('cta-button');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const modalForm = document.getElementById('modal-form');

  function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  ctaButton.addEventListener('click', openModal);

  modalClose.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  modalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks for your request! We\'ll be in touch soon with a quote.');
    closeModal();
    modalForm.reset();
  });

  // Close modal on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // ============================================
  // Feature Cards Scroll Animation (Bonus)
  // ============================================
  const featureCards = document.querySelectorAll('.feature-card[data-animate]');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, index) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  featureCards.forEach(function (card) {
    observer.observe(card);
  });

  // ============================================
  // Mobile Navigation Toggle
  // ============================================
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav-links a');

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('active');
    });
  });
});

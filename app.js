// Reveal on scroll
document.addEventListener('DOMContentLoaded', () => {
    const selectors = [
      '.hero .hero-content',
      'h2',
      '.skill',
      '.project',
      '.exp-item'
    ];
    const targets = document.querySelectorAll(selectors.join(', '));
  
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target); // reveal only once
        }
      });
    }, {
      threshold: 0.15
    });
  
    targets.forEach(t => observer.observe(t));
  
    // ====== Navbar Toggle for Mobile ======
    const toggleBtn = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  });
  

// Use IntersectionObserver for robust reveal-on-scroll
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
        // stop observing once revealed (prevents flicker)
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  targets.forEach(t => observer.observe(t));
});

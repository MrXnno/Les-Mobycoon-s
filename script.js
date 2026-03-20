// ── NAV SCROLL EFFECT ──
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 40
    ? '0 4px 24px rgba(107,33,168,.12)'
    : 'none';
});

// ── HAMBURGER ──
document.getElementById('hamburger').addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.cssText = `
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 70px; left: 0; right: 0;
      background: rgba(250,248,245,.97);
      backdrop-filter: blur(12px);
      padding: 2rem;
      gap: 1.5rem;
      border-bottom: 1px solid rgba(107,33,168,.1);
      z-index: 99;
    `;
  }
});

// ── FORM SUBMIT ──
function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = '✓ Message envoyé ! Nous vous répondons sous 24h.';
  e.target.reset();
  setTimeout(() => msg.textContent = '', 5000);
}

// ── FADE IN ON SCROLL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.chaton-card, .parent-card, .temoignage, .step, .badge-item, .race-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});

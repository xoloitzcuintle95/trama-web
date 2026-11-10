// Trama launch page — minimal vanilla JS.
// Only two jobs: mobile nav toggle and the footer year.
// No scroll animations, no scrollIntoView, no decorative motion.

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');

  if (toggle && nav) {
    function setNav(open) {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    }

    toggle.addEventListener('click', function () {
      setNav(!nav.classList.contains('open'));
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        setNav(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        setNav(false);
        toggle.focus();
      }
    });
  }

  var year = document.querySelector('[data-year]');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();

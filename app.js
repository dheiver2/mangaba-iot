// mangaba.iot — interações da landing
(function () {
  'use strict';

  // ─── Mobile menu (hamburger) ───
  function initMobileMenu() {
    var btn = document.querySelector('.hamburger');
    var menu = document.querySelector('.mobile-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }

  // ─── Counter animation (stats bar) ───
  function animateCounter(el, target, suffix) {
    var duration = 1800;
    var start = performance.now();
    var formatter = function (n) {
      // pra valores >= 1000, formata com separador de milhar
      if (target >= 1000) return n.toLocaleString('pt-BR');
      return String(n);
    };
    function update(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatter(Math.floor(eased * target)) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  function initCounters() {
    var counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;
    if (!('IntersectionObserver' in window)) {
      counters.forEach(function (c) {
        var t = parseInt(c.dataset.counter, 10) || 0;
        c.textContent = (t >= 1000 ? t.toLocaleString('pt-BR') : t) + (c.dataset.suffix || '');
      });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.dataset.counter, 10) || 0;
          var suffix = el.dataset.suffix || '';
          animateCounter(el, target, suffix);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { obs.observe(c); });
  }

  // ─── Active nav highlight ───
  function setActiveNav() {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (href === page || (page === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    setActiveNav();
    initCounters();
  });
})();

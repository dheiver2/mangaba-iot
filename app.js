// Mangaba IoT AI — interações
(function () {
  'use strict';

  // ---------- Tema claro/escuro ----------
  var STORAGE_KEY = 'mangaba-iot-theme';
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');

  function setTheme(theme) {
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
    if (toggle) toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      setTheme(root.classList.contains('dark') ? 'light' : 'dark');
    });
  }

  // ---------- Nav: borda quando rola ----------
  var nav = document.querySelector('.nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 8) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Reveal on scroll ----------
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();

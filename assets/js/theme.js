/**
 * theme.js — light/dark toggle.
 * Follows the OS by default; a click pins the opposite theme for this browser.
 */

(function () {
  const root = document.documentElement;

  function systemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function currentTheme() {
    return root.dataset.theme || systemTheme();
  }

  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked */ }
  });
})();

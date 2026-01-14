// Theme toggle for all pages
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
let savedTheme = localStorage.getItem('theme');
// If no theme saved, use system preference
if (!savedTheme) {
  savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
// Set theme attribute and save to localStorage
function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}
setTheme(savedTheme);
// Theme toggle button event
if(themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
}

// Theme toggle logic
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const iconSun = document.querySelector('.icon-sun');
const iconMoon = document.querySelector('.icon-moon');
let savedTheme = localStorage.getItem('theme');
if (!savedTheme) {
  // Use system preference if no theme saved
  savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Set theme on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  setTheme(savedTheme);
});

// Set theme and update icons
function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if(theme === 'dark') {
    iconSun.style.display = 'none';
    iconMoon.style.display = 'block';
  } else {
    iconSun.style.display = 'block';
    iconMoon.style.display = 'none';
  }
}

// Theme toggle button event
themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
});

// Mobile menu toggle logic
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// Search/filter functionality for items
const searchInput = document.getElementById('searchInput');
const filterItems = document.querySelectorAll('.filter-item');

if(searchInput) {
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    filterItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      const keywords = item.getAttribute('data-keywords') || '';
      if (text.includes(term) || keywords.includes(term)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
}

// Print button event
document.getElementById('printBtn').addEventListener('click', (e) => {
  e.preventDefault();
  window.print();
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
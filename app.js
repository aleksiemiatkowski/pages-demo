const root = document.documentElement;
const themeButton = document.querySelector('[data-theme-toggle]');

if (localStorage.getItem('pages-lab-theme') === 'dark') {
  root.dataset.theme = 'dark';
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    const isDark = root.dataset.theme === 'dark';
    root.dataset.theme = isDark ? 'light' : 'dark';
    localStorage.setItem('pages-lab-theme', isDark ? 'light' : 'dark');
    themeButton.textContent = isDark ? '☼' : '☾';
  });
}

document.querySelectorAll('[data-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-category]').forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = savedTheme || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', theme);
document.documentElement.style.backgroundColor = theme === 'dark' ? '#020617' : '#f8fafc';
document.documentElement.style.setProperty('--background-color', theme === 'dark' ? '#020617' : '#f8fafc');

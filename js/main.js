// Initialize UI elements after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create and append theme toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'theme-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle theme');
    toggleButton.innerHTML = document.documentElement.getAttribute('data-theme') === 'dark' ? '🌙' : '☀️';
    document.body.appendChild(toggleButton);

    // Theme toggle functionality
    toggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggleButton.innerHTML = newTheme === 'dark' ? '🌙' : '☀️';
        document.documentElement.style.backgroundColor = newTheme === 'dark' ? '#020617' : '#f8fafc';
        document.documentElement.style.setProperty('--background-color', newTheme === 'dark' ? '#020617' : '#f8fafc');
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);
                toggleButton.innerHTML = newTheme === 'dark' ? '🌙' : '☀️';
                document.documentElement.style.backgroundColor = newTheme === 'dark' ? '#020617' : '#f8fafc';
                document.documentElement.style.setProperty('--background-color', newTheme === 'dark' ? '#020617' : '#f8fafc');
            }
        });
});

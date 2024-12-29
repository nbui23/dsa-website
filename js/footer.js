function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer-content">
            <p class="copyright">© ${new Date().getFullYear()} Norman Bui</p>
            <div class="footer-info">
                <span class="status">🚧 Work in Progress</span>
                <span class="separator">•</span>
                <a href="https://github.com/nbui23" class="github-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                <span class="separator">•</span>
                <a href="mailto:normanbui23@gmail.com" class="contact-link">Contact</a>
            </div>
        </div>
    `;
    document.body.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', createFooter);

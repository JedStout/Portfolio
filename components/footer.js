// Site footer: renders into the light DOM so it shares css/site.css.
class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="site-footer">
        <div class="stripe" aria-hidden="true"></div>
        <div class="wrap">
          <p>&copy; ${year} Jed Stout</p>
          <ul>
            <li><a href="https://github.com/JedStout" target="_blank" rel="noopener">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/jedstout/" target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href="mailto:jedstout@gmail.com">Email</a></li>
          </ul>
        </div>
      </footer>`;
  }
}

customElements.define('site-footer', SiteFooter);

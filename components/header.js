// Site header: renders into the light DOM so it shares css/site.css.
const NAV_LINKS = [
  { href: 'index.html#about', label: 'About' },
  { href: 'projects.html', label: 'Projects' },
  { href: 'resume.html', label: 'Resume' },
  { href: 'connect.html', label: 'Connect' },
];

const BEE_SVG = `
<svg class="bee" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
  <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
    <ellipse cx="10" cy="13" rx="6" ry="3.4" transform="rotate(28 10 13)"/>
    <ellipse cx="22" cy="13" rx="6" ry="3.4" transform="rotate(-28 22 13)"/>
    <path d="M15 8l-2.4-3.6M17 8l2.4-3.6"/>
  </g>
  <circle cx="16" cy="10" r="2.4" fill="currentColor"/>
  <path d="M16 13l4 2.5V23l-4 5-4-5v-7.5z" fill="currentColor"/>
  <path class="bee-band" d="M12 18.2h8M12 21.6h8" stroke-width="1.6"/>
</svg>`;

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const page = location.pathname.split('/').pop() || 'index.html';
    const links = NAV_LINKS.map(({ href, label }) => {
      const current = href === page ? ' aria-current="page"' : '';
      return `<li><a href="${href}"${current}>${label}</a></li>`;
    }).join('');

    this.innerHTML = `
      <header class="site-header">
        <div class="wrap nav">
          <a class="brand" href="index.html">${BEE_SVG}<span>Jed Stout</span></a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
            <span class="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
          <nav id="site-nav" aria-label="Main"><ul>${links}</ul></nav>
        </div>
      </header>`;

    const toggle = this.querySelector('.nav-toggle');
    const nav = this.querySelector('nav');
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
  }
}

customElements.define('site-header', SiteHeader);

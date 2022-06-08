const randomquoteTemplate = document.createElement('template');

randomquoteTemplate.innerHTML = `
    <style>
        .randomquote {
            color: black;
        }

    </style>
    <div class="mdl-mini-footer--left-section">
        <p>Testing testing 123</p>
    </div>
`;

class RandomQuote extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(randomquoteTemplate.content);
  }
}

customElements.define('randomquote-component', RandomQuote);
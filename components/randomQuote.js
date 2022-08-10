const randomQuoteTemplate = document.createElement('template');

randomQuoteTemplate.innerHTML = `
    <div class="mdl-card__supporting-text meta meta--fill mdl-color-text--grey-600">
        <p>Quote of the Day</p>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" id="quote button" onclick="getQuote()">New Quote</button>
    </div>
`;

class RandomQuote extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(randomQuoteTemplate.content);
  }
}

customElements.define('randomQuote-component', RandomQuote);
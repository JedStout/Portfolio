const footerTemplate = document.createElement('template');
const currentYr = new Date().getFullYear();

footerTemplate.innerHTML = `
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.grey-orange.min.css">
  <style>
    .mdl-mini-footer {
        margin-top: 80px;
        height: 100px;
        padding: 40px;
        -webkit-align-items: center;
            -ms-flex-align: center;
                align-items: center;
        box-sizing: border-box;
        background-color: #9e9e9e;;
    }
    
  </style>
    <footer class="mdl-mini-footer">
        <div class="mdl-mini-footer--left-section">
            <button class="mdl-mini-footer--social-btn social-btn">
            <a class="mdl-navigation__link" href="https://github.com/JedStout"><img class="title-logo" src="images/GitHub-24px.png"></a>
            </button>
            <button class="mdl-mini-footer--social-btn social-btn">
            <a class="mdl-navigation__link" href="https://www.linkedin.com/in/jedstout/"><img class="title-logo" src="images/LinkIn-24.png"></a>
            </button>
        </div>
        <div class="mdl-mini-footer--right-section">
          <a class="mdl-navigation__link" >
            <p>Copyright &copy; Jedediah Stout</p>
          </a>
        </div>
    </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);

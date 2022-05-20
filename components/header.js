const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.grey-orange.min.css">
  <style>
    .title-logo {
        height: 35px;
    }

  </style>
    <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
                <a class="mdl-navigation__link" href="index.html"><img class="title-logo" src="images/logo.png"></a>
                <span class="mdl-layout-title"><a class="mdl-navigation__link" href="index.html"><h4>Jedediah Stout</h4></a></span>
            <nav class="mdl-navigation mdl-layout--large-screen-only">
                <a class="mdl-navigation__link" href="projects.html">Projects</a>
                <a class="mdl-navigation__link" href="games.html">Games</a>            
                <a class="mdl-navigation__link" href="todo.html">Todo</a>
                <a class="mdl-navigation__link" href="resume.html">Resume</a>
                <a class="mdl-navigation__link" href="connect.html">Connect</a>
            </nav>
        </div>
    </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);

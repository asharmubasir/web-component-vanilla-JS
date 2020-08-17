class NavBar extends HTMLElement {

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <div class="main-nav">
        <ul>
          <li><a href="#top">MOVIE REVIEW</a></li>
        </ul>
      </div>
    `
  }

}

customElements.define('nav-bar', NavBar)

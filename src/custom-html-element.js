class ElementName extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      <h3>Custom HTML Element</h3>
      <p><a href="https://lnsy.dev/blog/custom-html-components.html" target="_blank">More Information</a></p> 
    `
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, old_value, new_value){
    switch(name){
      default:
    }
  }
}

customElements.define('custom-html-element', ElementName)
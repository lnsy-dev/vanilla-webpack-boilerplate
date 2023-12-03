/*

  Custom HTML Elements

  For More information go to: https://lnsy.dev/blog/custom-html-components.html

 */

class ElementName extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      <h3>Custom HTML Element</h3>
      <p><a href="https://lnsy.dev/blog/custom-html-components.html" target="_blank">About Custom HTML Elements</a></p> 
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
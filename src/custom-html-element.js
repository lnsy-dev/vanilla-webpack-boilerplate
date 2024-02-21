/*

  Custom HTML Elements

  For More information go to: https://lnsy.dev/blog/custom-html-components.html

 */

const web_worker = new Worker('./src/web-worker.js');

class ElementName extends HTMLElement {
  connectedCallback(){

    this.innerHTML = `
      <h3>Custom HTML Element</h3>
      <p><a href="https://lnsy.dev/blog/custom-html-components.html" target="_blank">About Custom HTML Elements</a></p> 
    `

    web_worker.postMessage('Hello, worker!');

    // Listening for messages from the worker
    web_worker.onmessage = function(e) {
      console.log('Message received from worker:', e.data);
    };

    // Optional: Listening for errors from the worker
    web_worker.onerror = function(e) {
      console.error('Worker error:', e);
    };
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
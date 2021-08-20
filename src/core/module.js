export class Module {
  constructor(type, text) {
    if (!type) {
      throw new Error('Please specify "type" param')
    }
    if (!text) {
      throw new Error('Please specify "text" param')
    }
    this.type = type
    this.text = text
  }

  trigger() {
    throw new Error(`Trigger method should be implemented in module "${this.type}"`)
  }

  toHTML() {
    const element = document.createElement('li')
    element.className = 'menu-item'
    element.dataset.type = this.type
    element.textContent = this.text
    return element
    // return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
}

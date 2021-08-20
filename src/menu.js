import {Menu} from './core/menu'

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.modules = []
  }

  open() {
    this.menu.classList.add('open')
    this.isOpen = true
    this.menu.style.top = event.clientY + 'px'
    this.menu.style.left = event.clientX + 'px'
  }

  close() {
    this.menu.classList.remove('open')
    this.isOpen = false
    this.menu.style.top = event.clientY + 'px'
    this.menu.style.left = event.clientX + 'px'
  }

  add(module) {
    this.modules.push(module)
    const htmlElement = module.toHTML()
    htmlElement.addEventListener('click', (event) => {
      event.preventDefault()
      module.trigger()
    })
    this.menu.append(htmlElement)
  }
}

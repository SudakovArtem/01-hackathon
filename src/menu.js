import {Menu} from './core/menu'

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.modules = {}
  }

  open() {
    this.menu.classList.add('open')
    this.menu.style.top = event.clientY + 'px'
    this.menu.style.left = event.clientX + 'px'
  }

  close() {
    this.menu.classList.remove('open')
  }

  add(module) {
    this.modules = {
      ...this.modules,
      [module.type]: module
    }

    const menuItem = module.toHTML()
    menuItem.addEventListener('click', (event) => {
      event.preventDefault()
      module.trigger()
      this.close()
    })
    this.menu.append(menuItem)
  }
}

import {Module} from '@/core/module'
import {random} from '@/utils'

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.notClean = true
  }

  trigger() {
    this.changeColorBody()
  }

  changeColorBody() {
    const body = document.querySelector('body')
    body.style.background = `#${random(0, 999999)}`
  }
}

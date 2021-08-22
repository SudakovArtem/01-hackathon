import {Module} from '@/core/module'
import {fireworkStart} from '@/vendor/fireworks'

export class FireworksModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    this.fireWorks()
  }

  fireWorks() {
    const canvasFireWorks = document.querySelector('#fireworks-canvas')
    if (document.body.contains(canvasFireWorks)) {
      canvasFireWorks.remove()
    } else {
      const fireworks = document.createElement('div')
      fireworks.innerHTML = '<canvas width="1500" height="400" id="fireworks-canvas" ></canvas>'
      document.body.append(fireworks)
      fireworkStart()
    }
  }
}

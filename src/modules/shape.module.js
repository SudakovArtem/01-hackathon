import {Module} from '@/core/module'
import {random} from '@/utils'

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.body = document.body
  }

  trigger() {
    this.figureRandom()
  }

  colorRandom() {
    let color = `#${random(0, 999999)}`
    if (this.body.style.background === color) {
      return `#${random(0, 999999)}`
    } else {
      return color
    }
  }

  figureRandom() {
    const figureOnBody = document.querySelector('.figure')
    if (figureOnBody) {
      setTimeout(() => figureOnBody.remove(), 500)
    }
    const colorFigure = this.colorRandom()

    const figure = document.createElement('div')
    const size = random(10, 100)
    const {width, height} = this.body.getBoundingClientRect()

    const x = random(0, width - size)
    const y = random(0, height - size)

    figure.style.width = `${size}px`
    figure.style.height = `${size}px`
    figure.style.top = `${y}px`
    figure.style.left = `${x}px`
    figure.style.background = colorFigure
    const typeFig = random(0, 2)
    if (typeFig === 0) {
      figure.style.borderRadius = '50%'
    } else if (typeFig === 1) {
      figure.classList.add('clipPath')
      figure.style.background = `${colorFigure}`
      figure.style.height = `${size}px`
      figure.style.width = `${size}px`
    }
    figure.classList.add('figure')
    this.body.append(figure)
  }
}

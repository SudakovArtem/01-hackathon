import {Module} from '@/core/module'

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.body = document.querySelector('body')
    this.display = document.createElement('div')
    this.counter = document.createElement('div')
    this.TIMEOUT = 10000
  }

  trigger() {
    this.startCounter()
  }

  startCounter() {
    this.body.classList.add('noSelect')
    this.clicks = 0
    const counterClicks = () => {
      return (this.counter.textContent = `Количество кликов ${this.clicks++}`)
    }

    this.body.addEventListener('click', counterClicks)

    this.display.textContent = this.formatTime(this.TIMEOUT)
    const startTime = Date.now()

    const interval = setInterval(() => {
      const delta = Date.now() - startTime
      this.display.textContent = `Времени осталось ${this.formatTime(
          this.TIMEOUT - delta
      )}`
    }, 100)

    const timeout = setTimeout(() => {
      this.body.removeEventListener('click', counterClicks)
      this.display.textContent = 'Время закончилось'
      clearInterval(interval)
      clearTimeout(timeout)
    }, this.TIMEOUT)

    this.body.append(this.counter)
    this.body.append(this.display)
  }

  formatTime(ms) {
    return (ms / 1000).toFixed(2)
  }
}

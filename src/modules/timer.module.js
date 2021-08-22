import {Module} from '@/core/module'

export class TimerModule extends Module {
  #timerForm
  #timerWrap

  constructor(type, text) {
    super(type, text)
    this.#timerForm = document.createElement('form')
    this.#timerWrap = document.createElement('div')

    this.#timerForm.addEventListener('submit', (event) => {
      event.preventDefault()
      const {target} = event
      const value = target.querySelector('input').value

      if (value) {
        const now = new Date()
        this.removeTimerForm()
        this.renderTimer(value, now)
      }
    })
  }

  renderTimerForm() {
    this.#timerForm.id = 'timer-form'
    this.#timerForm.style.cssText = `display: inline-block padding: 8px`
    const timerFieldset = document.createElement('fieldset')
    timerFieldset.textContent = 'Установите таймер в формате чч:мм:сс'
    timerFieldset.style.padding = '8px'
    const inputForm = document.createElement('input')
    inputForm.type = 'time'
    inputForm.step = '1'
    inputForm.style.cssText = `display: block padding: 8px width: 100%`
    const buttonForm = document.createElement('button')
    buttonForm.type = 'submit'
    buttonForm.textContent = 'Подтвердить'
    buttonForm.style.padding = '8px'

    this.#timerForm.append(timerFieldset)
    timerFieldset.append(inputForm, buttonForm)
    document.body.append(this.#timerForm)
  }

  removeTimerForm() {
    document.body.querySelector('#timer-form').remove()
  }

  getDifferenceBetweenNowAndTimer(val, now) {
    const timer = val.split(':')
    const nowPlusTimer = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        now.getHours() + Number(timer[0]),
        now.getMinutes() + Number(timer[1]),
        now.getSeconds() + Number(timer[2] || '0'),
    ).getTime()
    const difference = nowPlusTimer - new Date()
    const hoursLeft = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const minutesLeft = Math.floor((difference / (1000 * 60)) % 60)
    const secondsLeft = Math.floor((difference / 1000) % 60)
    return {difference, hoursLeft, minutesLeft, secondsLeft}
  }

  toTwoZeroes(num) {
    return num.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false})
  }

  renderTimer(val, now) {
    this.#timerWrap.id = 'timer-wrap'
    const hoursLeft = document.createElement('span')
    const minutesLeft = document.createElement('span')
    const secondsLeft = document.createElement('span')

    this.#timerWrap.append(hoursLeft, minutesLeft, secondsLeft)
    document.body.append(this.#timerWrap)

    const updateTimer = () => {
      const timeDifference = this.getDifferenceBetweenNowAndTimer(val, now)

      hoursLeft.textContent = this.toTwoZeroes(timeDifference.hoursLeft) + ' : '
      minutesLeft.textContent = this.toTwoZeroes(timeDifference.minutesLeft) + ' : '
      secondsLeft.textContent = this.toTwoZeroes(timeDifference.secondsLeft)

      if (timeDifference.difference <= 1000) {
        clearInterval(interval)
        this.removeTimer()
        alert('Время вышло!')
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
  }

  removeTimer() {
    document.body.querySelector('#timer-wrap').remove()
  }

  trigger() {
    this.renderTimerForm()
  }
}

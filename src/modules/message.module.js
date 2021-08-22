import {Module} from '@/core/module'
import {random} from '@/utils'
import {messageBackgrounds, messages} from '@/data'

export class MessageModule extends Module {
  #messages
  #backgrounds

  constructor(type, text) {
    super(type, text)
    this.#messages = messages
    this.#backgrounds = messageBackgrounds
  }

  #randomMessage() {
    return this.#messages[random(0, this.#messages.length - 1)]
  }

  randomColor() {
    return this.#backgrounds[random(0, this.#backgrounds.length - 1)]
  }

  #renderMessage() {
    const message = this.#randomMessage()
    const blockquote = document.createElement('blockquote')
    blockquote.id = 'message'
    blockquote.className = 'message'
    blockquote.style.maxWidth = `${random(200, 1000)}px`
    blockquote.style.backgroundColor = this.randomColor()
    const paragraph = document.createElement('p')
    paragraph.textContent = message.mess
    paragraph.style.marginBottom = '20px'
    const cite = document.createElement('cite')
    cite.textContent = message.cite

    blockquote.append(paragraph, cite)
    document.body.append(blockquote)
  }

  trigger() {
    this.#renderMessage()
    const message = document.body.querySelector('#message')
    setTimeout(() => {
      if (message) {
        message.remove()
      }
    }, 8000)
  }
}

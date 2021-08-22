import {Module} from '@/core/module'
import {pianoAudio, pianoKeys} from '@/data'

export class Piano extends Module {
  constructor(type, text) {
    super(type, text)
    this.WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    this.BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']
    this.keys = pianoKeys
    this.audio = pianoAudio
  }

  trigger() {
    this.start()
  }

  start() {
    const container = document.createElement('div')
    const pianoContainer = document.createElement('div')
    pianoContainer.className = 'piano'

    this.keys.forEach(item => {
      const keyElement = document.createElement('div')
      keyElement.className = `key key-${item.key}`
      keyElement.dataset.note = item.note
      keyElement.textContent = item.text
      pianoContainer.append(keyElement)
    })

    container.append(pianoContainer)

    this.audio.forEach(item => {
      const audioElement = document.createElement('audio')
      audioElement.id = item.id
      audioElement.src = item.src
      container.append(audioElement)
    })

    document.body.append(container)

    const whiteKeys = document.querySelectorAll('.key.key-w')
    const blackKeys = document.querySelectorAll('.key.key-b')

    document.addEventListener('keydown', (e) => {
      const key = e.key

      const whiteKeyIndex = this.WHITE_KEYS.indexOf(key)
      const blackKeyIndex = this.BLACK_KEYS.indexOf(key)

      if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
      if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
    })

    function playNote(key) {
      let note = document.getElementById(key.dataset.note)
      key.classList.add('active')
      note.currentTime = 0
      note.play()
      note.addEventListener('ended', () => {
        key.classList.remove('active')
      })
    }

    const instruction = document.createElement('div')
    instruction.innerText = `Вы можете сыграть на данном пианино используя кнопки клавиатуры.
    БЕЛЫЕ : 'Z', 'X', 'C', 'V', 'B', 'N', 'M'.
    ЧЕРНЫЕ : 'S', 'D', 'G', 'H', 'J'.`
    instruction.classList.add('instruction')
    document.body.prepend(instruction)
  }
}

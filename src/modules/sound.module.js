import {Module} from '@/core/module'
import {random} from '@/utils'
import {sounds} from '@/data'

export class SoundModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.collection = []
    this.loadedIndex = 0
    this.sounds = sounds
    this.init(this.sounds)
    this.notClean = true
  }

  trigger() {
    if (this.collection.length === this.loadedIndex) this.play()
  }

  init(audios) {
    for (let i = 0; i < audios.length; i++) {
      const audio = new Audio(audios[i])
      this.collection.push(audio)
      this.buffer(audio)
    }
  }

  buffer(audio) {
    if (audio.readyState === 4) return this.loaded()
    setTimeout(() => {
      this.buffer(audio)
    }, 100)
  }

  loaded() {
    this.loadedIndex++
  }

  play() {
    let n = random(0, this.collection.length - 1)
    const audio = this.collection[n]
    audio.play()
  }
}

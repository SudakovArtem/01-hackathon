import {Module} from '@/core/module'
import {random} from "@/utils";

export class SoundModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.collection = [];
    this.loadedIndex = 0;
    this.init([
      'src/audio/sound-1.mp3',
      'src/audio/sound-2.mp3',
      'src/audio/sound-3.mp3',
      'src/audio/sound-4.mp3',
      'src/audio/sound-5.mp3',
      'src/audio/sound-6.mp3',
      'src/audio/sound-7.mp3',
      'src/audio/sound-8.mp3',
      'src/audio/sound-9.mp3',
      'src/audio/sound-10.mp3',
    ]);
  }

  trigger() {
    if (this.collection.length === this.loadedIndex) this.play();
  }

  init(audios) {
    for (let i = 0; i < audios.length; i++) {
      const audio = new Audio(audios[i]);
      this.collection.push(audio);
      this.buffer(audio);
    }
  }

  buffer(audio) {
    if (audio.readyState === 4) return this.loaded();
    setTimeout(() => {
      this.buffer(audio)
    }, 100);
  }

  loaded() {
    this.loadedIndex++;
  }

  play() {
    let n = random(0, this.collection.length - 1);
    const audio = this.collection[n];
    audio.play();
  }
}

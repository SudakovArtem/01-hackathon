import {Module} from '@/core/module'
import {random} from '@/utils'

export class RandomImage extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    this.showImage()
  }

  showImage() {
    const randomImageIndex = random(1, 10000)
    const body = document.querySelector('body')
    const imagePlace = document.createElement('img')
    imagePlace.src = `https://unsplash.it/1200/700?${randomImageIndex}`
    body.append(imagePlace)
  }
}

import {Module} from '@/core/module'

export class Matrix extends Module {
  constructor(type, text) {
    super(type, text)
    this.body = document.querySelector('body')
  }

  trigger() {
    this.start()
  }

  start() {
    this.body.style.padding = `${0}px`
    this.body.style.backgroundColor = '#000'
    this.body.style.overflow = 'hidden'
    const C = document.createElement('canvas')
    this.body.append(C)
    const ctx = C.getContext('2d')
    const W = (C.width = window.innerWidth)
    const H = (C.height = window.innerHeight)

    let font = 20,
        col = W / font,
        arr = []

    for (let i = 0; i < col; i++) arr[i] = 1

    function draw() {
      ctx.fillStyle = 'rgba(0,0,0,.05)'
      ctx.fillRect(0, 0, W, H)
      ctx.fillStyle = '#18dcff'
      ctx.font = font + 'px system-ui'
      for (let i = 0; i < arr.length; i++) {
        let txt = 'JS'
        ctx.fillText(txt, i * font, arr[i] * font)
        if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0
        arr[i]++
      }
    }

    setInterval(draw, 130)

    window.addEventListener('resize', () => location.reload())
  }
}

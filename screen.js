let screen

class Screen {
  constructor(width, height) {
    this.width = width
    this.height = height
    screen = this
  }

  render() {
    let screen = document.createElement('div')
    screen.setAttribute("id", "screen")
    screen.style.width = intToPixels(this.width)
    screen.style.height = intToPixels(this.height)
    document.querySelector('body').appendChild(screen)
  }

}

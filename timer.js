class Timer {
  constructor() {
    this.rock = null
    this.timer = 0
    this.left = 30
    this.bottom = 550
    this.width = 30
    timer = this
  }

  render() {
    let timerEl = document.createElement('div')
    timerEl.setAttribute("class", "timer")
    timerEl.style.left = intToPixels(this.left)
    timerEl.style.bottom = intToPixels(this.bottom)
    timerEl.style.width = intToPixels(this.width)
    timerEl.innerText = this.timer
    appendToScreen(timerEl)
  }

  update() {
    if (dodger.onRock) {
      this.timer++
    } else {
      this.timer = 0
    }
    document.querySelector(".timer").innerText = this.timer
  }

}

let rocks = []
let id = 0

class Rock {
  constructor(bottom, left, width, height) {
    this.bottom = bottom
    this.left = left
    this.width = width
    this.height = height
    this.id = id++
    rocks.push(this)
  }

  right() {
    return this.left + this.width
  }

  top() {
    return this.bottom + this.height
  }

  render() {
    let rock = document.createElement('div')
    rock.setAttribute("class", "rock")
    rock.dataset.id = this.id
    rock.style.bottom = intToPixels(this.bottom)
    rock.style.left = intToPixels(this.left)
    rock.style.width = intToPixels(this.width)
    rock.style.height = intToPixels(this.height)
    document.querySelector('#screen').appendChild(rock)
  }
}

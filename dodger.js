class Dodger {
  constructor(bottom, left, width, height) {
    this.bottom = bottom
    this.left = left
    this.width = width
    this.height = height
    this.jumpAcceleration = 20
    this.verticalVelocity = 0
    this.onLand = false
    this.onRock = false
    this.rockOnLeft = false
    this.rockOnRight = false
    this.onRightWall = false
    this.onLeftWall = false
    this.notOnRockCounter = 0
    dodger = this
  }

  right() {
    return this.left + this.width
  }

  top() {
    return this.bottom + this.height
  }

  render() {
    if (document.querySelector("#dodger")) {
      document.querySelector("#dodger").remove()
    }
    let dodgerElement = document.createElement('div')
    dodgerElement.setAttribute("id", "dodger")
    dodgerElement.style.bottom = intToPixels(this.bottom)
    dodgerElement.style.left = intToPixels(this.left)
    dodgerElement.style.width = intToPixels(this.width)
    dodgerElement.style.height = intToPixels(this.height)
    document.querySelector('#screen').appendChild(dodgerElement)
  }

  moveHorizontal() {
    if (keyState[37] && this.checkLeftMove()){this.left -= 5}
    if (keyState[39] && this.checkRightMove()){this.left += 5}
  }

  moveVertical() {
    this.bottom += this.verticalVelocity
    if (this.verticalVelocity>0 || !this.onSomething()) {
      this.verticalVelocity--
    } else {this.verticalVelocity=0}
  }

  onSomething() {
    if (this.onLand || this.onRock) {return true} else {return false}
  }


  jump() {
    if (this.onSomething()) {
      this.verticalVelocity = this.jumpAcceleration
    }
  }

  checkLeftMove() {
    if (this.onLeftWall || this.rockOnLeft) {
      return false
    } else {return true}
  }

  checkRightMove() {
    if (this.onRightWall || this.rockOnRight) {
      return false
    } else {return true}
  }

  checkGround() {
    if (this.bottom<=0) {
      this.bottom=0
      this.onLand = true
    } else {this.onLand = false}
  }

  checkRightWall() {
    const rightLimit = screen.width - dodger.width
    if (this.left>=(rightLimit)) {
      this.left=rightLimit
      this.onRightWall = true
    } else {this.onRightWall = false}
  }

  checkLeftWall() {
    if (this.left<=0) {
      this.left=0
      this.onLeftWall = true
    }  else {this.onLeftWall = false}
  }

  checkRocks() {
    this.notOnRockCounter = 0
    rocks.forEach((rock) => {
      this.checkRock(rock)
    })
    if (this.notOnRockCounter===rocks.length) {
      this.onRock = false
    }
  }

  checkRock(rock) {
    this.checkRockBelow(rock)
    this.checkRockAbove(rock)
    this.checkRockOnRight(rock)
    this.checkRockOnLeft(rock)
  }

  checkRockOnRight(rock) {
    if (this.rightOverlap(rock) && this.verticalOverlap(rock)) {
      dodger.rockOnRight = true
      dodger.left=(rock.left - dodger.width)
    } else (dodger.rockOnRight = false)
  }

  checkRockOnLeft(rock) {
    if (this.leftOverlap(rock) && this.verticalOverlap(rock)) {
      dodger.rockOnLeft = true
      dodger.left=(rock.right())
    } else (dodger.rockOnLeft = false)
  }

  checkRockBelow(rock) {
    if (this.bottomOverlap(rock) && (this.rightOverlap(rock) || this.leftOverlap(rock))) {
      this.onRock = true
      if (this.verticalVelocity < 0) {
        this.bottom=rock.top()
        this.verticalVelocity = 0
      }
    } else {this.notOnRockCounter++}
  }

  checkRockAbove(rock) {
    if (this.topOverlap(rock) && (this.rightOverlap(rock) || this.leftOverlap(rock))) {
      this.bottom=rock.bottom - this.height
      this.verticalVelocity = -1
    }
  }

  rightOverlap(obj) {
    if ((dodger.right() >= obj.left) && (obj.right() >= dodger.right())) {
      return true
    } else {return false}
  }

  leftOverlap(obj) {
    if ((obj.right() >= dodger.left) && (obj.right() <= dodger.right())) {
      return true
    } else {return false}
  }

  bottomOverlap(obj) {
    if ((dodger.bottom <= obj.top()) && (dodger.top() >= obj.top())) {
      return true
    } else {return false}
  }

  topOverlap(obj) {
    if ((dodger.top() >= obj.bottom) && (dodger.bottom <= obj.bottom)) {
      return true
    } else {return false}
  }

  verticalOverlap(obj) {
    if ((dodger.bottom < obj.top()) && (dodger.top() > obj.bottom)) {
      return true
    } else {return false}
  }


}

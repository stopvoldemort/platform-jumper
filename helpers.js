
function pixelsToInt(str) {
  return parseInt(str.split("px")[0])
}

function intToPixels(int) {
  return `${int}px`
}

function appendToScreen(object) {
  document.querySelector('#screen').appendChild(object)
}

function checkLoseConditions() {
  if (timer.timer>100) {
    alert("YOU STOOD STILL TOO LONG. HIT COMMAND-R TO PLAY AGAIN")
    return true
  } if (dodger.onLand===true) {
    alert("YOU TOUCHED THE GROUND. HIT COMMAND-R TO PLAY AGAIN")
    return true
  }
}

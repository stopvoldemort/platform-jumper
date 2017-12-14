const keyState = {};
let dodger
let timer

function startGame() {
  addScreen(750, 600)
  addDodger(600, 100, 20, 20)
  addRock(50, 300, 150, 20)
  addRock(150, 100, 150, 20)
  addRock(150, 500, 150, 20)
  addRock(250, 300, 150, 20)
  addRock(350, 100, 150, 20)
  addRock(350, 500, 150, 20)
  addRock(450, 300, 150, 20)
  addTimer()
  addEventListeners()
}

function addScreen(width, height) {
  new Screen(width, height)
  screen.render()
}

function addDodger(bottom, left, width, height) {
  new Dodger(bottom, left, width, height)
  dodger.render()
}

function addRock(bottom, left, width, height) {
  const rock = new Rock(bottom, left, width, height)
  rock.render()
}

function addTimer() {
  new Timer()
  timer.render()
}

function addEventListeners() {
  const body = document.querySelector('body')

  body.addEventListener('keydown', (ev) => {
    if (ev.which === 32) {
      dodger.jump()
    }
  })

  body.addEventListener('keydown',function(e){
      keyState[e.which] = true;
  });

  body.addEventListener('keyup',function(e){
      keyState[e.which] = false;
  });
}

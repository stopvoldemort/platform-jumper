startGame()

function gameLoop() {

  dodger.checkRocks()
  dodger.checkRightWall()
  dodger.checkLeftWall()
  dodger.checkGround()

  dodger.moveHorizontal()
  dodger.moveVertical()


  dodger.render()
  timer.update()
  if (checkLoseConditions()) {return ""}




  setTimeout(gameLoop, 10);
}

gameLoop();

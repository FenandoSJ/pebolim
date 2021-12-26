let jogadorX = [110, 400]
let jogadorH = 20
let jogadorV = 90
let jogadorY = 155
let colisaoP  = false;

function mostrarPlayer() {
  fill(255, 0, 0)
  stroke(0)
  rect(jogadorX[0], jogadorY, jogadorH, jogadorV)
  rect(jogadorX[1], jogadorY, jogadorH, jogadorV)
 
}
function controlePlayer(){
  if ((keyIsDown(UP_ARROW)) && jogadorY > 1){
    jogadorY -= 7;
  }
  if ((keyIsDown(DOWN_ARROW)) && jogadorY < 309){
    jogadorY += 7;
  }
}

function colidiuPlayer() { 
  for (i = 0; i < jogadorX.length;) {
     colisaoP = collideRectCircle(jogadorX[i], jogadorY, jogadorH, jogadorV, xBola, yBola, raio)
  i++
      if (colisaoP){ 
        speedXBola *= -1
        chute.play();
      }
  }
   
}
let iaBot = 70
let botX = [470, 180]
let botH = 20
let botV = 90
let botY = 155
let colisaoB  = false;

function mostrarBot() {
  fill(0, 150, 200)
  stroke(255)
  rect(botX[0], botY, botH, botV)
  rect(botX[1], botY, botH, botV)
 
}
function controleBot(){
  
  moviYbot = yBola - botY - botV  / 2 - iaBot;
  botY += moviYbot
}

function colidiuBot() { 
  for (i = 0; i < botX.length;) {
     colisaoB = collideRectCircle(botX[i], botY, botH, botV, xBola, yBola, raio)
  i++
      if (colisaoB){ 
      speedXBola *= -1
      chute.play()
      iaBot = Math.floor(Math.random() * ((6 - 3 + 1) + 1) * 10)
      }
  }
   
}
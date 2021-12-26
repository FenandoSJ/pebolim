
let traves = [150, 20, 100]
let posicaoTraveP = 0
let posicaoTraveB = 580

function mostrarCampo() {
  background(80, 180, 0);
  noStroke();
  fill(60, 140, 0)
  rect(0, 80, 600, 80)
  rect(0, 240, 600, 80)
  fill(255)
  circle(300, 200, 10)
  rect(20, 20, 560, 1)
  rect(20, 380, 560, 1)
  rect(20, 20, 1, 360)
  rect(580, 20, 1, 360)
  rect(300, 20, 1, 360)
  rect(20, 150, 70, 1)
  rect(20, 250, 70, 1)
  rect(510, 150, 70, 1)
  rect(510, 250, 70, 1)
  rect(90, 150, 1, 100)
  rect(510, 150, 1, 100)
  noFill();
  stroke(255)
  circle(300, 200, 100)
  
}
function mostrarTraves() { 
  fill(255)
  stroke(0)
  rect(posicaoTraveP, traves[0], traves[1], traves[2])
  rect(posicaoTraveB, traves[0], traves[1], traves[2])
  
}
function mostrarRedes() {
  fill(0)
  noStroke();
  rect(5, 150, 1, 100)
  rect(10, 150, 1, 100)
  rect(15, 150, 1, 100)
  rect(585, 150, 1, 100)
  rect(590, 150, 1, 100)
  rect(595, 150, 1, 100)
  rect(0, 160, 20, 1)
  rect(0, 170, 20, 1)
  rect(0, 180, 20, 1)
  rect(0, 190, 20, 1)
  rect(0, 200, 20, 1)
  rect(0, 210, 20, 1)
  rect(0, 220, 20, 1)
  rect(0, 230, 20, 1)
  rect(0, 240, 20, 1)
  rect(580, 160, 20, 1)
  rect(580, 170, 20, 1)
  rect(580, 180, 20, 1)
  rect(580, 190, 20, 1)
  rect(580, 200, 20, 1)
  rect(580, 210, 20, 1)
  rect(580, 220, 20, 1)
  rect(580, 230, 20, 1)
  rect(580, 240, 20, 1)
} 


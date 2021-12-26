let bot = 0
let player1 = 0

//basico da bola
let xBola = 300;
let yBola = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da bola
let speedXBola = 3 + (player1/2);
let speedYBola = 3 + (player1/2);

function mostrarBola() {
  fill(255)
  circle(xBola, yBola, diametro);
}

function marcarGol() {
  if ((yBola >= 150) && (yBola <= 250)) {
    if (xBola <= 20 )  {
       bot += 1
       xBola = 300
       yBola = 200
       iaBot = Math.floor(Math.random() * ((7 - 3 + 1) + 1) * 10)
       gol.play()
      
    } 
  }
  if ((yBola >= 150) && (yBola <= 250)){
    if (xBola >= 580) {
        player1 += 1
        xBola = 300
        yBola = 200
        iaBot = Math.floor(Math.random() * ((8 - 3 + 1) + 1) * 10)
        gol.play()  
    }
  }
  
}
function moverBola() {
  xBola += speedXBola;
  yBola += speedYBola;
  if ((yBola <= 150) || (yBola >= 250)){
     if (xBola >= 580 ){
      speedXBola *= -1;
     }
  }
  if ((yBola <= 150) || (yBola >= 250)){
     if (xBola <= 20 ){
      speedXBola *= -1;
     }
  }
}

function verificaColisaoBorda() {
   if (yBola + raio > height - 20 ||
     yBola - raio < 0 + 20){
     speedYBola *= -1 
   
   }
}
function incluirPlacar() {
  stroke(0)
  textSize(20)
  textAlign(CENTER)
  fill(0)
  rect(130, 0, 40, 20)
  rect(430, 0, 40, 20)
  fill(255)
  text(player1, 150, 18)
  text(bot, 450, 18)
}
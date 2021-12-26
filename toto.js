function setup() {
  createCanvas(600, 400);
}

function draw() {
  mostrarCampo()
  mostrarTraves()
  mostrarRedes()
  mostrarBola()
  verificaColisaoBorda()
  moverBola()
  incluirPlacar()
  mostrarBot()
  mostrarPlayer()
  marcarGol()
  controlePlayer()
  controleBot()
  colidiuPlayer()
  colidiuBot()
  
}

function preload(){
  gol = loadSound("gol.mp3");
  chute = loadSound("chute.mp3");
 
}
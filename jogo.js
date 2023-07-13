let personagem
let grass
let bulbasaur
let charmander
let squirtle
let ginasio
let pokeball
let bulbasaurCaptured=false;
let charmanderCaptured=false;
let squirtleCaptured=false;

let tamanho = 64


let andarX=0
let andarY=0
let velocidade = 64

let botaoReset


//setup executa apenas uma vez ao iniciar o programa
function setup() {
  createCanvas(576, 576);
  personagem = loadImage('ash_frente.png')
  grass = loadImage('grama.jpeg')
  bulbasaur = loadImage('bulbasaur.png');
  charmander = loadImage('charmander.png');
  squirtle = loadImage('squirtle.png');
  ginasio = loadImage('ginasio.png')


  
}

//draw - dar cor - fica em loop
function draw() {
  background(220);
  
  rect(160, 160, 256, 256);
    textSize(15)
    text("CAPTURE OS POKÉMONS"+"\n"+"E VÁ ATÉ O GINÁSIO", 210, 300);
  
  if(andarX<0){
    andarX=0
  }
  
  if(andarX>tamanho*8){
    andarX=tamanho*8
  }
    
  if(andarY<0){
    andarY=0
  }
  
  if(andarY>tamanho*8){
    andarY=tamanho*8
  }
  
  
  for (let i=0; i<9; i++){
    for (let j=0; j<9; j++){
    image(grass, i*64, 64*j, tamanho, tamanho)
    }
  } 
  image(charmander, 128, 192, tamanho, tamanho)
  image(squirtle, 448, 64, tamanho, tamanho)
  image(bulbasaur, 256, 384, tamanho, tamanho)
  image(ginasio, tamanho*8, tamanho*8, tamanho, tamanho)
  image(personagem, andarX, andarY, tamanho, tamanho)

  if (andarX===128 && andarY===192){
    charmander = loadImage('pokeball.png')
    charmanderCaptured=true
  }
  
  if (andarX===448 && andarY===64){
    squirtle = loadImage('pokeball.png')
    squirtleCaptured=true
  }

  if (andarX===256 && andarY===384){
    bulbasaur = loadImage('pokeball.png')
    bulbasaurCaptured=true
  }


  if (andarX===tamanho*0 && andarY===tamanho*0){
    rect(160, 160, 256, 256);
    textSize(15)
    text("CAPTURE OS POKÉMONS"+"\n"+"E VÁ ATÉ O GINÁSIO", 210, 300);
  }
  
  if (andarX===tamanho*8 && andarY===tamanho*8){
    if(charmanderCaptured===true && bulbasaurCaptured===true && squirtleCaptured===true){
      //criar um retângulo e escrever o texto "Ganhou"
      rect(160, 160, 256, 256);
      textSize(35)
      text("GANHOU!", 210, 300);

      //criar botão
    botaoReset = createButton('Reiniciar')
    botaoReset.position(240,340)
    
    //Aumentar tamanho da letra do botão
    botaoReset.style("font-size:20px")
    
    //parar o jogo
    noLoop()
    
    //resetar o jogo
    botaoReset.mousePressed(reset)

    } else {
      rect(160, 160, 256, 256);
      textSize(20)
      text("Volte e capture"+"\n"+"todos os pokémons!", 210, 300)
    }
    
    
    
  }
  
  //text(`x:${andarX} y:${andarY}`, 500, 500)
 
}

function reset(){
  
  andarX=0;
  andarY=0;
  botaoReset.remove()
  bulbasaur = loadImage('bulbasaur.png');
  charmander = loadImage('charmander.png');
  squirtle = loadImage('squirtle.png');
  bulbasaurCaptured=false;
  charmanderCaptured=false;
  squirtleCaptured=false;
  loop()
  
}



//executa uma função sempre que uma tecla for pressionada
function keyPressed(){
  if(keyIsDown(LEFT_ARROW)){
    andarX-=velocidade
  }
  if(keyIsDown(RIGHT_ARROW)){
    andarX+=velocidade
  }
  if(keyIsDown(UP_ARROW)){
    andarY-=velocidade
  }
  if(keyIsDown(DOWN_ARROW)){
    andarY+=velocidade
  }
  
  
}
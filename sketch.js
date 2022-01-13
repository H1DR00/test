var caixa
function setup() {
  createCanvas(400,400);
  caixa = createSprite(200,200.50,50)
}

function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW)) {
    
    caixa.position.x +=5
  }


  drawSprites()

}





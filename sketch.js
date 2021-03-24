var  fakem,fakec,cat1I,gardenI,cat2,cat3,cat4,mouse1,mouse2,mouse3,mouse4
var cat,garden,mouse

function preload() {
    gardenI=loadImage("garden.png")
    cat1=loadImage("cat1.png")
    cat2=loadImage("cat2.png")
    cat3=loadImage("cat3.png")
    cat4=loadImage("cat4.png")
    mouse1=loadImage("mouse1.png")
    mouse2=loadImage("mouse2.png")
    mouse3=loadImage("mouse3.png")
    mouse4=loadImage("mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400);
    garden.addImage(gardenI);
    cat=createSprite(790,620);
    cat.addImage(cat1);
    cat.scale=0.15


    mouse=createSprite(100,620)
    mouse.addImage(mouse1);
mouse.scale=0.10


}





function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x- mouse.x < (cat.width - mouse.width)/2){
         cat.destroy()
         mouse.destroy()
         fakec=createSprite(200,620)
         fakec.addImage(cat4)

         fakec.scale=0.15
         fakem=createSprite(100,620)
         fakem.addImage(mouse4)

         fakem.scale=0.10
    }
    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseteasing" ,mouse2);
      mouse.changeAnimation("mouseteasing");
  
  
  
  
  mouse.frameDelay =  25;
  
  
  }
  if(keyCode === LEFT_ARROW){
      cat.addAnimation("catrunning" ,cat2);
  cat.changeAnimation("catrunning");
  cat.frameDelay =  25;
cat.addAnimation("catrunning2" ,cat3);

cat.changeAnimation("catrunning2")
  cat.velocityX=-8;
  cat.frameDelay =  25;

  }
  if(mouse.isTouching(cat)){
        mouse.addAnimation("s" ,mouse4);
    mouse.changeAnimation("s");
  }
  }
  
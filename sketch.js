var bg,sleep,brush,gym,eat,drink,move,bath;
var astronaut;

function preload(){

  bg= loadImage("images/iss.png");
  
 sleep = loadAnimation ("images/sleep.png");
 brush = loadAnimation("images/brush.png");
 gym = loadAnimation ("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
 eat = loadAnimation ("images/eat1.png","images/eat2.png");
 drink = loadAnimation ("images/drink1.png","images/drink2.png");  
 move = loadAnimation ("images/move.png","images/move1.png");
 bath= loadAnimation("images/bath1.png","images/bath2.png")

}




function setup () {
  createCanvas(400, 400);
  astronaut = createSprite (300,320)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1



//   //astronaut.addAnimation("brush_time",brush)
//   astronaut.scale=0.1

//  astronaut.addAnimation("gymin",gym)

//  astronaut.addAnimation("eating",eat)

//  astronaut.addAnimation("drinkin",drink)

//  astronaut.addAnimation("move_it",move)



}

function draw () {
  background(bg);


  if (keyDown ("UP_ARROW")){

    astronaut.addAnimation ("brushing", brush); 
    astronaut.changeAnimation ("brushing");
    
    astronaut.y  = 350 ;
    
    astronaut.velocityX  = 0 ;
    
    astronaut.velocityY  = 0 ;
  }

  if (keyDown ("DOWN_ARROW")){

    astronaut.addAnimation ("gymin", gym); 
    astronaut.changeAnimation ("gymin");
    
    astronaut.y  = 350 ;
    
    astronaut.velocityX  = 0 ;
    
    astronaut.velocityY  = 0 ;
  }

  if (keyDown ("RIGHT_ARROW")){

    astronaut.addAnimation ("eatin", eat); 
    astronaut.changeAnimation ("eatin");
    
    astronaut.y  = 350 ;
    
    astronaut.velocityX  = 0 ;
    
    astronaut.velocityY  = 0 ;
  }

  if (keyDown ("LEFT_ARROW")){

    astronaut.addAnimation ("bath_time", bath); 
    astronaut.changeAnimation ("bath_time")
    
    astronaut.y  = 350 ;
    
    astronaut.velocityX  = 0 ;
    
    astronaut.velocityY  = 0 ;
  }

  if (keyDown ("m")){

    astronaut.addAnimation ("sleepin", sleep); 
    astronaut.changeAnimation ("sleepin");
    
    astronaut.y  = 350 ;
    
    astronaut.velocityX  = 0 ;
    
    astronaut.velocityY  = 0 ;
   
    
  }
  
  drawSprites()

}
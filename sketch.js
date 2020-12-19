var guy;
function preload(){

}
function setup(){
    
createCanvas(800,400);
guy = new player(0,0);
}

function draw(){
background(0,0,0);

if(keyDown(UP_ARROW)){
    velocityY=-3;
}
if(keyDown(DOWN_ARROW)){
    velocityY=3;
}
if(keyDown(RIGHT_ARROW)){
    velocityX=3;
}
if(keyDown(LEFT_ARROW)){
    velocityX=-3;
}

drawSprites();
}
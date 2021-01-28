var canvas,title,play,back,state=0,ground,hero,castle,groundgr,plat1,plat2;
var invisi,pos,edge0,edge1,g1,g2,g3,g4,trophy,fat1,fat2,enemygr;
var p,p2,p3,p4,lose;

// Made by Pura Marpu(tets)
function preload(){
  back=loadImage("img/1915699.jpg");
  castle=loadImage("img/back2.jfif");

  lose=loadImage("img/lose.jpg");
}
function setup(){
  canvas=createCanvas(displayWidth,500);

  title=createElement("h1");
  title.html("Steel Story");
  title.position(540,200);

  play=createButton("Play");
  play.position(590,400);

  play.mousePressed(login);

  groundgr=createGroup();
  enemygr=createGroup();
  
  hero=createSprite(200,480,20,50);
  hero.visible=false;
  
  invisi=createSprite(600,130,3200,10);
  invisi.visible=false;

  plat1=createSprite(430,340,200,10);
  plat1.visible=false;

  plat2=createSprite(680,380,200,10);
  plat2.visible=false;
  groundgr.add(plat2);

  g1=createSprite(1000,300,200,10);
  g1.visible=false;
  groundgr.add(g1);

  g2=createSprite(1700,410,1000,150);
  g2.visible=false;
  groundgr.add(g2);

  g3=createSprite(2350,250,200,10);
  g3.visible=false;
  groundgr.add(g3);

  fat1=new enemy(1000,280);
  fat2=new enemy(1500,310);
  p=new enemy(700,360);
  p2=new enemy(1900,360);

  push();
  trophy=createSprite(30,100,10,10);
  trophy.visible=false;
  pop();

  ground=createSprite(1200,490,displayWidth+1200,10);
  ground.visible=false;

  edge0=createSprite(2450,0,1,1200);
  edge1=createSprite(0,0,1,1200);
}
class enemy{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  display(){
    this.haha=createSprite(this.x,this.y,10,30);
    enemygr.add(this.haha);

    this.haha.velocityY+=1.5;
  }
  disappear(){
    this.haha.visible=false;
  }
}

function draw(){
  background(back);
  var losetitle;

  if(state===1){
    background(castle);

    move(hero);
    hero.velocityY+=1;

    if(hero.x>=700){
      camera.x=hero.x+50;
    }
    if(hero.x>=1800){
      camera.x=1800;
    }

    hero.collide(ground);
    hero.collide(plat1);
    hero.collide(invisi);
    hero.collide(edge0);
    hero.collide(edge1);
    hero.collide(groundgr);
    enemygr.collide(groundgr);
    enemygr.collide(ground);

    hero.visible=true;
    invisi.visible=true;
    plat2.visible=true;
    trophy.visible=true;

    g1.visible=true;
    g2.visible=true;
    g3.visible=true;

    trophy.visible=true;

    fat1.display();
    fat2.display();
    p.display();
    p2.display();

    if(hero.isTouching(enemygr)){
      state=2;
    }
  }
  if(state===2){

    fat1.disappear();
    fat2.disappear();
    p.disappear();
    p2.disappear();

    background(lose);

    losetitle=createElement("h1");
    losetitle.html("You Lose!!");
    losetitle.position(600,250);
  }
  drawSprites();
}
function move(x){
  if(keyWentDown(UP_ARROW)){
    x.velocityY-=19; 
  }
  if(keyWentDown(RIGHT_ARROW)){
    x.velocityX=5;
  }
  if(keyWentUp(RIGHT_ARROW)){
    x.velocityX=0;
  }
  if(keyWentDown(LEFT_ARROW)){
    x.velocityX=-5;
  }
  if(keyWentUp(LEFT_ARROW)){
    x.velocityX=0;
  }
}
function login(){
  play.hide();
  title.hide();
  state=1;
}
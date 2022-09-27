function preload() {
  // put preload code here
}

//reference: Zao Wou-Ki, Juin-Octobre 1985, 1985

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background("black");
  angleMode (DEGREES);
  frameRate(25);
}

function draw() {
  // put drawing code here

  //spirale blu-nero in basso
  push();
  noFill()
  let mycolor = lerpColor (color ("black"), color ("blue"), frameCount/100);
  stroke(mycolor);
  rotate(25);
  ellipse ((frameCount*8), 60*cos(frameCount*6)+(windowHeight-400), 600);
  pop();
 
  //spirale verde-bianco a sx
  push();
  noFill()
  let mycolor2 = lerpColor (color ("darkgreen"), color ("white"), frameCount/200);
  stroke(mycolor2);
  rotate(120);
  ellipse ((frameCount*8)-250, 60*cos(frameCount*6)-200, 400);
  pop();

  //spirale blu-nero a dx
  push();
  noFill()
  let mycolor3 = lerpColor (color ("blue"), color ("black"), frameCount/150);
  stroke(mycolor3);
  rotate(-15);
  ellipse (80*sin(frameCount*6)+(windowWidth-300), (frameCount*8), 450);
  pop();

  //spirale viola-azzurro in basso
  push();
  noFill()
  let mycolor4 = lerpColor (color ("violet"), color ("lightblue"), frameCount/200);
  stroke(mycolor4);
  rotate(-20);
  ellipse ((frameCount*8), 60*cos(frameCount*8)+(windowHeight+400), 350);
  pop();

  //spirale bianco-blu in alto
  push();
  noFill()
  let mycolor5 = lerpColor (color ("white"), color ("blue"), frameCount/200);
  stroke(mycolor5);
  rotate(10);
  ellipse ((frameCount*8), 60*cos(frameCount*8)-250, 350);
  pop();

  //spirale arancio centrale
  push();
  noFill()
  let mycolor6 = lerpColor (color ("orange"), color ("white"), frameCount/500);
  stroke(mycolor6);
  strokeWeight(0.8);
  rotate(20);
  ellipse ((frameCount*10)-400, 60*cos(frameCount*10), 450);
  pop();
}

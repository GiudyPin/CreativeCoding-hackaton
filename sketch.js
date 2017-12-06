var mic;
var ghirlanda;
var biscotto;
var uccellino;
var girandola;
var fiamma;
var fiocconeve;

function preload() {
    ghirlanda = loadImage('./assets/ghirlanda.png')
    biscotto = loadImage('./assets/biscotto.png')
    uccellino = loadImage('./assets/uccellino.png')
    girandola = loadImage('./assets/girandola.png')
    fiamma = loadImage('./assets/fiamma.png')
    fiocconeve = loadImage('./assets/fiocconeve.png')
}

function setup() {
    
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
    
  mic = new p5.AudioIn();
  mic.start();
    
    
}

function draw() {
  
 var vol = mic.getLevel();
    
//change hue to background
    var color = map(vol, 0, 1, 0, 255);
    background(random(color), 77, 50);
 
    
 image(ghirlanda, width/2-350, height/2-350, 700, 700)

    
    
//singing cookie 
    
push()   

    image(biscotto, width/2-320, height/2+50, 200, 233)
    
    fill('#3F280D')
    stroke('#3F280D')
    strokeWeight(2);
    var diameter1 = 5+vol*80
    ellipse(width/2-250, height/2+75, diameter1)
    ellipse(width/2-280, height/2+90, diameter1)
    
    fill('#C5996D')
    stroke('#3F280D')
    strokeWeight(3)
    var diameter2 = 16+vol*100
    ellipse(width/2-255, height/2+98, 16, diameter2);
    
pop() 
   
    
    
//fiamma bigger
    
push()  
    
    if(1+vol*50 < 3) {
        translate((width/2-15)+12.5, (height/2+100)+20)
        scale(1+vol*50, 1+vol*50)
        image(fiamma, -12.5, -20, 25, 40)}
    else {
        translate((width/2-15)+12.5, (height/2+100)+20)
        scale(1,1)
        image(fiamma, -12.5, -20, 25, 40)}
    
pop()
    
    
    
//rotating ball
    
push()
    
    translate((width/2+200)+30, (height/2-150)+30)
    rotate(frameCount*3)
    image(girandola, -30, -30, 60, 60)
    
pop()
    
    
    
//rotating snow
    
push()
    
    translate((width/2-220)+25, (height/2-320)+25)
    rotate(frameCount*3)
    image(fiocconeve, -25, -25, 50, 50)
    
 pop()
    
    
    
//bird bigger
    
push()  
    
    if(1+vol*200 < 3) {
        translate((width/2+120)+50, (height/2-280)+40)
        scale(1+vol*200, 1+vol*200)
        image(uccellino, -50, -40, 100, 80)}
    else {
        translate((width/2+120)+50, (height/2-280)+40)
        scale(1,1)
        image(uccellino, -50, -40, 100, 80)}
    
pop()
 
    
    
//rotating merry christmas 
    
push()
    
    translate(width/2, height/2)
    rotate(vol*100);
        fill(255);
        textSize(60);
        textAlign(CENTER);
        textFont('Crafty Girls');
        text('Merry Christmas', -150,-100, 300, 200); 
    
pop()


    
fill(255);
textSize(30);
textAlign(CENTER);
textFont('Crafty Girls');
text('just shout to the world...', width/2-125, 300, 250, 100);  
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
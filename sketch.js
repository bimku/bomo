var text0;
var text1;
var text2;
var text3;
var text4;
var text5;
var text6;


var popup1;
var popup2;
var popup3;

let myDiv;

let button;
let button1;
let button2;

var canvas;


function preload() {

  text0 = loadStrings('text0.txt');
  text1 = loadStrings('text1.txt');
  text2 = loadStrings('text2.txt');
  text3 = loadStrings('text3.txt');
  text4 = loadStrings('text4.txt');
  text5 = loadStrings('text.txt');
  text6 = loadStrings('text5.txt');


  popup1 = loadStrings('popup1.txt');
  popup2 = loadStrings('popup2.txt')
  popup3 = loadStrings('popup3.txt')

  // font = loadFont('SuperMarioBros.otf');

}
function setup() {

  //////CANVAS SIZE//////
  createCanvas(windowWidth, windowHeight);
// canvas.position (300,300);
// background(0);


  // createCanvas(700, 700);

//////////BUTTON//////////

button = createButton('&nbsp;&nbsp;&nbsp;&nbsp;');
button.position(55, 300);
button.mousePressed(pop1);
// button.mouseOver(mouseOver1);
// button.mouseOut(mouseOut1);
button.style('font-family', 'Helvetica, sans-serif;')
button.style('font-size', '100px')
button.style ('text-align', 'center');

button.style ('background-color', color("#CD5334"));
button.style ('border', '2px');
button.style ('border-style', 'solid');
button.style ('border-color', color(0,0,0));
button.style ('border-radius', '20px');
// cursor(TEXT );


button1 = createButton('&nbsp;&nbsp;&nbsp;&nbsp;');
button1.position(55, 550);
button1.mousePressed(pop2);

button1.style('font-family', 'Helvetica, sans-serif;')
button1.style('font-size', '100px')
button1.style ('text-align', 'center');

button1.style ('background-color', color("#CD5334"));
button1.style ('border', '2px');
button1.style ('border-style', 'solid');
button1.style ('border-color', color(0,0,0));
button1.style ('border-radius', '20px');
// button1.style ('z-index', '1');

// button1.mousePressed(changeBG);




button2 = createButton('&nbsp;&nbsp;&nbsp;&nbsp;');
button2.position(55, 800);
button2.mousePressed(pop3);
// button2.mouseOver(mouseOver3);
// button2.mouseOut(mouseOut3);
button2.style('font-family', 'Helvetica, sans-serif;')
button2.style('font-size', '100px')
button2.style ('text-align', 'center');

button2.style ('background-color', color("#CD5334"));
button2.style ('border', '2px');
button2.style ('border-style', 'solid');
button2.style ('border-color', color(0,0,0));
button2.style ('border-radius', '20px');


//MAIN TEXT////
  var main = createDiv(text0);
  main.position(350,500)

  main.style('font-family', 'Verdana ')
  main.style('font-size', '33px')
  // main.style('background-color', color(0,30,255))
  main.style ('color', color(0,0,0));
  main.style ('marginRight', '100px');
  // span.style ('margin', "100px 100px 100px 100px");

  main.style ('text-align', 'justify');

}

function pop1() {
  // let val = random(255);
  // background(val);

  var pop1 = createDiv(popup1);
  pop1.position(350,350)

  pop1.style('font-family', 'Verdana ')
  // pop1.style('text-transform', 'uppercase ')

  pop1.style('font-size', '33px')
  pop1.style('background-color', color("#FFD046"))
  pop1.style ('color', color(0,0,0));
  pop1.style ('marginRight', '100px');
  pop1.style ('text-align', 'justify');
}

function pop2() {
  // let val = random(255);
  // background(val);

  var pop2 = createDiv(popup2);
  pop2.position(350,700)

  pop2.style('font-family', 'Verdana ')
  // pop2.style('text-transform', 'uppercase ')


  pop2.style('font-size', '33px')
  pop2.style('background-color', color("#CD5334"))
  pop2.style ('color', color(0,0,0));
  pop2.style ('marginRight', '100px');
  pop2.style ('text-align', 'justify');
}

function pop3() {
  // let val = random(255);
  // background(val);

  var pop3 = createDiv(popup3);
  pop3.position(650,1000)

  pop3.style('font-family', 'Verdana ')
  // pop3.style('text-transform', 'uppercase ')

  pop3.style('font-size', '33px')
  pop3.style('background-color', color("#FFD046"))
  pop3.style ('color', color(0,0,0));
  pop3.style ('marginRight', '100px');
  pop3.style ('text-align', 'justify');
}


function mousePressed(){

//////////
var randomText = [];
randomText [1]= text1;
randomText [2]= text2;
randomText [3]= text3;
randomText [4]= text4;
// randomText [5]= text5;

var rs = random(randomText);


////////COLOR VARIABLES
let colors = [color("#2E282A"),
              color("#FFD046"),
              color("#A1CDF4"),
              color("#227C9D"),



              color(0,30,255, alpha)];
//////////
//////////

for (var i = 0; i< 1; i+= 1){


  var span =createDiv(rs);

  span.style('font-family', 'Verdana ')
  span.style('font-size', '20px')
  // span.style('background-color', color(0,30,255))
  // span.style ('marginRight', random(2000));
  span.style ('margin', "100px 10px 20px 30px");

  // span.style ('color', color(0,0,0));

////RANDOM COLORS///////
  span.style ('color', colors[floor(random(colors.length))]);

  // span.style('background-color', colors[floor(random(colors.length))])



  // var span =createDiv(randomText[i]);
  // span.style('color','#F55D3E');
  var pX = random(windowWidth);
  var pY = random(windowHeight);
  span.position (pX,pY);
}

}

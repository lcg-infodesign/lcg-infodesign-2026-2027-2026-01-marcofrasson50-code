// benvenuti al fiumiciattolo :)

// coordinate di partenza
// coordinate rana
let xFrog = 0;
let yFrog = 130;

// coordinate ninfea
let xLily = 300;
let yLily = 193;
let angleLily = 0;

// coordinate anatra
let xDuck = -100;
let yDuck = 270;

// coordinate cespugli
let xBush1 = 150;
let yBush1 = 40;
let xBush2 = 450;
let yBush2 = 360;

// cespuglio
function drawBush(x, y) {
  // ombra
  fill(50, 110, 45);
  ellipse(x + 4, y + 5, 96, 46);
 
  // corpo del cespuglio
  fill(70, 145, 55);
  circle(x - 32, y + 4, 30);
  circle(x - 14, y - 6, 34);
  circle(x + 6, y - 4, 36);
  circle(x + 26, y + 2, 32);
  circle(x + 38, y + 8, 22);
  circle(x - 4, y + 10, 30);
  circle(x + 18, y + 12, 24);

  // bacche
  fill(200, 50, 60);
  circle(x - 24, y + 3, 5);
  circle(x + 14, y + 6, 5);
  circle(x + 2, y - 12, 4);
  circle(x + 32, y + 10, 4);
}

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
}

function draw() {
  background(90, 170, 80); // riva
  noStroke();

  // fiume
  fill(40, 110, 180);
  rect(0, 80, width, 240);

  // sassi disposti a zig zag
  for (let i = 0; i < 5; i++) { //ciclo ripetuto per 5 volte, una per ogni coppia di sassi
    let xStone = 50 + i * 120; 
    let yTop;
    let yBottom;
    if (i % 2 == 0) {
      yTop = 62;       // in alto, vicino all'acqua
      yBottom = 380;   // in basso, lontano dall'acqua
    } else {
      yTop = 20;       // in alto, lontano dall'acqua
      yBottom = 342;   // in basso, vicino all'acqua
    }
    // sasso sulla riva in alto
    fill(130);
    ellipse(xStone, yTop, 22, 14);
    fill(170);
    ellipse(xStone - 3, yTop - 2, 10, 6);
    // sasso sulla riva in basso
    fill(130);
    ellipse(xStone + 15, yBottom, 22, 14);
    fill(170);
    ellipse(xStone + 12, yBottom - 2, 10, 6);
  }

  // cespugli
  drawBush(xBush1, yBush1);
  drawBush(xBush2, yBush2);

  // increspature dell'acqua
  fill(90, 160, 220);
  for (let i = 0; i < 20; i++) {
    let rx = (i * 70 + frameCount) % width;
    let ry = 100 + (i * 38) % 227;
    ellipse(rx, ry, 20, 3);
  }

  // rana
  // zampe
  fill(40, 120, 40);
  ellipse(xFrog - 18, yFrog - 14, 16, 8);
  ellipse(xFrog - 18, yFrog + 14, 16, 8);
  ellipse(xFrog + 12, yFrog - 14, 12, 6);
  ellipse(xFrog + 12, yFrog + 14, 12, 6);
  // corpo
  fill(60, 160, 60);
  ellipse(xFrog, yFrog, 40, 30);
  // occhi
  fill(255);
  circle(xFrog + 12, yFrog - 8, 10);
  circle(xFrog + 12, yFrog + 8, 10);
  fill(0);
  circle(xFrog + 14, yFrog - 8, 4);
  circle(xFrog + 14, yFrog + 8, 4);

  // ninfea
  push();
  translate(xLily, yLily); // l'origine si sposta al centro della ninfea
  rotate(angleLily);       
  // foglia con il taglio
  fill(50, 140, 70);
  circle(0, 0, 60);
  fill(40, 110, 180); // stesso colore dell'acqua
  triangle(0, 0, 32, -9, 32, 9);
  // petali
  fill(240, 170, 200);
  for (let i = 0; i < 6; i++) {
    rotate(60);
    ellipse(0, -8, 8, 18);
  }
  // centro giallo
  fill(250, 220, 80);
  circle(0, 0, 8);
  pop();

  // anatra
  // coda
  fill(255);
  triangle(xDuck - 33, yDuck - 9, xDuck - 51, yDuck, xDuck - 33, yDuck + 9);
  // corpo
  ellipse(xDuck, yDuck, 75, 45);
  // ali
  fill(220);
  ellipse(xDuck - 6, yDuck - 10, 39, 15);
  ellipse(xDuck - 6, yDuck + 10, 39, 15);
  // testa
  fill(40, 120, 60);
  circle(xDuck + 33, yDuck, 27);
  // becco
  fill(240, 160, 40);
  triangle(xDuck + 43, yDuck - 6, xDuck + 60, yDuck, xDuck + 43, yDuck + 6);

  // due anatroccoli in fila
  for (let i = 0; i < 2; i++) {
    let xBaby = xDuck - 85 - i * 45; // ognuno più indietro del precedente
    // corpo
    fill(250, 215, 70);
    ellipse(xBaby, yDuck, 26, 18);
    // testa
    fill(255, 230, 100);
    circle(xBaby + 12, yDuck, 12);
    // becco
    fill(240, 160, 40);
    triangle(xBaby + 17, yDuck - 2, xBaby + 23, yDuck, xBaby + 17, yDuck + 2);
  }

  // movimento rana
  xFrog = xFrog + 1.5;
  if (xFrog > width + 120) {
    xFrog = -40;
  }

  // movimento e rotazione ninfea
  xLily = xLily + 0.8;
  angleLily = angleLily + 1;
  if (xLily > width + 70) {
    xLily = -40;
  }

  // movimento anatra e anatroccoli, riparte solo quando anche l'ultimo anatroccolo è uscito
  xDuck = xDuck + 2;
  if (xDuck > width + 500) {
    xDuck = -65;
  }
}
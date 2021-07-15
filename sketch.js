var iss, issImg, spacecraft, spacecraftImg, spaceCraftr, spaceCraftl, spaceCraftA, hasDocked
function preload() {
  issImg = loadImage("images/iss.png")
  bg = loadImage("images/spacebg.jpg")
  spacecraftImg = loadImage("images/spacecraft1.png")
  spaceCraftr = loadImage("images/spacecraft4.png")
  spaceCraftl = loadImage("images/spacecraft3.png")
  spaceCraftA = loadImage("images/spacecraft2.png")
}

function setup() {
  createCanvas(1350, 650);

  hasDocked = false

  iss = createSprite(500, 200, 50, 50);
  iss.addImage(issImg)

  randx = Math.round(random(100, 900))
  randy = Math.round(random(500, 600))

  spacecraft = createSprite(randx, randy, 20, 20);
  spacecraft.addImage(spacecraftImg)
  spacecraft.scale = 0.2
}

function draw() {
  background(bg);

  if (hasDocked == false) {
    if (keyDown(UP_ARROW)) {
      spacecraft.y -= 3
      spacecraft.addImage(spaceCraftA)
    } else if (keyDown(RIGHT_ARROW)) {
      spacecraft.x += 3
      spacecraft.addImage(spaceCraftr)
    } else if (keyDown(LEFT_ARROW)) {
      spacecraft.x -= 3
      spacecraft.addImage(spaceCraftl)
    }
  }

  spacecraft.depth = iss.depth
  spacecraft.depth -= 1

  if (spacecraft.y <= (iss.y + 100) && spacecraft.x <= (iss.x - 20)) {

    hasDocked = true;

    textSize(25);
    fill("blue")
    text("Docking Successful!", 670, 325);

    spacecraft.addImage(spacecraftImg)
  }


  drawSprites();
}
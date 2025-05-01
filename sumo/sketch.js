let q = await Q5.WebGPU();

new Canvas();
// world.gravity.y = 10;
world.gravity.y = 0;

// let ball = new Sprite();
// ball.x = -200;
// ball.y = -200;
// ball.diameter = 50;

// let groundA = new Sprite();
// groundA.x = -120;
// groundA.width = 200;
// groundA.rotation = 20;
// groundA.collider = STATIC;

// let groundB = new Sprite();
// groundB.x = 120;
// groundB.width = 200;
// groundB.rotation = -20;
// groundB.collider = STATIC;

let myPlayer;
let players = {};
let circleRadius = 300;
let centerX = 400, centerY = 300;

myPlayer = new Sprite(random(width), random(height), 30);
myPlayer.color = 'orange';


q.update = () => {
	background('skyblue');

	// textAlign(CENTER);
	// text('click to jump!', 0, -100);

	// if (mouse.presses()) ball.vel.y = -5;
	// kb.presses(' ')

	// if (kb.presses('left')) myPlayer.vel.x = -5;
	// if (kb.presses('right')) myPlayer.vel.x = 5;
	// if (kb.presses('up')) myPlayer.vel.y = -5;
	// if (kb.presses('down')) myPlayer.vel.y = 5;

	if (kb.pressing('up')) {
		myPlayer.vel.y = -5;
	} else if (kb.pressing('down')) {
		myPlayer.vel.y = 5;
	} else if (kb.pressing('left')) {
		myPlayer.vel.x = -5;
	} else if (kb.pressing('right')) {
		myPlayer.vel.x = 5;
	} else {
		myPlayer.vel.x = 0;
		myPlayer.vel.y = 0;
	}
};







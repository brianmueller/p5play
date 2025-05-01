let q = await Q5.WebGPU();

new Canvas(1000,800);
world.gravity.y = 0;

let myPlayer;
let otherPlayer;
let players = {};
let centerX = 400, centerY = 300;
const force = 5;

myPlayer = new Sprite();
myPlayer.diameter = 30;
myPlayer.color = 'red';

otherPlayer = new Sprite();
otherPlayer.diameter = 30;
otherPlayer.color = 'blue';

myPlayer.friction = 0.1; // add some friction to slow down naturally
myPlayer.drag = 0.1;     // drag also helps simulate air resistance

otherPlayer.friction = 0.1;
otherPlayer.drag = 0.1;

q.update = () => {
	background('skyblue');

	// Control with arrow keys (inertia-based)
	if (kb.pressing('up')) {
		myPlayer.applyForce(0, -1*force);
	}
	if (kb.pressing('down')) {
		myPlayer.applyForce(0, force);
	}
	if (kb.pressing('left')) {
		myPlayer.applyForce(-1*force, 0);
	}
	if (kb.pressing('right')) {
		myPlayer.applyForce(force, 0);
	}

	// WASD control for otherPlayer
	if (kb.pressing('i')) { // up
		otherPlayer.applyForce(0, -1*force);
	}
	if (kb.pressing('k')) { // down
		otherPlayer.applyForce(0, force);
	}
	if (kb.pressing('j')) { // left
		otherPlayer.applyForce(-1*force, 0);
	}
	if (kb.pressing('l')) { // right
		otherPlayer.applyForce(force, 0);
	}
};







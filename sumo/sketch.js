let q = await Q5.WebGPU();

new Canvas(1000,800);
world.gravity.y = 0;

let myPlayer;
let otherPlayer;
let players = {};
let circleRadius = 300;
let centerX = 400, centerY = 300;

myPlayer = new Sprite(width/2, height/2, 30);
myPlayer.color = 'red';

otherPlayer = new Sprite(random(width), random(height), 30);
otherPlayer.color = 'blue';


q.update = () => {
	background('skyblue');

	otherPlayer.x = mouse.x;
	otherPlayer.y = mouse.y;

	if (kb.pressing('up')) {
		myPlayer.vel.x = 0;
		myPlayer.vel.y = -5;
	} else if (kb.pressing('down')) {
		myPlayer.vel.x = 0;
		myPlayer.vel.y = 5;
	} else if (kb.pressing('left')) {
		myPlayer.vel.x = -5;
		myPlayer.vel.y = 0;
	} else if (kb.pressing('right')) {
		myPlayer.vel.x = 5;
		myPlayer.vel.y = 0;
	} else {
		myPlayer.vel.x = 0;
		myPlayer.vel.y = 0;
	}

	if (kb.pressing('w')) { // up
		otherPlayer.vel.y = -5;
	} else if (kb.pressing('s')) { // down
		otherPlayer.vel.y = 5;
	} else if (kb.pressing('a')) { // left
		otherPlayer.vel.x = -5;
	} else if (kb.pressing('d')) { // right
		otherPlayer.vel.x = 5;
	} else {
		otherPlayer.vel.x = 0;
		otherPlayer.vel.y = 0;
	}
};







class Ambulance {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.ambulanceWidth = 200;
		this.ambulanceHeight = 213;
		this.wallThickness = 20;
		
        this.image = loadImage("images/ambulance.png");
		this.bottomBody = Bodies.rectangle(this.x, this.y-100, this.ambulanceWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody = Bodies.rectangle(this.x-this.ambulanceWidth/2, this.y-this.ambulanceHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.rightWallBody = Bodies.rectangle(this.x+this.ambulanceWidth/2, this.y-this.ambulanceHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display() {
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftWallBody.position;
        var posRight = this.rightWallBody.position;

        push();
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER)
        // angleMode(RADIANS)
        fill(255)
        pop();

        push();
        translate(posRight.x, posRight.y);
        rectMode(CENTER)
        // angleMode(RADIANS)
        fill(255)
        pop();

        push();
        translate(posBottom.x, posBottom.y+10);
        rectMode(CENTER)
        // angleMode(RADIANS)
        fill(255)
        imageMode(CENTER);
        image(this.image, 0,-this.ambulanceHeight/2,this.ambulanceWidth+280, this.ambulanceHeight+220)
        pop();		
	}
}
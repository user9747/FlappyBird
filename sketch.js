var bird;
var pipes = [];
var run = true;
var score = 0;

function setup(){
	createCanvas(400,600);
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw(){
	background(0);
	if(run){
	if(frameCount % 80 == 0){
		pipes.push(new Pipe());
	}
	for(i=pipes.length-1;i>0;i--){
		pipes[i].show();
		pipes[i].update();
		if(pipes[i].x < -32){
			pipes.splice(i,1);
			score++;
		}
		if(pipes[i].hit(bird)){
			console.log("BiRd HiT");
			pipes=[];
			run = false;
			console.log(score);
			score=0;
		}
	}
	bird.update();
	bird.show();
	}

}

function keyPressed(){
	if(key == ' '){
		console.log("jump");
		bird.velocity = -15;
		if(!run){
	    	run = true;
     	}

	}
}
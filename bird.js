function Bird(){
	this.x=64;
	this.y=height/2;
	this.gravity = 1;
	this.velocity = 0;

	this.show = function(){
		fill(255);
		ellipse(this.x,this.y,32,32);
	}

	this.update = function(){
		this.velocity += this.gravity;
		this.y += this.velocity;

		if(this.y>height -16){
			this.y=height - 16;
			this.velocity=0;
		}

		if(this.y<16){
			this.y=16;
			this.velocity=0;
		}


	}
}
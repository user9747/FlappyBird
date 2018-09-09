function Pipe(){
	this.top = random(height/2);
	this.bottom = random(height/2);
	this.x = width;
	this.w=32;
	this.speed = 2;
	this.highlight = false;

	this.show = function(){
		fill(255);
		if(this.highlight){
			fill(255,0,0);
			this.highlight = false;
		}
		rect(this.x,0,this.w,this.top);
		rect(this.x,height-this.bottom,32,this.bottom);
	}

	this.update = function(){
		
		this.x -= this.speed;
	}

	this.hit = function(){
		if(bird.y<this.top || bird.y > height-this.bottom){
			if(bird.x >=this.x && bird.x <=this.x+this.w){
				this.highlight = true;
				return true;
			}
		}
	}
}
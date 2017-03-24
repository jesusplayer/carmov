
var Mobile = function(width, height, x,y,speedX,speedY,thisChild){
	Extend(this,new Component(width, height, x,y,GetThis(this,thisChild)),GetThis(this,thisChild));
	this.tickX = 0;
	this.tickY = 0; 
	this.speedX = speedX;
	this.speedY = speedY;
	this.deplacer = function(){
		this.x += this.tickX;
		this.y += this.tickY;
	}
	this.avancer = function(){
		this.tickX = this.speedX; 	
		this.tickY = 0;
	}
	this.reculer = function(){
		this.tickX = -this.speedX;
		this.tickY = 0;
	}
	this.monter = function(){	
		this.y +=  (-this.speedY);
	}
	this.descendre = function(){
		this.y +=this.speedY;
	}
	this.stop = function(){
		this.tickX = 0;
		this.tickY = 0;
	}
}

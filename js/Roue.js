
var Roue = function(width, height, x, y,speedX,speedY, src,speedAngle,thisChild){
	Extend(this,new ImageMobile(width, height, x, y,speedX,speedY, src,GetThis(this,thisChild)),GetThis(this,thisChild));
	this.tickAngle=0,
	this.speedAngle=speedAngle,
	this.update= function(){			
		this.ctx.save();
		this.ctx.translate(this.x, this.y); 
		this.ctx.rotate(this.tickAngle);
		this.ctx.drawImage(this.image, this.width / -2, this.height / -2,this.width,this.height);
		this.ctx.restore(); 
	}
	this.deplacer=function () {
		this.x += this.tickX;
		this.tourner();
	}
	this.tourner=function () {
		this.tickAngle += this.tickAngle * Math.PI / 180;
	}
	this.avancer = function(){
		this.tickX = this.speedX; 	
		this.tickY = 0;
		this.tickAngle = speedAngle;
	}
	this.reculer = function(){
		this.tickX = -this.speedX;
		this.tickY = 0;
		this.tickAngle = -speedAngle;
	}
	this.monter = function () {
		this.tickY = -this.speedY;
		//this.tickAngle = -speedAngle;
		this.y += this.tickY;
	}
	this.descendre = function () {
		this.tickY = this.speedY; 	
		//this.tickAngle = speedAngle;
		this.y += this.tickY;
	}
	this.stop = function(){
		this.tickX = 0;
		this.tickY = 0;
		this.tickAngle = 0;
	}
}


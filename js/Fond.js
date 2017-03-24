
var Fond = function (width, height, x, y,speedX,speedY,src,thisChild) {
	Extend(this,new ImageMobile(width, height, x, y,speedX,speedY, src,GetThis(this,thisChild)),GetThis(this,thisChild));
	this.update = function(){
		this.ctx.drawImage(this.image, this.x-this.width,  this.y,this.width, this.height);
		this.ctx.drawImage(this.image, this.x, this.y,this.width,this.height);
		this.ctx.drawImage(this.image, this.x + this.width,  this.y,this.width, this.height);
	}
	this.deplacer = function(){
		this.x += this.tickX;
		this.y += this.tickY;
		if (this.tickX <0 && this.x <= -(this.width)) {
			this.x = this.width;
		}
		if(this.tickX>0 && this.x>=this.width){
			this.x = 0;
		}  
	}

}

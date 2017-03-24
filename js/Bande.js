
var Bande = function (width,height,x,y,speedX,speedY,color,thisChild){
	Extend(this,new RectangleMobile(width, height, x,y,speedX,speedY,color,GetThis(this,thisChild)),GetThis(this,thisChild));
	this.update = function () {
		this.ctx.beginPath();
		this.ctx.strokeStyle = this.color;
		this.ctx.lineWidth = height;
		this.ctx.setLineDash([105]);
		this.ctx.moveTo(this.x-this.width,this.y);		
		this.ctx.lineTo(this.x+2*this.width, this.y);		
		this.ctx.stroke();
		this.ctx.closePath();			
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

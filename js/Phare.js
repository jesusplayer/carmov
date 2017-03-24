
var Phare = function (width,height,x,y,speedX,speedY,color,type,thisChild){
	Extend(this,new RectangleMobile(width, height, x,y,speedX,speedY,color,GetThis(this,thisChild)),GetThis(this,thisChild));
	this.type = type;
	this.dsplay = false;
	this.update = function () {
		this.ctx.beginPath();
		this.ctx.fillStyle = this.color;
		if(this.display){
			if(this.type== "right"){
				this.ctx.moveTo(this.x+this.width,this.y-this.height/2);		
				this.ctx.lineTo(this.x, this.y);		
				this.ctx.lineTo(this.x, this.y+5);		
				this.ctx.lineTo(this.x+this.width, this.y+this.height/3);	
			}else if(this.type== "left"){
				this.ctx.moveTo(this.x-this.width,this.y-this.height/2);		
				this.ctx.lineTo(this.x, this.y);	
				this.ctx.lineTo(this.x, this.y+5);	
				this.ctx.lineTo(this.x-this.width, this.y+this.height/3);
			}	
		}
		this.ctx.fill();			
	}
	this.changerStatus = function () {
		this.display = this.display?false:true;
	}
}

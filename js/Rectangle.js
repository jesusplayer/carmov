
var Rectangle = function (width, height, x,y,color,thisChild){
	Extend(this,new Component(width, height, x,y),thisChild);
	this.color= color;	
	this.update = function () {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
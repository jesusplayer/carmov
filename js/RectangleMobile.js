
var RectangleMobile = function(width, height, x,y,speedX,speedY,color,thisChild){
	Extend(this,new Mobile(width, height, x,y,speedX,speedY,GetThis(this,thisChild)),GetThis(this,thisChild));
	this.color = color;
}

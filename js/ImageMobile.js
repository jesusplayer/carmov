
	var ImageMobile = function (width, height, x, y,speedX,speedY, src,thisChild) {
		Extend(this,new Mobile(width, height, x,y,speedX,speedY,GetThis(this,thisChild)),GetThis(this,thisChild));
		this.image = new Image();
		this.image.src = src;
		 
		this.update = function(){
			this.ctx.drawImage(this.image, this.x, this.y,this.width,this.height);
		}
	}

	
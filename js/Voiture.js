
	var Voiture = function (width, height, x, y,speedX,speedY, src,roue1,roue2,phare1,phare2,thisChild) {
		Extend(this,new ImageMobile(width, height, x, y,speedX,speedY, src,GetThis(this,thisChild)),GetThis(this,thisChild));
		this.roue1 = roue1;
		this.roue2 = roue2;
		this.phare1 = phare1;
		this.phare2 = phare2;
	
		this.update = function(){
			this.ctx.drawImage(this.image, this.x, this.y,this.width,this.height);
			this.roue1.update();
			this.roue2.update();
			this.phare1.update();
			this.phare2.update();
		}
		this.setSpeedX = function(speedX){
			this.speedX = speedX;
			this.roue1.speedX = speedX;
			this.roue1.speedAngle = speedX;
			this.roue2.speedX = speedX;
			this.roue2.speedAngle = speedX;
			this.phare1.speedX = speedX;
			this.phare2.speedX = speedX;
		}
		this.tournerRoues = function(){		
			this.roue1.tourner();
			this.roue2.tourner();
		}
		this.deplacer = function(){
			this.x += this.tickX;
			//this.y += this.tickY;
			this.roue1.deplacer();
			this.roue2.deplacer();
			this.phare1.deplacer();
			this.phare2.deplacer();
		}
		this.avancer = function(){
			this.tickX = this.speedX; 	
			this.tickY = 0;
			this.roue1.avancer();
			this.roue2.avancer();
			this.phare1.avancer();
			this.phare2.avancer();
		}
		this.reculer = function(){
			
			this.tickX = -this.speedX;
			this.tickY = 0;
			this.roue1.reculer();
			this.roue2.reculer();
			this.phare1.reculer();
			this.phare2.reculer();
		}
		this.monter = function () {
			this.tickY = -this.speedY;
			//this.tickX = 0;
			this.y += this.tickY;
			this.roue1.monter();
			this.roue2.monter();
			this.phare1.monter();
			this.phare2.monter();
		}
		this.descendre = function () {
			this.tickY = this.speedY; 	
			this.y += this.tickY;
			this.roue1.descendre();
			this.roue2.descendre();
			this.phare1.descendre();
			this.phare2.descendre();
		}
		this.stop = function(){
			this.tickX = 0;
			this.tickY = 0;
			this.roue1.stop();
			this.roue2.stop();
			this.phare1.stop();
			this.phare2.stop();
		}

	}

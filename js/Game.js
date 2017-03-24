
// width = 480, height = 270 time=20
var Game = function(width,height,speedX){
	var me ={};
	me.sonBackground = $("#son-background")[0];
	me.songRouler = $("#son-rouler")[0];
	me.songBouger = $("#son-mov")[0];
	me.sonCrash = $("#son-crash")[0];


	me.canvas = $("#jeu").get(0);
	me.canvas.width = width;
	me.canvas.height = height;
	me.ctx = me.canvas.getContext("2d");
	me.speedX = speedX;
	me.clear = function() {
		me.ctx.clearRect(0, 0, me.canvas.width, me.canvas.height);
	}
	me.jouerSon = function (son){
		son.play();
	}
	me.stopSon = function (son){
		son.pause();
	}
	me.setSpeedX = function(speed){
		var direction = me.car.tickX+0;
		me.trees.speedX = 2*speed*(me.trees.speedX/Math.abs(me.trees.speedX));
		me.dash.speedX = speed*(me.dash.speedX/Math.abs(me.dash.speedX))+1;
		me.car.setSpeedX(speed*(me.car.speedX/Math.abs(me.car.speedX)));
		if(direction >=0){
			me.avancer();
		}else{
			me.reculer();
		}
	}
	me.stop = function(){
		me.car.stop();
		me.trees.stop();
		me.dash.stop();
		me.stopSon(me.songRouler);
		me.stopSon(me.sonBackground);
	}
	me.reculer = function(){
		me.car.reculer();								
		me.trees.avancer();
		me.dash.avancer();
		me.jouerSon(me.songRouler);
	}
	me.avancer = function () {
		me.jouerSon(me.songRouler);
		me.jouerSon(me.sonBackground);
		me.sonBackground.volume = 0.4;
		me.songRouler.volume = 1;

		me.car.avancer();
		me.trees.reculer();
		me.dash.reculer();
	}
	me.monter = function () {
		if(me.car.roue1.y-me.car.speedY >= me.line2.y){
			me.jouerSon(me.songBouger);
			me.car.monter();			
		}else{
			me.jouerSon(me.sonCrash);
		}
	}
	me.descendre = function () {
		if(me.car.roue1.y+me.car.roue1.height/2+me.car.speedY<=me.canvas.height){
			me.jouerSon(me.songBouger);
			me.car.descendre();			
		}else{
			me.jouerSon(me.sonCrash);
		}
	}
	me.bouger = function () {
		if(me.car.tickX >0){
			me.avancer();
		}else{
			me.reculer();
		}
	}

	me.playPause = function(son){
		if (son.paused) {
			son.play();
		}
		else {
			son.pause();
		}
	}

	me.startGame = function () {
		var x = 250, y = 20;
		//trees_full.png
		me.trees = new Fond(width,250,0,1,me.speedX,2,"images/fond.jpg",true);
		me.trees.ctx = me.ctx;

		me.line1 = new Rectangle(width,5,0,250,"rgb(165,42,42)");
		me.line1.ctx = me.ctx;

		me.line2 = new Rectangle(width,5,0,260,"rgb(165,42,42)");
		me.line2.ctx = me.ctx;

		me.dash = new Bande(width,7,0,325,me.speedX,2,"rgb(255,255,255)",true);
		me.dash.ctx = me.ctx;

		me.roue1 = new Roue(37, 37, x+40, y+340,me.speedX,2, "images/roue.png",1,true);
		me.roue1.ctx = me.ctx;

		me.roue2 = new Roue(37, 37, x+160, y+340,me.speedX,2, "images/roue.png",1,true);
		me.roue2.ctx = me.ctx;

		me.phare1 = new Phare(200,80,x+180,y+320,me.speedX,2,"rgba(255,255,255,0.6)","right",true);
		me.phare1.ctx = me.ctx;

		me.phare2 = new Phare(200,80,x+15,y+330,me.speedX,2,"rgba(255,255,255,0.6)","left",true);
		me.phare2.ctx = me.ctx;

		me.car = new Voiture(175, 70, x+10, y+280,me.speedX,2, "images/car.png",me.roue1,me.roue2,me.phare1,me.phare2,true);
		me.car.ctx = me.ctx;		

		me.start();
	}
	me.updateGameArea = function () {
		me.clear();

		me.trees.deplacer();
		me.trees.update();

		me.line1.update();

		me.line2.update();

		me.dash.deplacer();
		me.dash.update();

		me.car.tournerRoues();
		me.car.update();
	}
	me.start = function() {
		me.interval = setInterval(me.updateGameArea, 20);
	}
	return me;
}

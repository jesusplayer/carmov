
$(document).ready(function(){

	var vitesse = $("#vitesse").get(0).value;
	$("#output").text(vitesse);
	

	var game = new Game(900,400,parseInt(vitesse));
	game.startGame();


	$("#vitesse").change(function(){
		game.setSpeedX(parseInt(this.value));
	});


	$("#btn-play-pause").click(function(){
		game.stop();
	});

	$("#btn-prec").click(function(){			
		game.reculer();										
	});
	$("#btn-next").click(function(){
		game.avancer();	
	})
	$("#btn-bottom").click(function(){
		game.descendre();		
	});
	$("#btn-top").click(function(){
		game.monter();	
	});
	$("#phare-g").click(function(){			
		game.phare2.changerStatus();	
	});
	$("#phare-d").click(function(){
		game.phare1.changerStatus();
	});
	$(document).bind('keydown',function(e){
		key  = e.keyCode;
		if(key == 37){
			game.reculer();	
		}else if(key == 38){
			game.monter();	
		}else if(key == 39){
			game.avancer();
		}else if(key == 40){
			game.descendre();
		}
	});

});

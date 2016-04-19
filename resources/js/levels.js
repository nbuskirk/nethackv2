scene1 = new Array();
scene1[0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
scene1[1] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0];
scene1[2] = [0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0];
scene1[3] = [0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0];
scene1[4] = [0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
scene1[5] = [0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0];
scene1[6] = [0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0];
scene1[7] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

Crafty.c("level1",{
	init:function(){
		logtext('init called: scene1');
		tilesx = Crafty.canvas._canvas.width / tilew;
		tilesy = Crafty.canvas._canvas.height / tilew;
		for(x=0;x<tilesx;x++){ 
			for(y=0;y<tilesy;y++){
				switch(scene1[y][x]){
					case 0:
						Crafty.e("2D,Canvas,spr_blank, solid").attr({x:x*32,y:y*32});
						break;
					case 1:
						if(Crafty.math.randomInt(0, 10) > 9){
							Crafty.sprite(tilew, "resources/sprites/gamesprites.jpg", {
								spr_mob: [Crafty.math.randomInt(0, 22),Crafty.math.randomInt(0, 9)]	
							})
							Crafty.e("2D,Canvas,spr_floor1").attr({x:x*32,y:y*32,z:1});
							var mob = Crafty.e("monster").attr({x:x*32,y:y*32,z:2});	
								
						}else {							
							Crafty.e("2D,Canvas,spr_floor1").attr({x:x*32,y:y*32,z:1});
						}
						break;
					case 2:
						Crafty.e("2D,Canvas,spr_bush").attr({x:x*32,y:y*32});
						break;
					case 3:
						Crafty.e("2D,Canvas, spr_dirt").attr({x:x*32,y:y*32});
						break;
				};
			}
		}
		//Crafty.audio.play("intro",-1);
	}
})
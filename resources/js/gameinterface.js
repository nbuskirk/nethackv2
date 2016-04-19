Crafty.c("gameinterface",{
	
	init:function(){
		
	},
	
	updateinterface:function(){
		Crafty('spr_heart').destroy();
		for(i=1;i<Math.ceil(this.hp.current/25)+1;i++){				
			Crafty.e("2D, Canvas, spr_heart").attr({x:i*20,y:20,z:2});
		}		
	}
});
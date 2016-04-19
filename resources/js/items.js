Crafty.c("potion",{ 
	init:function(){
		logtext('potion dropped..');
		this.requires("2D, Canvas, Collision, spr_potion")	  
       .onHit("hero",function(ent){
            var player = ent[0].obj;
            Crafty(player[0]).hp.current+=50;
			Crafty(player[0]).updateinterface();
			this.destroy();
        })
	}
});
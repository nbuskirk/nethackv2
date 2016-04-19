Crafty.c("monster",{ 

	init:function(){
		
		this.hp=Crafty.math.randomInt(10, 50);
		this.power=Crafty.math.randomInt(1, 2);
		this.potionchance = Crafty.math.randomInt(1,4);
		
		this.requires("2D, Canvas, Collision, blink, spr_mob")	  
       
       .onHit("hero",function(ent){
            var player = ent[0].obj;
            Crafty(player[0]).hurt(this.power);
            this.hurt(player.power);
            this.playerfacing = player.playerfacing;
            switch(player.playerfacing){
		    		case 'up':
		    			player.y+=32;
		    			this.y-=32;
		    			break;
		    		case 'down':
		    			player.y-=32;
		    			this.y+=32;
		    			break;
		    		case 'left':
    					player.x+=32;
    					this.x-=32;
		    			break;
		    		case 'right':
		    			player.x-=32;
		    			this.x+=32;
		    			break;
	        }
        })
        .onHit("solid",function(ent){         	
       		 switch(this.playerfacing){
		    		case 'up':
		    			
		    			this.y+=32;
		    			break;
		    		case 'down':
		    			
		    			this.y-=32;
		    			break;
		    		case 'left':
    					
    					this.x+=32;
		    			break;
		    		case 'right':
		    			
		    			this.x-=32;
		    			break;
	        }
        })
        return this;
	},
	hurt:function(dmg){
		this.blink = true;
		this.hp -= dmg;
        if(this.hp <= 0) this.die();
	},
	die:function(){
		this.destroy();
		logtext("Killed monster ID: "+this[0]);
		Crafty.e("explode").attr({x:this.x,y:this.y,z:1,potionchance:this.potionchance}).animate("explode1",1,0);
	}
})

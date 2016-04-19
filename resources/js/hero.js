Crafty.c("hero",{ 
	hp:{
        current:100,
        max:200
    },
	weapon:'fireball',
	
	power:1,
	playerfacing:'down',
	
	init:function(){ 
		this.requires("SpriteAnimation, Collision, spr_player, 2D, Canvas, gameinterface")
		.animate("walk_left", 6, 5, 8)
  		.animate("walk_right", 6, 6, 8)
 		.animate("walk_up", 6, 7, 8)
  		.animate("walk_down", 6, 4, 8)
		
		.bind("NewDirection",
			function (direction) {	
						
				if (direction.x < 0) {
					if (!this.isPlaying("walk_left"))
						this.stop().animate("walk_left", 3, -1);
						this.playerfacing = 'left';
				}
				if (direction.x > 0) {
					if (!this.isPlaying("walk_right"))
						this.stop().animate("walk_right", 3, -1);
						this.playerfacing = 'right';
				}
				if (direction.y < 0) {
					if (!this.isPlaying("walk_up"))
						this.stop().animate("walk_up", 3, -1);
						this.playerfacing = 'up';
				}
				if (direction.y > 0) {
					if (!this.isPlaying("walk_down"))
						this.stop().animate("walk_down", 3, -1);
						this.playerfacing = 'down';
				}
				if(!direction.x && !direction.y) {
					this.stop();
				}
		})
		.bind('Moved', function(from) { 		
            if(this.x+this.w > Crafty.viewport.width ||
                this.x+this.w < this.w || 
                this.y+this.h < this.h || 
                this.y+this.h > Crafty.viewport.height || this.preparing){
                this.attr({ 
                    x:from.x, 
                    y:from.y
                });
            }
            if(this.hit('solid')){
				this.attr({x:from.x,y:from.y});
			}			
        })
  		.onHit("monster",function(ent){ 
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
  		.onHit("solid",function(ent){ 
  			switch(this.playerfacing){
		    		case 'up':
		    			
		    			this.y-=32;
		    			break;
		    		case 'down':
		    			
		    			this.y+=32;
		    			break;
		    		case 'left':
    					
    					this.x-=32;
		    			break;
		    		case 'right':
		    			
		    			this.x+=32;
		    			break;
	        }

  		})
        .bind("KeyDown",function(e){ 
        	if(e.keyCode === Crafty.keys.SPACE){
        		this.fire(e);
        	}       	
    	})
	return this;	
	},
	fire:function(e){
		
       		switch(this.playerfacing){
	    		case 'up':
	    			Crafty.e('fireball').attr({x:this.x,y:this.y,z:2,direction:this.playerfacing,speed:3,startx:this.x,starty:this.y}).animate("explode1",3,-1);
	    			break;
	    		case 'down':
	    			Crafty.e('fireball').attr({x:this.x,y:this.y,z:2,direction:this.playerfacing,speed:3,startx:this.x,starty:this.y}).animate("explode1",3,-1);
	    			break;
	    		case 'left':
	    			Crafty.e('fireball').attr({x:this.x,y:this.y,z:2,direction:this.playerfacing,speed:3,startx:this.x,starty:this.y}).animate("explode1",3,-1);
	    			break;
	    		case 'right':
	    			Crafty.e('fireball').attr({x:this.x,y:this.y,z:2,direction:this.playerfacing,speed:3,startx:this.x,starty:this.y}).animate("explode1",3,-1);
	    			break;
        	
        }
	},
	hurt:function(dmg){
			this.hp.current-=dmg;
			this.updateinterface();
            if(this.hp.current <= 0) this.die();
	},
	die:function() {
		logtext('You has died.'); 
		this.destroy();
		$("canvas").fadeOut('slow',function(){ 
			Crafty.scene("gameover");
		});
	}
});
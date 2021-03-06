Crafty.c("fireball",{
    init:function(){
    	
        this.addComponent("2D","Canvas","explosion1","SpriteAnimation", "Collision")
        .animate("explode1",1,0,2)
        .animate("explode2",0,0,10)
        .animate("explode3",2,0,10)
        
        .bind("AnimationEnd",function(){
            this.destroy();
        })
        .bind("EnterFrame",function(){        
        	switch(this.direction){
        		case 'up':
        			this.y-=this.speed;
        			break;
        		case 'down':
        			this.y+=this.speed;
        			break;
        		case 'left':
        			this.x-=this.speed;
        			break;
        		case 'right':
        			this.x+=this.speed;
        			break;
        	}

      })
      .onHit("solid",function(ent){ 
      		var wall = ent[0].obj;
      		switch(this.direction){
        		case 'up':
        			this.y=wall.y+32;
        			break;
        		case 'down':
        			this.y=wall.y-32;
        			break;
        		case 'left':
        			this.x=wall.x+32;
        			break;
        		case 'right':
        			this.x=wall.x-32;
        			break;
        	}
        	this.animate("explode3",3,0)
      })
      .onHit("monster",function(ent){
            var monster = ent[0].obj;
            Crafty(monster[0]).hurt(2);
            this.animate("explode2",3,1)
			
       })
    }
});
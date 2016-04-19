Crafty.c("blink",{
	blink:false,	
	init:function(){
		this.bind("EnterFrame",function(frame){
			if(this.blink == false){
				this.alpha = 1.0;
			}
			if(frame.frame % 5 == 0 && this.blink){			
				if(this.alpha == 0.0){
					this.alpha = 1.0;
					
				}else {
					this.alpha = 0.0;
				}			
			}else if(frame.frame % 5 != 0 ){
				this.blink = false;
				$("#cr-stage").css("border-color","#222");
			}		
		});
	}
});


Crafty.c("explode",{
    init:function(){
        this.addComponent("2D","Canvas","explosion1","SpriteAnimation")
        .animate("explode1",0,0,10)
        .bind("AnimationEnd",function(){
            this.destroy();
            if(this.potionchance>3){
            	Crafty.e("potion").attr({x:this.x,y:this.y,z:1});
            }
        });
        
    }
});
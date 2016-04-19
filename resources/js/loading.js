Crafty.scene("loading", function() { 
	Crafty.load(["resources/sprites/gamesprites.jpg","resources/sprites/playersprites.png","resources/sprites/interfacesprites.png","resources/sprites/effectsprites.png","resources/sprites/gameover.png"], function(){ 
	$("canvas").fadeOut('slow',function(){ 		
			Crafty.scene("main");		
		});
	});	
});
Crafty.scene("main", function(){ 
	Crafty.background("#000");
	$("canvas").fadeIn('slow');
	Crafty.e("level1");
	player = Crafty.e("hero, gamecontrols, Keyboard").attr({x:256,y:64,z:3,movementSpeed:1}).gamecontrols().updateinterface();
	
});

Crafty.scene("gameover",function(){
	Crafty.background("url(resources/sprites/gameover.png)");
	$("canvas").fadeIn('slow');
});


Crafty.c("gamecontrols", {

	init: function() {
		this.requires('Multiway')
		
	},
	
	gamecontrols: function() {
		this.multiway(this.movementSpeed, {W: -90, S: 90, D: 0, A: 180, UP_ARROW:-90, DOWN_ARROW:90,LEFT_ARROW:180,RIGHT_ARROW:0})
		return this;
	},
});
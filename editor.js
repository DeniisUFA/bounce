function Editor () {

	
	this.draw = function () {
		game.clear();
	};
	
	this.update = function () {
		
	};
}

var editor = new Editor();

game.newLoop('editor', function () {
	
	editor.draw();
	editor.update();
	
});
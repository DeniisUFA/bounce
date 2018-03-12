function Menu () {
	var toEditor = game.newTextObject({
		text : 'Редактор уровней',
		size : 30,
		color : 'red'
	});
	
this.draw = function() {
	game.clear();
	toEditor.draw();
};
	
this.update = function() {
	if (mouse.isPeekObject('LEFT', toEditor)) {
		game.setLoop('editor');
		}
};
	
}

var menu = new Menu();

game.newLoop('menu', function () {
	
menu.draw();	
menu.update();	
	
});
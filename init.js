var pjs = new PointJS('2D', 400, 400, {
	backgroundColor : '#110793'			  
});
pjs.system.initFullPage();
			
var log = pjs.system.log;
var game = pjs.game;
var point = pjs.vector.point;
var camera = pjs.camera;
var brush = pjs.brush;
var OOP = pjs.OOP;
var math = pjs.math;

//var key = pjs.keyControl;
//key.initKeyControl();
			
var mouse = pjs.mouseControl;
mouse.initMouseControl();
			
//var touch = pjs.touchControl;
//touch.initTouchControl();
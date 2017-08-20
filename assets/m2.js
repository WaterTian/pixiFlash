(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 800,
	fps: 30,
	color: "#006633",
	manifest: []
};



// symbols:



(lib.background = function() {
	this.spriteSheet = ss["m2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.leaves = function() {
	this.spriteSheet = ss["m2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["m2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.play = function() {
	this.spriteSheet = ss["m2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.settings = function() {
	this.spriteSheet = ss["m2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.p4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.settings();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,223,38);


(lib.p3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.play();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,109,39);


(lib.p2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,459,162);


(lib.p1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.leaves();
	this.instance.setTransform(-250,0,0.96,0.96);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-250,0,500,250.5);


(lib.mc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p1();
	this.instance.setTransform(0,125.2,1,1,0,0,0,0,125.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.5},6,cjs.Ease.get(1)).to({rotation:-4.7},8,cjs.Ease.get(1)).to({rotation:1},5,cjs.Ease.get(1)).to({rotation:0},5,cjs.Ease.get(1)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,0,500,250.5);


// stage content:



(lib.m2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_24 = new cjs.Graphics().p("EAOSA4QQgogMgvgUQhfgoglglQgmgmhkgyIhdgqIhaAeQgMghgRgoQgkhQgZglQgZgmAABfQABAvAFA4QgrgQg6gQQh2gghPgGQhSgHixA6IihA7IATvzMApFAAeIgKH+IiCAoIhui0IhQAoIhuEjIhaCWIi1BPIjSC0IiLCgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_24,x:219.6,y:369.1}).wait(37));

	// Layer 2
	this.instance = new lib.p4();
	this.instance.setTransform(308.1,751.1,1,1,0,0,0,111.5,19);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({y:639.1},10,cjs.Ease.get(1)).to({y:655.1},7,cjs.Ease.get(1)).wait(20));

	// play.png
	this.instance_1 = new lib.p3();
	this.instance_1.setTransform(298.4,525.6,4.45,4.45,0,0,0,54.5,19.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({regX:54.6,regY:19.4,scaleX:0.95,scaleY:0.95,x:298.5,alpha:1},9,cjs.Ease.get(1)).to({regX:54.5,regY:19.5,scaleX:1,scaleY:1,x:298.4},6).wait(33));

	// play.png
	this.instance_2 = new lib.p3();
	this.instance_2.setTransform(298.4,525.6,1,1,0,0,0,54.5,19.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({scaleX:2.06,scaleY:2.06,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(33));

	// logo.png
	this.instance_3 = new lib.p2();
	this.instance_3.setTransform(499.5,-161.5,1,1,0,0,0,458.5,161.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:537.5,y:438.5,alpha:1},9,cjs.Ease.get(1)).to({y:398.5},7,cjs.Ease.get(1)).to({y:406.5},6).wait(39));

	// leaves.png
	this.instance_4 = new lib.mc1();
	this.instance_4.setTransform(318,334.5,1,1,0,0,0,0,250.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(61));

	// background.jpg
	this.instance_5 = new lib.background();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,77,640,1123);

})(pixiflash_lib = pixiflash_lib||{}, pixiflash_images = pixiflash_images||{}, pixiflash = pixiflash||{}, ss = ss||{});
var pixiflash_lib, pixiflash_images, pixiflash, ss;
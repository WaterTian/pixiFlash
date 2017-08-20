var canvas;
var renderer, stage;
var stats;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;


function init() {

    renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
        transparent: true,
    });
    canvas = renderer.view;
    var canvasBox = document.getElementById('canvasBox');
    canvasBox.appendChild(canvas)

    stage = new PIXI.Container();

    // Don't prevent default
    // renderer.plugins.interaction.autoPreventDefault = false;

    // Load the spritesheet data
    $.getJSON("assets/m2_atlas_.json", function(data) {
        // Load the atlas for the character
        pixiflash.SpriteSheet.fromData(data, function() {
            // Create the character
            var mc = new pixiflash_lib.m2();
            mc.framerate = 30;
            mc.play();
            var _pX = window.innerWidth / 640;
            mc.scaleX = _pX;
            mc.scaleY = _pX;
            console.log(_pX);

            stage.addChild(mc);
        });
    });


    var mc1 = new pixiflash_lib.m1();
    mc1.framerate = 30;
    var _pX = window.innerWidth / 640;
    mc1.scaleX = _pX;
    mc1.scaleY = _pX;
    mc1.position.y = 400;
    setTimeout(function() {
        stage.addChild(mc1);
        mc1.alpha = 0;
        createjs.Tween.get(mc1).to({
            alpha: 1
        }, 1000);
        createjs.Tween.get(mc1).wait(200).to({x:-100,y:0}, 10000)

    }, 2000)

    // STATS
    stats = new Stats();
    canvasBox.appendChild(stats.dom);

    animate();
}



function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
    stats.update();
}
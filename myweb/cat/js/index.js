/**
 * Created by DingS on 2016/5/16 .
 */
//var gameView=document.getElementById("gameView");
var stage = new createjs.Stage("gameView");
var gameView = new createjs.Container();
stage.addChild(gameView);
stage.update();

var s = new createjs.Shape();
s.graphics.beginFill("#FF0000");
s.graphics.drawCircle(50,50,25);
s.graphics.endFill();
gameView.addChild(s);

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);

/**
 * Created by DingS on 2016/5/17 .
 */
function Circle() {
    createjs.Shape.call(this);
    this.setCircleType = function (type) {
        this._circleType = type;
        switch (type) {
            case Circle.TYPE_UNSELECTED:
                this.setColor("#ccc");
                break;
            case Circle.TYPE_SELECTED:
                this.setColor("#ff6600");
                break;
            case Circle.TYPE_CAT:
                this.setColor("#0000ff");
                break;
            default:
                alert("错误");
        }
    }

    //this.drawImage =  function drawImage() {
        //this.graphics.beginFill(colorString);
        //var image = new Image("./images/g.jpg");
        //alert(image);
        //this.graphics.drawImage(image, 0, 0);
        //this.graphics.drawImage(image,0,0);
        //this.graphics.endFill();
        //this.graphics.update();
    //}

    this.setColor = function (colorString) {
        //if(colorString=="#000000"){
            this.graphics.beginFill(colorString);
            this.graphics.drawCircle(0, 0, 25);
            this.graphics.endFill();
            //this.graphics.update();
        //}else{
            //var image = new Image("./images/g.jpg");
            //alert(image);
            //this.graphics.drawImage(image, 0, 0);
            //this.graphics.drawCircle(0, 0, 25);
            //this.graphics.endFill();
            //alert(0);
        //}

    }

    this.getType = function () {
        return this._circleType;
    }
    this.setCircleType(1);
}

Circle.prototype = new createjs.Shape();
Circle.TYPE_UNSELECTED = 1;
Circle.TYPE_SELECTED = 2;
Circle.TYPE_CAT = 3;

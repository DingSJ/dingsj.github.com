/**
 * Created by DingS on 2016/5/16 .
 */

var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(5);
createjs.Ticker.addEventListener("tick", stage);

var gameView = new createjs.Container();
gameView.x = 30;
gameView.y = 30;
stage.addChild(gameView);

var circleArr = [[], [], [], [], [], [], [], [], []];
var currentCat;
var MOVE_NONE = -1, MOVE_LEFT = 0, MOVE_UP_LEFT = 1, MOVE_UP_RIGHT = 2, MOVE_RIGHT = 3, MOVE_DOWN_RIGHT = 4, MOVE_DOWN_LEFT = 5;


function getMoveDir(cat) {
    var can = true;
    var distanceMap = [];
    //left
    for (var x = cat.indexX; x >= 0; x--) {
        if (circleArr[x][cat.indexY].getType() == Circle.TYPE_SELECTED) {
            can = false;
            distanceMap[MOVE_LEFT] = cat.indexX - x;
            break;
        }
    }
    if (can) {
        return MOVE_LEFT;
    }

    //left up
    can = true;
    var x = cat.indexX, y = cat.indexY;
    while (true) {
        if (circleArr[x][y].getType() == Circle.TYPE_SELECTED) {
            can = false;
            distanceMap[MOVE_UP_LEFT] = cat.indexY - y;
            break;
        }
        if (y % 2 == 0) {
            x--;
        }
        y--;
        if (y < 0 || x < 0) {
            break;
        }
    }
    if (can) {
        return MOVE_UP_LEFT;
    }


    //right up
    can = true;
    var x = cat.indexX, y = cat.indexY;
    while (true) {
        if (circleArr[x][y].getType() == Circle.TYPE_SELECTED) {
            can = false;
            distanceMap[MOVE_UP_RIGHT] = cat.indexY - y;
            break;
        }
        if (y % 2 == 1) {
            x++;
        }
        y--;
        if (y < 0 || x > 8) {
            break;
        }
    }
    if (can) {
        return MOVE_UP_RIGHT;
    }

    //right
    var can = true;
    //left
    for (var x = cat.indexX; x < 9; x++) {
        if (circleArr[x][cat.indexY].getType() == Circle.TYPE_SELECTED) {
            can = false;
            distanceMap[MOVE_RIGHT] = x - cat.indexX;
            break;
        }
    }
    if (can) {
        return MOVE_RIGHT;
    }

    //right down
    can = true;
    var x = cat.indexX, y = cat.indexY;
    while (true) {
        if (circleArr[x][y].getType() == Circle.TYPE_SELECTED) {
            can = false;
            distanceMap[MOVE_DOWN_RIGHT] = y - cat.indexY;
            break;
        }
        if (y % 2 == 1) {
            x++;
        }
        y++;
        if (y > 8 || x > 8) {
            break;
        }
    }
    if (can) {
        return MOVE_DOWN_RIGHT;
    }

    //left down
    can = true;
    x = cat.indexX, y = cat.indexY;
    while (true) {
        if (circleArr[x][y].getType() == Circle.TYPE_SELECTED) {
            can = false;
            distanceMap[MOVE_DOWN_LEFT] = y - cat.indexY;
            break;
        }

        if (y % 2 == 0) {
            x--;
        }
        y++;
        if (y > 8 || x < 0) {
            break;
        }
    }
    if (can) {
        return MOVE_DOWN_LEFT;
    }

    var maxDir = -1, maxValue = -1;
    for (var dir = 0; dir < distanceMap.length; dir++) {
        if (distanceMap[dir] > maxValue) {
            maxValue = distanceMap[dir];
            maxDir = dir;
        }
    }
    if (maxValue > 1) {
        return maxDir;
    } else {
        return MOVE_NONE;
    }

}

function circleClicked(e) {

    if (currentCat.indexX == 0 || currentCat.indexY == 0 || currentCat.indexX == 8 || currentCat.indexY == 8) {
        alert("游戏结束！");
        return;
    }


    if (e.target.getType() != Circle.TYPE_CAT) {
        e.target.setCircleType(Circle.TYPE_SELECTED);
    } else {
        return;
    }


    var dir = getMoveDir(currentCat);

    switch (dir) {
        case MOVE_LEFT:
            currentCat.setCircleType(Circle.TYPE_UNSELECTED);
            currentCat = circleArr[currentCat.indexX - 1][currentCat.indexY];
            currentCat.setCircleType(Circle.TYPE_CAT);
            break;
        case MOVE_UP_LEFT:
            currentCat.setCircleType(Circle.TYPE_UNSELECTED);
            currentCat = circleArr[currentCat.indexY % 2 ? currentCat.indexX : currentCat.indexX - 1][currentCat.indexY - 1];
            currentCat.setCircleType(Circle.TYPE_CAT);
            break;
        case MOVE_UP_RIGHT:
            currentCat.setCircleType(Circle.TYPE_UNSELECTED);
            currentCat = circleArr[currentCat.indexY % 2 ? currentCat.indexX + 1 : currentCat.indexX][currentCat.indexY-1];
            currentCat.setCircleType(Circle.TYPE_CAT);
            break;
        case MOVE_RIGHT:
            currentCat.setCircleType(Circle.TYPE_UNSELECTED);
            currentCat = circleArr[currentCat.indexX + 1][currentCat.indexY];
            currentCat.setCircleType(Circle.TYPE_CAT);
            break;
        case MOVE_DOWN_RIGHT:
            currentCat.setCircleType(Circle.TYPE_UNSELECTED);
            currentCat = circleArr[currentCat.indexY % 2 ? currentCat.indexX + 1 : currentCat.indexX][currentCat.indexY + 1];
            currentCat.setCircleType(Circle.TYPE_CAT);
            break;
        case MOVE_DOWN_LEFT:
            currentCat.setCircleType(Circle.TYPE_UNSELECTED);
            currentCat = circleArr[currentCat.indexY % 2 ? currentCat.indexX : currentCat.indexX - 1][currentCat.indexY + 1];
            currentCat.setCircleType(Circle.TYPE_CAT);
            break;
        default:
            alert("游戏结束");
    }
    //
    //var leftCircle = circleArr[currentCat.indexX - 1][currentCat.indexY];
    //var rightCircle = circleArr[currentCat.indexX + 1][currentCat.indexY];
    //var rightTopCircle = circleArr[currentCat.indexX][currentCat.indexY - 1];
    //var leftTopCircle = circleArr[currentCat.indexX - 1][currentCat.indexY - 1];
    //var rightButtomCircle = circleArr[currentCat.indexX][currentCat.indexY + 1];
    //var leftButtomCircle = circleArr[currentCat.indexX - 1][currentCat.indexY + 1];
    //
    //if (leftCircle.getType() == 1) {
    //    leftCircle.setCircleType(3);
    //    currentCat.setCircleType(1);
    //    currentCat = leftCircle;
    //}else if (rightCircle.getType() == 1) {
    //    rightCircle.setCircleType(3);
    //    currentCat.setCircleType(1);
    //    currentCat = rightCircle;
    //}else if (rightTopCircle.getType() == 1) {
    //    rightTopCircle.setCircleType(3);
    //    currentCat.setCircleType(1);
    //    currentCat = rightTopCircle;
    //}else if (leftTopCircle.getType() == 1) {
    //    leftTopCircle.setCircleType(3);
    //    currentCat.setCircleType(1);
    //    currentCat = leftTopCircle;
    //}else if (rightButtomCircle.getType() == 1) {
    //    rightButtomCircle.setCircleType(3);
    //    currentCat.setCircleType(1);
    //    currentCat = rightButtomCircle;
    //}else if (leftButtomCircle.getType() == 1) {
    //    leftButtomCircle.setCircleType(3);
    //    currentCat.setCircleType(1);
    //    currentCat = leftButtomCircle;
    //}else{
    //    alert("游戏结束");
    //}
}

function addCircles() {
    for (var indexY = 0; indexY < 9; indexY++) {
        for (var indexX = 0; indexX < 9; indexX++) {
            var c = new Circle();
            gameView.addChild(c);
            circleArr[indexX][indexY] = c;
            c.indexX = indexX;
            c.indexY = indexY;
            c.x = indexY % 2 ? indexX * 55 + 25 : indexX * 55;
            c.y = indexY * 55;

            if (indexX == 4 && indexY == 4) {
                c.setCircleType(3);
                currentCat = c;
            } else if (Math.random() < 0.1) {
                c.setCircleType(Circle.TYPE_SELECTED);
            }
            c.addEventListener("click", circleClicked);
        }
    }
}
addCircles();

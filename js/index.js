/**
 * Created by DingS on 2016/5/16 .
 */

$(document).ready(function () {
    $("#face").hide();
});

$(document).ready(function () {
    var date = new Date();
    var y = date.getFullYear();//年
    var m = date.getMonth() + 1;//月
    var d = date.getDate();   // 日
    var w = date.getDay(); //星期
    switch (w) {
        case 1:
            w = "星期一";
            break;
        case 2:
            w = "星期二";
            break;
        case 3:
            w = "星期三";
            break;
        case 4:
            w = "星期四";
            break;
        case 5:
            w = "星期五";
            break;
        case 6:
            w = "星期六";
            break;
        case 0:
            w = "星期日";
            break;
        default:
            w = null;
    }
    date = "今天是" + y + "年" + m + "月" + d + "日" + "  " + w;
    //alert(date);
    $(".span_time").text(date);
});

$(document).ready(function () {
     $("#game_play").hide();
    //$("#content1").hide();    //首页
    $("#content2").hide();      //音乐
    //$("#content3").hide();      //图片
    $("#content4").hide();      //作者
});
function musicClicked(){
    $("#content1").hide(100);     //首页
    $("#content2").show(2000);      //音乐
}
function imageClicked(){
    $("#content1").hide(100);     //首页
    $("#content2").hide(500);      //音乐
    //$("#content3").show(2000);      //图片
}
function authorClicked(){
    $("#content2").hide(500);      //音乐
    $("#content1").hide(100);     //首页
    //$("#content3").hide(500);      //图片
    $("#content4").show(2000);      //作者
}

function game() {
    $("#game_play").show(500);
}

function game2() {
    $("#game_play").hide(0);
    $("#game_play").show(50);
}

function gameover(){
    $("#game_play").hide(1000);
}

function showMusic(){
    $("#content2").show(1000);      //音乐
}
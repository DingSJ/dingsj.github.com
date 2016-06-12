/**
 * Created by DingS on 2016/6/12 .
 */
var mvInfo = [["一生所爱", "卢冠廷"],
        ["乡恋", "光良"],
        ["演员", "薛之谦"],
        ["前世情人", "周杰伦"],
        ["大鱼", "周深"]];

function changeMV(a) {
    var value = a.text;
    var src = "./mv/" + value + ".mp4";
    //alert(src);

    //获取video的SRC
    var video = document.getElementsByTagName("video")[0];
    //alert(video);
    //var vSource1 = video.getElementsByTagName("source")[0];
    //var vSource2 = video.getElementsByTagName("source")[1];
    ////alert(vSource1 +"====="+ vSource2)
    //
    ////将vSource的SRC替换掉
    //vSource1.src = src;
    //vSource2.src = src;
    //alert(vSource1.src +"====="+ vSource2.src)
    //video.play();

    var spanMVName = document.getElementsByClassName("mv-name")[0].innerHTML = mvInfo[value-1][0];
    var spanMVAuthor = document.getElementsByClassName("mv-author")[0].innerHTML = mvInfo[value-1][1];

    //alert(spanMVName + "-----" + spanMVAuthor);


    video.src = src;
    video.play();
}
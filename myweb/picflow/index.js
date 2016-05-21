/**
 * Created by DingS on 2016/5/14 .
 */
$(document).ready(function () {
    $(window).on("load", function () {
        imgLocation();

        var dataImg = [{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}];
        //alert(01);
        window.onscroll = function() {
            //alert(0);
            if(scrollside()){/*alert(0);*/
                $.each(dataImg.data,function(index,value){
                    //alert(0);
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var img = $("<div>").addClass("img").appendTo(box);
                    alert("./images/"+ $(value).attr("src"));alert(000);
                    $("<img>").attr("src","./images/"+ $(value).attr("src")).appendTo(img);
                });
                //alert(10);
                imgLocation();
                //alert(11);
            }
        }
    });
});


function scrollside(){
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var documentHeight = $(document).height();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight < documentHeight + scrollHeight) ? true : false ;
}

function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width();  //eq(0) --->获取第0个盒子对象
    var num = Math.floor($(window).width() / boxWidth);
    //alert(num);
    var boxArr = [];
    box.each(function (index, value) {
        //alert(index+"---------"+value);
        var boxHight = box.eq(index).height();
        //alert(boxHight);
        if (index < num) {
            boxArr[index] = boxHight;
        } else {
            var minBoxHight = Math.min.apply(null, boxArr);
            //alert(minBoxHight);
            var minBoxIndex = $.inArray(minBoxHight, boxArr);
            //alert(value);
            //alert(1);
            $(value).css({
                "position": "absolute",
                "top": minBoxHight,
                "left": box.eq(minBoxIndex).position().left
            });
          boxArr[minBoxIndex]+= box.eq(index).height();
        }
    });
}

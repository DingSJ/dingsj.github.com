///**
// * Created by DingS on 2016/5/20 .
// */
//var jkcommon = {
//    init: function () {
//        this.lessonImgShow();
//    },
//    stopEventBubble: function (event) {
//        var e = event;
//        if (e) {
//            e.stopPropagation();
//        }
//    },
//    lessonImgShow: function () {
//        $(".classiamgebox").bind("mouseover", function (e) {
//            var _pop = $(this).find('.img-pop');
//            $(this).css({border: "2px solid #1abc9c", width: "226px", height: "226px"});
//            TweenMin.to(_pop, 0.5, {top: 0, ease: Bounce.easeOut});
//            jkcommon.stopEventBubble(e);
//        });
//    }
//}
//
//$(function(){
//jkcommon.init();
//})
//

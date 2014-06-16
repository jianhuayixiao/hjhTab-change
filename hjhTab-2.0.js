/*
* $.fn.hjhTab
* @extends jQuery
* @anthor 迦若
* @version 2.0
* @date 2014-6-16
* @example
* $("test").hjhTab({width: 100, height: 100});
* */

(function($){

    $.fn.hjhTab = function(options){
        var sets = $.extend({}, $.fn.hjhTab.defaults, options);
        return this.each(function(){
            var obj = $(this),
                method,
                size = obj.find(".ul-w ul li").size(),
                cL = obj.find("a.l"),
                cR = obj.find("a.r");
            method = {
                left: function(){//向左
                    var $obj = obj.find("ul"),
                        $fir = $obj.find("li:first");
                    if(!$obj.is(":animated")){
                        $obj.animate({left: -sets.scrollWidth}, sets.speed, function(){
                            $obj.css("left", 0);
                            $obj.append($fir);
                        })
                    }
                },
                right: function(){//向右
                    var $obj = obj.find("ul"),
                        $fir = $obj.find("li:last");
                    $obj.prepend($fir);
                    $obj.css("left", -sets.scrollWidth);
                    if(!$obj.is(":animated")){
                        $obj.prepend($fir);
                        $obj.animate({left: 0}, sets.speed)
                    }
                }
            }
            obj.css({width: sets.width, height: sets.height});
            obj.find(".ul-w").css({width: sets.width, height: sets.height});
            obj.find(".ul-w ul").css({width: sets.scrollWidth * size, height: sets.height});
            cL.bind(sets.type, function(e){
                method.right();
                e.preventDefault();
            });
            cR.bind(sets.type, function(e){
                method.left();
                e.preventDefault();
            });

        });
    }
    $.fn.hjhTab.defaults = {
        width: 'auto',
        height: 'auto',
        scrollWidth: 'auto',
        scrollHeight: 'auto',
        speed: 500,
        type: "click",
        fade: 0.5,
        callback: function(){  }
    };
    $.fn.hjhTab.version = 1.0; //版本号
})(jQuery);
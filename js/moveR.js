'use strict';
define(function(require){
    var fn = require('function');
    return function (obj,json,opition){
        clearInterval(obj.timer);
        opition = opition || {};
        opition.duration = opition.duration || '1000';
        opition.easing = opition.easing || 'linear';
        var start = {};
        var dis = {};
        for (var name in json){
            start[name] = parseFloat(fn.getStyle(obj,name));
            dis[name] = json[name] - start[name];
        }
        var count = Math.floor(opition.duration/30);
        var n = 0;
        obj.timer = setInterval(function() {
            n++;
            for (var name in json) {
                switch(opition.easing){
                    case 'linear':
                        var a = n/count;
                        var cur = dis[name]*a;break;
                    case 'ease-in':
                        var a = n/count;
                        var cur = dis[name]*a*a*a;break;
                    case 'ease-out':
                        var a = 1-n/count;
                        //alert(1-a*a*a);
                        var cur = dis[name]*(1-a*a*a);break;
                }
                if(name == 'opacity'){

                    obj.style.opacity = start[name] + cur;
                    obj.style.filter = 'alpha(opacity:'+ (start[name] + cur )*100 +')';

                } else if(name == 'background'){
                    obj.style.background = json[name];
                }else if(name == 'display'){
                    obj.style.display = json[name];
                }else if(name == 'zIndex'){
                    obj.style.zIndex = json[name];
                }else{
                    obj.style[name] = start[name] + cur +'px';
                }
                if(n == count) {
                    clearInterval(obj.timer);
                    opition.complete && opition.complete();
                }
            }
        },30)
    }
});
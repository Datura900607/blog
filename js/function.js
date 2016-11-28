
define(function(){
    return {
        rnd:function (n,m){
            return parseInt(Math.random()*(m-n)+n)
        },
        getStyle:function (obj,name){
            return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];
        },
        addEVent:function (obj,oEvn,fn){
            if (obj.addEventListener) {
                obj.addEventListener(oEvn,fn,false);
            } else{
                obj.attachEvent('on' + oEvn,function(){
                    fn.call(obj);
                });
            }
        },
        removeEvent:function (obj,oEvn,fn){
            if(obj.removeEventListener){
                obj.removeEventListener(oEvn, fn, false);
            }else{
                obj.detachEvent('on' + oEvn,function(){
                    fn.call(obj);
                });
            }
        },
        getClassName:function (parent,sClass){
            if(document.getElementsByClassName){
                return parent.getElementsByClassName(sClass);
            } else {
                var aELs = parent.getElementsByTagName('*');
                var arr =[];
                for (var i=0;i<aELs.length;i++){
                    var reg = new RegExp('\\b'+sClass+'\\b','i');
                    if(reg.test(aELs[i].className)){
                        arr.push(aELs[i]);
                    }
                }
                return arr;
            }
        },
        addClass:function (obj,sClass){
            function hasClass(obj,sClass){
                var reg=new RegExp('\\b'+sClass+'\\b');
                return reg.test(obj.className);
            }
            if(obj.className){
                if(!hasClass(obj,sClass)){
                    obj.className+=' '+sClass;
                }
            }else{
                obj.className=sClass;
            }
        },
        removeClass:function (obj,sClass){
            function hasClass(obj,sClass){
                var reg = new RegExp('\\b'+sClass+'\\b','i');
                return reg.test(obj.className);
            }
            var reg = new RegExp('\\b'+sClass+'\\b','i');
            if(obj.className){
                if(hasClass(obj,sClass)){
                    obj.className = obj.className.replace(reg,'').replace(/\s+/g,' ').replace(/^\s+|\s+/g,'');
                }
            }
        },
        addWheel:function (obj,fn){
            function addEVent(obj,oEvn,fn){
                if (obj.addEventListener) {
                    obj.addEventListener(oEvn,fn, false);
                } else{
                    obj.attachEvent('on' + oEvn,function(){
                        fn.call(obj);
                    });
                }
            }
            if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1){
                obj.addEventListener('DOMMouseScroll',wheel,false);

            } else {
                addEVent(obj,'mousewheel',wheel);
            }
            function  wheel(ev){
                var oEvent = ev || event;
                var bDown = true;
                if(oEvent.wheelDelta){
                    if(oEvent.wheelDelta >0){
                        bDown = false;
                    } else {
                        bDown = true;
                    }
                } else {
                    if(oEvent.detail < 0 ){
                        bDown = false;
                    } else {
                        bDown = true;
                    }
                }
                fn && fn(bDown);
                oEvent.cancelBubble = true;
                oEvent.preventDefault && oEvent.preventDefault();
            }
        }
    }
});

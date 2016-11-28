function domReady(fn){
    if(document.addEventListener){
        document.addEventListener('DOMContentLoaded',function(){//高版本浏览器
            fn&&fn();
        },false);
    }else {
        document.onreadystatechange = function(){
            if (document.readyState == 'complete'){
                fn&&fn();
            }
        }
    }
}
function  rnd(n,m){
    return parseInt(Math.random()*(m-n)+n);
}
function addEVent(obj,oEvn,fn){
    if (obj.addEventListener) {
        obj.addEventListener(oEvn,fn, false);
    } else{
        obj.attachEvent('on' + oEvn,function(){
            fn.call(obj);
        });
    }
}
domReady(function(){
    //首页文字效果
    (function(){
        var oBox = document.getElementById('yz');
        var timer = null;
        var str = '天行健，君子以自强不息。地势坤，君子以厚德载物。山泉蒙，君子以果行育德。天水讼，君子以作事谋始。风天小畜，君子以懿文德。天火同人，君子以类族辨物。。。';
        var l = 0, t = 0, index = 0;
        for (var i = 0; i < str.length; i++) {
            var oSpan = document.createElement('span');
            oSpan.innerHTML = str.charAt(i);
            oBox.appendChild(oSpan);
            oBox.children[i].style.top = (i%12)*50+'px';
            if((i*50)%600==0){
                index++;
            };
            if((i/(index*10))%10<9){
                oBox.children[i].style.left = (index-1)*50+'px';
            }
        };
        var n = 0;
        timer = setInterval(function(){
            oBox.children[n].style.display = 'block';
            n++;
            if(n == oBox.children.length){
                clearInterval(timer);
            }
        },500)
    })();
    //moreDemo页
    (function(){
        var oDemoConte = document.getElementById('demoContent');
        var arr = [1,2,3,4,5,6,7,8,9,11,22,33,44,55,11,17,18,19,20,99];
        for (var i=0;i<20;i++){
            var oDiv = document.createElement('div');
            oDiv.style.left = rnd(0,750-100) + 'px';
            oDiv.style.top = rnd(40,620-100) + 'px';
            oDiv.style.background = 'rgb('+ rnd(0,256) +','+ rnd(0,256) +','+ rnd(0,256) +')';
            oDiv.innerHTML = arr[i];
            oDiv.className = 'drgdiv';
            oDiv.setAttribute('drag','true');
            oDemoConte.appendChild(oDiv);
        }
        document.onmousedown = function (ev) {
            var oEvent = ev || event;
            var oSrc = oEvent.srcElement || oEvent.target;
            if (oSrc.getAttribute('drag') == 'true'){
                var disX = oEvent.clientX - oSrc.offsetLeft;
                var disY = oEvent.clientY - oSrc.offsetTop;
                document.onmousemove = function (ev) {
                    var oEvent = ev || event;
                    oSrc.style.left = oEvent.clientX - disX + 'px';
                    oSrc.style.top = oEvent.clientY - disY + 'px';

                    oSrc.setCapture && oSrc.setCapture();
                };
                document.onmouseup = function () {
                    document.onmousemove = null ;
                    document.onmouseup = null;

                    oSrc.releaseCapture && oSrc.releaseCapture();
                };
                return false;
            }
        }

    })();
});

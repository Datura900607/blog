'use strict';
define(function(require){
    var fn = require('function');
    var move = require('moveR');
    var demoMo = require('demoMo');
    return {
        //页码切换
        tabMain:function(){
            var oPages = document.getElementById('pages');
            var aCont = fn.getClassName(oPages,'content');
            var oTabMain = document.getElementById('tab_main');
            var aBtn = fn.getClassName(oTabMain,'page_btn');
            var down = true;
            function change(){
                move(oPages,{top:-now*aCont[0].offsetHeight},{duration:300});
                for(var j=0;j<aBtn.length;j++){
                    fn.removeClass(aBtn[j],'active');
                }
                fn. addClass(aBtn[now],'active');
            }

            for (var i=0;i<aBtn.length;i++){
                aBtn[i].index = i;
                aBtn[i].onclick = function(){
                    now = this.index;
                    change();
                };
            }
            var now = 0;
            fn.addWheel(document,function(bDown){
                if (bDown) {
                    if(down){
                        down = false;
                    //alert('滚下去');
                        now++;
                        if(now >= aBtn.length){
                            now = aBtn.length;
                        }else {
                            change();
                        }
                        setTimeout(function(){
                            down = true;
                        },1000);
                    }
                }else {
                    if(down){
                        down = false;
                        now--;
                        if(now<0){
                            now = 0;
                        } else {
                            change();
                        }
                        setTimeout(function(){
                            down = true;
                        },1000);
                    }
                    //alert('滚上来');
                }
            });

        },
        //首页天行健短文蹦子
        txj:function(){
            (function(){
                var oBox = document.getElementById('yz');
                var timer = null;
                var str = '天行健，君子以自强不息.地势坤，君子以厚德载物.云雷屯，君子以经纶.山泉蒙，君子以果行育德.云天需，君子以待阴阳结合.天水讼，君子以作事谋始.地水师，君子以容民畜众.水地比，君子以建万国，亲诸侯.风天小畜，君子以懿文德....';
                var l = 0, t = 0, index = 1;
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
        },
        //第二页demo翻页切换效果
        demo2Page:function(){
            function findInArr(num,arr){
                for(var i=0;i<arr.length;i++){
                    if(arr[i] == num){
                        return true;
                    }
                }
                return false;
            }
            var arr = [{id:'01',url:'aaa',value:'倒计时'},
                {id:'02',url:'bbb',value:'图片时钟'},
                {id:'03',url:'ccc',value:'QQ长图'},
                {id:'04',url:'bbb',value:'双色球'},
                {id:'05',url:'bbb',value:'Div随机变色'},
                {id:'06',url:'bbb',value:'按钮选项卡'},
                {id:'07',url:'bbb',value:'带框拖拽'},
                {id:'08',url:'bbb',value:'克隆拖拽'},
                {id:'09',url:'bbb',value:'多图片显示'},
                {id:'10',url:'bbb',value:'放大镜'},
                {id:'11',url:'bbb',value:'分步运动-文字'},
                {id:'12',url:'bbb',value:'分布运动-图片'},
                {id:'13',url:'bbb',value:'分享到'},
                {id:'14',url:'bbb',value:'封闭空间选项卡'},
                {id:'15',url:'bbb',value:'好看的滚动条'},
                {id:'16',url:'bbb',value:'换肤'},
                {id:'17',url:'bbb',value:'回到顶部'},
                {id:'18',url:'bbb',value:'获取字节长度'},
                {id:'19',url:'bbb',value:'游戏1'},
                {id:'20',url:'bbb',value:'游戏2'},
                {id:'21',url:'bbb',value:'简易留言板'},
                {id:'22',url:'bbb',value:'简易瀑布流'},
                {id:'23',url:'bbb',value:'九九乘法表'},
                {id:'24',url:'bbb',value:'联动选择'},
                {id:'25',url:'bbb',value:'轮播图'},
                {id:'26',url:'bbb',value:'苹果菜单'},
                {id:'27',url:'bbb',value:'全选不选反选'},
                {id:'40',url:'bbb',value:'运动框架封装'},
                {id:'29',url:'bbb',value:'事件委托'},
                {id:'30',url:'bbb',value:'手风琴'},
                {id:'31',url:'bbb',value:'首字母大写'},
                {id:'32',url:'bbb',value:'透明拖拽'},
                {id:'33',url:'bbb',value:'图片延迟加载'},
                {id:'34',url:'bbb',value:'网易幻灯片'},
                {id:'35',url:'bbb',value:'微博字数统计'},
                {id:'36',url:'bbb',value:'无缝滚动'},
                {id:'37',url:'bbb',value:'无线运动小球'},
                {id:'38',url:'bbb',value:'吸顶条'},
                {id:'39',url:'bbb',value:'延时选项卡'},
                {id:'40',url:'bbb',value:'自定义右键菜单'}];
            var oUl = document.getElementById('demoList');
            var oBtn = document.getElementById('demoChange');
            var arrNum = [];
            createLi(16);
            function createLi(n){
                for (var i=0;i<n;i++){
                    var oLi = document.createElement('li');
                    oLi.innerHTML = '<span>No.00'+arr[i].id+'</span><p>'+ arr[i].value +'</p>';
                    oLi.style.backgroundImage = 'url(images/demo/demobg_0'+ fn.rnd(0,8) +'.png)';
                    oUl.appendChild(oLi);
                }
            }
            var aLi = oUl.getElementsByTagName('li');
            var aPos = [];
            for (var i=0;i<aLi.length;i++){
                aPos.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop});
            }
            for (var i=0;i<aPos.length;i++){
                aLi[i].style.position = 'absolute';
                aLi[i].style.left = aPos[i].left + 'px';
                aLi[i].style.top = aPos[i].top + 'px';
                aLi[i].style.margin = 0;
            }
            oBtn.onclick=function(){
                arrNum = [];
                var timer=null;
                clearInterval(timer);
                var i=0;
                timer=setInterval(function(){
                    (function(index){
                        demoMo(aLi[i],{width:0,height:0,left:0,top:0,opacity:0},{
                            complete:function(){
                                if(index==aLi.length-1){
                                    for(var i=0;i<aLi.length;i++){
                                        var num2 = fn.rnd(0,arr.length);
                                        if(findInArr(num2,arrNum)){
                                            i--;
                                        } else {
                                            arrNum.push(num2);
                                        }
                                        aLi[i].style.backgroundImage = 'url(images/demo/demobg_0'+ fn.rnd(0,8) +'.png)';
                                    }
                                    for(var i=0;i<aLi.length;i++){
                                        aLi[i].innerHTML = '<span>No.00'+arr[arrNum[i]].id+'</span><p>'+ arr[arrNum[i]].value +'</p>';
                                    }
                                    i=aLi.length-1;
                                    timer=setInterval(function(){
                                        demoMo(aLi[i],{width:200,height:120,left:aPos[i].left,top:aPos[i].top,opacity:1});
                                        i--;
                                        if(i<0){
                                            clearInterval(timer);
                                        }
                                    },200);
                                }
                            }
                        });
                    })(i);
                    i++;
                    if(i==aLi.length){
                        clearInterval(timer);
                    }
                },200);
            };
        },
        //选项卡
        tab:function(){
            (function(){
                var oCont = document.getElementById('note');
                var aConLi = fn.getClassName(oCont,'knowledge');
                var oBtn = document.getElementById('noteCtrl');
                var aBtn = oBtn.getElementsByTagName('li');
                var old = null;
                var now = 0;
                var arr = [0];
                function change(){
                    old = arr[0];
                    aBtn[old].style.background = '#ccc';
                    aBtn[now].style.background = 'lawngreen';
                    move(aConLi[old],{top:666,zIndex:555,opacity:1},{duration:1000});
                    move(aConLi[now],{top:0,zIndex:666,opacity:1},{duration:1000,complete:function(){
                        move(aConLi[old],{top:-666,opacity:1},{duration:30});
                    }});
                }
                for (var i=0;i<aBtn.length;i++){
                    aBtn[i].index = i;
                    aBtn[i].onclick = function () {
                        arr.push(this.index);
                        now = this.index;
                        change();
                        arr.shift();
                    };
                }
            })();
        },
        //第四页作品展示的穿墙
        throughWall:function(){
                var oUl = document.getElementById('throughWall');
                var aLi = oUl.children;
                for(var i=0;i<aLi.length;i++){
                    hoverGo(aLi[i]);
                }
                function getStyle(obj,sName){
                    return (obj.currentStyle||getComputedStyle(obj,false))[sName];
                }

                //运动框架
                function startMove(obj,json,options){
                    options=options||{};
                    options.time = options.time||700;
                    options.type = options.type||'ease-out';
                    var start = {};
                    var dis = {};
                    for(var name in json){
                        start[name] = parseFloat(getStyle(obj,name));
                        if(isNaN(start[name])){
                            switch(name){
                                case 'top':
                                    start[name] = obj.offsetTop;
                                    break;
                                case 'left':
                                    start[name] = obj.offsetLeft;
                                    break;
                                case 'width':
                                    start[name] = obj.offsetWidth;
                                    break;
                                case 'height':
                                    start[name] = obj.offsetHeight;
                                    break;
                                case 'opacity':
                                    start[name] = 1;
                                    break;
                                case 'borderWidth':
                                    start[name] = 0;
                                    break;
                            }
                        }
                        dis[name] = json[name]-start[name];
                    }
                    var count = Math.floor(options.time/30);
                    var n = 0;
                    clearInterval(obj.timer);
                    obj.timer = setInterval(function(){
                        n++;
                        for(var name in json){
                            switch(options.type){
                                case 'linear':
                                    var cur = start[name]+dis[name]*n/count;
                                    break;
                                case 'ease-in':
                                    var a = n/count;
                                    var cur = start[name]+dis[name]*Math.pow(a,3);
                                    break;
                                case 'ease-out':
                                    var a = 1-n/count;
                                    var cur = start[name]+dis[name]*(1-Math.pow(a,3));
                                    break;
                            }
                            if(name=='opacity'){
                                obj.style.opacity=cur;
                                obj.style.filter='alpha(opacity:'+cur*100+')';
                            }else{
                                obj.style[name] = cur+'px';
                            }
                        }
                        if(n==count){
                            clearInterval(obj.timer);
                            options.end&&options.end();
                        }
                    },30);
                }
                function a2d(a){
                    return a*180/Math.PI;
                }
                //判断移入的方向
                function hoverDir(obj,oEvent){
                    var x = obj.offsetLeft+obj.offsetWidth/2-oEvent.clientX;
                    var y = obj.offsetTop+obj.offsetHeight/2-oEvent.clientY;
                    return Math.round((a2d(Math.atan2(y,x))+180)/90)%4;
                }
                function hoverGo(obj){
                    var oS = obj.children[0];
                    obj.onmouseover=function(ev){
                        var oEvent = ev||event;
                        var oFrom = oEvent.fromElement||oEvent.relatedTarget;
                        if(obj.contains(oFrom))return;
                        var dir = hoverDir(obj,oEvent);
                        //根据方向重新设定遮罩层位置
                        switch(dir){
                            case 0:
                                oS.style.left = '200px';
                                oS.style.top = 0;
                                break;
                            case 1:
                                oS.style.left = 0;
                                oS.style.top = '200px';
                                break;
                            case 2:
                                oS.style.left = '-200px';
                                oS.style.top = 0;
                                break;
                            case 3:
                                oS.style.left = 0;
                                oS.style.top = '-200px';
                                break;
                        }
                        startMove(oS,{top:0,left:0});
                    };
                    obj.onmouseout=function(ev){
                        var oEvent = ev||event;
                        var oTo = oEvent.toElement||oEvent.relatedTarget;
                        if(obj.contains(oTo))return;
                        var dir = hoverDir(obj,oEvent);
                        //根据移除的方向遮罩层进行相应的运动
                        switch(dir){
                            case 0:
                                startMove(oS,{left:200,top:0});
                                break;
                            case 1:
                                startMove(oS,{left:0,top:200});
                                break;
                            case 2:
                                startMove(oS,{left:-200,top:0});
                                break;
                            case 3:
                                startMove(oS,{left:0,top:-200});
                                break;
                        }
                    };
                }
        },
        //作品的canvas
        grain:function(){
            var canvasPage3 = document.getElementById("myCanvas");
            canvasPage3.width = 1600;
            canvasPage3.height = 770;
            var ctx = canvasPage3.getContext("2d");
            var zhongX = 800;
            var zhongY = 385;
            function randomNum(x,y)
            {
                return Math.floor(Math.random() * (y - x + 1) + x);
            }

            function randomColor() {
                return "rgb(" + randomNum(0, 255) + "," + randomNum(0, 255) + "," + randomNum(0, 255) + ")";
            }

            function Ball() {
                this.r = randomNum(0.1, 3);
                this.color = "white";

                this.x = randomNum(this.r, canvasPage3.width - this.r);
                this.y = randomNum(this.r, canvasPage3.height - this.r);

                this.speedX = randomNum(1, 3) * (randomNum(0, 1) ? 1 : -1);
                this.speedY = randomNum(1, 3) * (randomNum(0, 1) ? 1 : -1);
            }

            Ball.prototype.move = function () {
                this.x += this.speedX*0.2;
                this.y += this.speedY*0.2;

                if(this.x<=this.r)
                {
                    this.x = this.r;
                    this.speedX *= -1;
                }
                if(this.x>=canvasPage3.width -this.r)
                {
                    this.x = canvasPage3.width - this.r
                    this.speedX *= -1;
                }
                //小球碰到上边界的处理 反弹
                if (this.y <= this.r) {
                    this.y = this.r;
                    //反弹
                    this.speedY *= -1;
                }
                //小球碰到下边界的处理 反弹
                if (this.y >= canvasPage3.height - this.r) {
                    this.y = canvasPage3.height - this.r;
                    //反弹
                    this.speedY *= -1;
                }
            }

            Ball.prototype.draw = function () {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            var balls = [];
            var arr = [];
            for (var i = 0; i < 0.0002 * canvasPage3.width * canvasPage3.height; i++) {
                var ball = new Ball();
                balls.push(ball);
            }

            setInterval(function () {
                arr = [];
                ctx.clearRect(0, 0, canvasPage3.width, canvasPage3.height);
                for (var i = 0; i < balls.length; i++) {
                    balls[i].move();
                    balls[i].draw();
                    if (ballAndMouse(balls[i]) < 130) {
                        ctx.lineWidth = (130 - ballAndMouse(balls[i])) * 1.5 / 130;
                        ctx.beginPath();
                        ctx.moveTo(balls[i].x, balls[i].y);
                        ctx.lineTo(zhongX, zhongY);
                        ctx.strokeStyle = balls[i].color;
                        ctx.stroke();
                    }
                }


                for (var i = 0; i < balls.length; i++) {
                    for (var j = 0; j < balls.length; j++) {
                        if (ballAndBall(balls[i], balls[j]) < 80) {
                            ctx.lineWidth = (80 - ballAndBall(balls[i], balls[j])) * 0.6 / 80;
                            ctx.globalAlpha = (130 - ballAndBall(balls[i], balls[j])) * 1 / 80;
                            ctx.beginPath();
                            ctx.moveTo(balls[i].x, balls[i].y);
                            ctx.lineTo(balls[j].x, balls[j].y);
                            ctx.strokeStyle = balls[i].color;
                            ctx.stroke();
                        }
                    }
                }
                ctx.globalAlpha = 1.0;

            }, 30);

            canvasPage3.onmousemove = function (event) {
                event = event || window.event;
                zhongX = event.offsetX;
                zhongY = event.offsetY;
            }

            function ballAndMouse(obj) {
                var disX = Math.abs(zhongX - obj.x);
                var disY = Math.abs(zhongY - obj.y);
                return Math.sqrt(disX * disX + disY * disY);
            }
            function ballAndBall(obj1, obj2) {
                var disX = Math.abs(obj1.x - obj2.x);
                var disY = Math.abs(obj1.y - obj2.y);
                return Math.sqrt(disX * disX + disY * disY);
            }
        },
        article:function(){
            function article_main(ev){
                var obj=this;
                var mouseStart=[];
                var objStart=[];
                var oEvent=ev||event;
                mouseStart.x=oEvent.clientX;
                objStart.x=this.offsetLeft;
                document.onmousemove=function(ev) {
                    var oEvent=ev||event;
                    var l=oEvent.clientX-mouseStart.x+objStart.x;
                    obj.style.left=l+'px';
                    return false;
                };
                document.onmouseup=function()
                {
                    document.onmousemove=document.onmouseup=null;
                    startMove(obj);
                };
                return false;
            }
            function startMove(obj) {
                var oarticle_main=document.getElementById('article_main');
                var aDiv=oarticle_main.getElementsByTagName('div');
                var iSpeed=0;
                obj.timer=setInterval(function(){
                    obj.onmousedown=null;
                    obj.offsetLeft>=0?iSpeed+=10:iSpeed-=10;
                    var l=obj.offsetLeft+iSpeed;
                    if(l>obj.offsetWidth)
                    {
                        l=obj.offsetWidth;
                        moveDirection(iSpeed);
                    }
                    else if(l<-obj.offsetWidth)
                    {
                        l=-obj.offsetWidth;
                        moveDirection(iSpeed);
                    }
                    obj.style.left=l+'px';
                },30);
                function moveDirection(iSpeed)
                {
                    for(i=0;i<aDiv.length;i++)
                    {
                        aDiv[i].style.zIndex=parseInt(aDiv[i].style.zIndex)+1;
                        if(aDiv[i]==obj)
                        {
                            obj.style.zIndex=parseInt(obj.style.zIndex)-aDiv.length;
                        }
                    }
                    clearInterval(obj.timer);
                    t=setInterval(function(){
                        obj.onmousedown=null;
                        var l=obj.offsetLeft-iSpeed;
                        if((iSpeed<0 && l>0) || (iSpeed>0 && l<0))
                        {
                            l=0;
                            clearInterval(t);
                            obj.onmousedown=article_main;
                        }
                        obj.style.left=l+'px';
                    },30);
                }
            }
            var oarticle_main=document.getElementById('article_main');
            var aDiv=oarticle_main.getElementsByTagName('div');
            var aLink=oarticle_main.getElementsByTagName('a');
            var t = null;
            for(var i=0;i<aDiv.length;i++) {
                aDiv[i].style.zIndex=(i+1);
                aDiv[i].innerHTML+='<p>第 '+(i+1)+'/'+aDiv.length+' 页 提示：左右拖拽翻页</p>';
                aDiv[i].onmousedown=article_main;
            }
            for(var i=0;i<aLink.length;i++) {
                aLink[i].onmousedown=function(ev) {
                    var oEvent=ev||event;
                    oEvent.stopPropagation?oEvent.stopPropagation():oEvent.cancelBubble=true;
                };
            }
        }
    }
});
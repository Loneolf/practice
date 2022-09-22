
    main()
    // 入口函数main方法
    function main(){
        Add()
        last()
        Ret()
        Heart()
        var timew
        timew = setInterval(function(){
            if(getID("egg3").style.display === "block"){
                warterfall()
                clearInterval(timew)
            }
        },100)

        // 点击出现彩蛋
        var a = 0
        getID("recommend").onclick = function(){

            a++
            console.log(a)
            switch(a){
                case 2:
                    hiden("content-p")
                    hiden("contentBox")
                    show("egg1")
                    // turnBox("contentBox","egg1" ,"recommend")
                    break
                case 3:
                    hiden("egg1")
                    show("egg2")
                    // turnBox("egg1","egg2" ,"recommend")
                    break
                case 4:
                    hiden("egg2")
                    show("egg3")
                    // turnBox("egg2","egg3" ,"recommend")
                    break
                case 5:
                    hiden("egg3")
                    show("egg4")
                    // turnBox("egg3","egg4" ,"recommend")
                    break
                case 6:
                    hiden("egg4")
                    show("contentBox")
                    // turnBox("egg4","contentBox" ,"recommend")
                    show("content-p")
                    a = 0
                    break
            }
        }

    }
    // 封装动态添加图片函数
    function Add(){
        addImg(15) 
        var width2 = getID("content").offsetWidth*0.3
        var contentBoxH = (width2*0.6+32)*5
        var contentBoxh = (width2*0.6+32)*3 +12
        getID("contentP").onclick = function(){
            addImg(9);
            contentBoxH += contentBoxh
            getID("contentBox").style.height = contentBoxH +"px"
        }
        // 动态添加图片及图片外面的div
        function addImg(num){
            for(var i = 1 ; i <= num;i++){
                var div = document.createElement("div");
                div.className = "content-pic";
                getID("contentBox").appendChild(div);
                var img = document.createElement("img");
                img.src = "img/首页/content2/content"+i+".jpg"
                var width1 = getID("content").offsetWidth*0.3
                img.style.width = width1+"px"
                img.style.height = parseInt(img.style.width)*0.6+"px"
                getID("contentBox").style.width = (width1+32)*3+"px"
                getID("contentBox").style.height = (width1*0.6+32)*5 +"px"
                div.appendChild(img);
            }
        }
    }

    // 尾部图片滑动显示
    function last(){
        console.log(getID("foot-min-img"))
        getID("foot-min-img").onmouseover = function(){
            getID("foot-ul-img").style.display = "block"
        }
        getID("foot-min-img").onmouseout = function(){
            getID("foot-ul-img").style.display = "none"
        }
    }

    // 返回顶部效果及帮助
    function Ret(){
        var scroll_top = 0, begina = 0, enda = 0, timera = null;
        window.onscroll = function () {
            scroll_top = scroll().top;
            if(scroll_top > 200){
                show("return")
            }else{
                hiden("return")
            }
            begina = scroll_top;
        };
        getID("return").onclick = function () {
            clearInterval(timera);

            timera = setInterval(function () {
                begina = begina + (enda - begina) / 20;
                window.scrollTo(0, begina);

                console.log(begina, enda);
                if(Math.round(begina) === enda){
                    clearInterval(timera);
                }
            }, 20);
        }
        var time2
        getID("return").onmouseover = function(){
            show("return-p")
        }
        getID("return").onmouseout = function(){
            hiden("return-p")
        }
        getID("help").onmouseover = function(){
            show("help-ul")
        }
        getID("help").onmouseout=function(){
            clearInterval(time2)
            time2 = setTimeout(function(){
                hiden("help-ul")
            },500)
        }
        getID("help-ul").onmouseover = function(){
            clearInterval(time2)
            show("help-ul")
        }
        getID("help-ul").onmoseout = function(){
            this.hiden("help-ul")
        }
    }

    // 彩蛋1
    function Heart(){
        var ctx
        var x
        var y 
        var t  //角度
        var r  = 15  //半径
        var a = Math.PI*2  
        function heart(){
            var myCanvas = document.getElementById('myCanvas')
            ctx = myCanvas.getContext("2d")
            myCanvas.style.background = "#000"
            var timer = setInterval(function(){
                a -= Math.PI/500
                if(a<Math.PI*2&&a>0){
                    draw(a)
                }
            },1*0.1)

            var timer2 = setTimeout(function(){
                var j = 10
                var timer3 = setInterval(function(){
                    j--
                    if(j>0){
                        for(var i =0;i<Math.PI*2;i += Math.PI * 0.001){
                            draw(i,j*0.1,1)
                        }
                    }
                },300)
            },5000)
        }
        function draw(t,a,b){
            ctx.fillStyle = "red"
            ctx.save()
            ctx.translate(300*(1-a),0)
            ctx.scale(a,b)
            ctx.fillRect(getX(t),getY(t),1,1)
            ctx.restore()
        }
        function getX(t) {//由弧度得到 X 坐标  
            return 300 + r * (16 * Math.pow(Math.sin(t), 3));  
        }  
        function getY(t) {//由弧度得到 Y 坐标  
            return 300 - r * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));  
        } 
        var time4 = setTimeout(function(){
        heart()  
        },3000)
        
    }
    // 彩蛋3
    function warterfall(){
        addImg2(40);
        warterfall("imgArea","pic");
        window.onscroll = function(){
            if(checkWillLoadImg()){
                addImg2(40);
                warterfall("imgArea","pic");
            }
    }
    // 动态添加图片及图片外面的div
    function addImg2(num){
        for(var i = 1 ; i <= num;i++){
            var div = document.createElement("div");
            div.className = "pic";
            getID("imgArea").appendChild(div);
            var img = document.createElement("img");
            if(i<10){
                i = "0"+i;
            }
            img.src = "img/首页/content/img"+i+".jpg";
            div.appendChild(img);
        }
    }
    // 瀑布流效果实现
    function warterfall(parent,childrenClsssName){
        // 整个大盒子居中
        var allBox = getID(parent).getElementsByClassName(childrenClsssName);
        var width = allBox[0].offsetWidth;
        var num = parseInt(document.documentElement.clientWidth / width);
        getID(parent).style.width = num*width + "px";
        getID(parent).style.margin = "100px auto"
        // 大盒子中的小盒子定位
        var imgs = getID(parent).getElementsByTagName("img");
        var img = imgs[imgs.length-1];
        var heightArr = [] 
        img.onload = function(){//加载完图片之后再执行下面代码，否则获取不到图片的高度
            for(var i = 0 ; i < allBox.length ; i++){
                var boxHeight = allBox[i].offsetHeight;
                if(i < num){
                    heightArr.push(boxHeight);
                }else{
                    var minHeight1 = minHeight(heightArr).min;
                    var index1 = minHeight(heightArr).minIndex;

                    allBox[i].style.position = "absolute";
                    allBox[i].style.left = index1*width +"px";
                    allBox[i].style.top = minHeight1 +"px";
                    heightArr[index1] += boxHeight;
                }
            }
        }
    }
    // 返回数组中的最小值及其索引;
    function minHeight(arr){
        var minHeight = arr[0],minHeightIndex = 0;
        for(var i = 0;i<arr.length;i++){
            if(arr[i] < minHeight){
                minHeight = arr[i];
                minHeightIndex = arr.indexOf(minHeight);
            }
        }
        return {min:minHeight,minIndex:minHeightIndex};
    }
    // 判断是否具有加载图片的条件
    function checkWillLoadImg(){
        var allBox = getID("imgArea").getElementsByClassName("pic");
        var lastBox = allBox[allBox.length-1];
        var lastBoxTop = lastBox.offsetTop + lastBox.offsetHeight;
        var top = document.documentElement.clientHeight + scroll().top;
        return lastBoxTop <= top;  
    }
    }
    // 封装得到滚动顶部和left函数
    function scroll(){
        if(window.pageYOffset !== null){
            return {
                left:window.pageXOffset,
                top:window.pageYOffset
                }
        }else if(Document.compatMode == "CSS1Compat"){
            return {
                left:document.documentElement.scrollLeft,
                top:document.documentElement.scrollTop
                }
        }return {
            left:document.body.scrollLeft,
            top:document.body.scrollTop
        }
    }
    // 封装获取id函数
    function getID(id){
        return typeof id === "string" ? document.getElementById(id) : null;
    }
    // 封装不显示函数
    function hiden(id){
        getID(id).style.display = "none"
    }
    // 封装显示函数
    function show(id){
        getID(id).style.display = "block"
    }
    // 封装两个元素切换函数
    function turnBox(oldID,newID,touchID){
        getID(touchID).onclick = function(){
    
            getID(oldID).style.transition = "all 1s"
            getID(oldID).style.transform = "rotateY(90deg)"
            getID(newID).style.transition = "all 1s"
            getID(newID).style.transform = "rotateY(360deg)"
            console.log(111)
            if(getID(oldID).style.transform === "rotateY(90deg)"){
                setTimeout(function(){
                    getID(oldID).style.display = "none"
                    getID(newID).style.display = "block"
                },1000)
            }
        }
    }
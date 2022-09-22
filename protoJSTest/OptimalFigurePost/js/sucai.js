var erweima=document.getElementById("erweima");
var weichat=document.getElementById("weChat");
weichat.onmouseenter=function(){
	erweima.style.display="block";
}
weichat.onmouseleave=function(){
	erweima.style.display="none";
}

var scroll_top = 0, begin = 0, end = 0, timer = null;
    window.onscroll = function () {
		scroll_top = scroll().top;
		console.log(scroll_top)
        // 1.2 显示和隐藏
        if(scroll_top > 200){
            $("return-sucai").style.display = "block"
        }else{
            $("return-sucai").style.display = "none"
        }
        begin = scroll_top;
    };
    $("return-sucai").onclick = function () {
        clearInterval(timer);

        timer = setInterval(function () {
            begin = begin + (end - begin) / 20;
            window.scrollTo(0, begin);

            console.log(begin, end);
            if(Math.round(begin) === end){
                clearInterval(timer);
            }
        }, 20);
    }
  
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
    function $(id){
        return typeof id === "string" ? document.getElementById(id) : null;
    }


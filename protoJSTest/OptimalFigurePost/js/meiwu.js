
//用jq
$(".mw-topcup-btn-group button").click(function(){
    $(".box #brand-wrap, #meiwu-wrap").eq($(this).index()).show().siblings().hide();
    $(this).addClass("on").siblings().removeClass("on");
})
//计时器
var clearTime = null;
//当前显示的
var nowIndex = 0;
//即将显示
var index = 0;

autoPlay();
//计时器,开始滑动
function autoPlay(){
	clearTime = setInterval(function(){
		index++;
		if(index > 7){
			index = 0;
		}
//		滑动动画
		scrollPlay();
		nowIndex = index;
	},2500);
}
//滑动动画
function scrollPlay(){
	
    
//	滑动的同时libianse
$("#list li").eq(index).addClass("bg").siblings().removeClass("bg");
//	如果当前显示小于即将显示,向左滑
	if(nowIndex < index){
//		当前显示的.left=-720
		$("#imgBox img2").eq(nowIndex).fadeIn("img").siblings().fadeOut();
		$("#imgBox img2").eq(index).fadeIn("img").siblings().fadeOut();
	}else if(nowIndex > index){
	$("#imgBox img2").eq(nowIndex).fadeIn("img").siblings().fadeOut();
		$("#imgBox img2").eq(index).fadeIn("img").siblings().fadeOut();
	}
}
//鼠标经过
$("#list li").mouseover(function(){
//	清除计时器
clearInterval(clearTime);
index= $(this).index();
      scrollPlay();
      nowIndex=index;
}).mouseout(function(){
//	继续轮广播
	autoPlay();
});

//点击左箭头
$("#box .btnleft").click(function(){
	index++;
	if(index>7){
		index=0;
	}
	scrollPlay();
      nowIndex=index;
      clearInterval(clearTime);
      autoPlay();
});

///点击由箭头
$("#box .btnright").click(function(){
	index--;
	if(index<0){
		index=7;
	}
	scrollPlay();
      nowIndex=index;
      clearInterval(clearTime);
      autoPlay();
});
// 右边菜单栏
$(window).scroll(function () {
      if($(window).scrollTop() >= 900 ){
        $(".caidan").stop().fadeIn(900);
      }else {
        $(".caidan").stop().fadeOut(900);
      }
	});
	// 提交 confrim
function show(){
	if(confirm("确定？")){
		alert("提交成功");
	
	}
	else{
		alert("取消成功")
	}
}
//重置
function show1(){
	alert("确定重新输入？");
}

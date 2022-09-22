//鼠标滚动加上class类名
$(window).scroll(function() {
	if($(this).scrollTop()>0){
	  $('#header').addClass("header2");		
    }else if($(this).scrollTop()==0){		
      $('#header').removeClass("header2");
     }
});
//关闭canvas
var bt=open;
$('#closeCanvas').click(function(){
	if(bt==open){
		$('#canvas').css("display","none");
	   bt=close;
	}else if(bt==close){
	$('#canvas').css("display","block");
	   bt=open;

	}
	
});
//音乐导航效果

$('#header_in_left li').mouseover(function(){
	$(this).children("span.music").animate({top:"0px"},200);
//	$(this).children("audio").play();

});
$('#header_in_left li').mouseout(function(){
	$(this).children("span.music").animate({top:"53px"},200);
});

//轮播图
var timer = null;
//当前显示的
var nowIndexs=0;
//即将显示的
var indexs=0;
autoPlays();
//计时器
function autoPlays(){
	timer=setInterval(function(){
		indexs++;
		if(indexs>4){
			indexs=0;  
		}
        fadeInOut();
		nowIndexs=indexs;
	},2500);
}

//淡入淡出
 function fadeInOut(){
		$('#libox li').eq(nowIndexs).stop(true,true).fadeOut(1000);
		$('#libox li').eq(indexs).stop(true,true).fadeIn(1000);
	
 }
//成功项目实例
//当前显示的
var nowIndex=0;
//即将显示的
var index=0;
scrollPlay();

//滑动动画
function scrollPlay(){

	//如果当前显示小于即将显示的，向左滑
	if(nowIndex<index){
		//关闭其它附带动画效果,当前显示要向左出去
		$('#groups #group').eq(nowIndex).stop(true,true).animate({left:'-1180px'});
		//即将显示的要进来
		$('#groups #group').eq(index).css('left','1180px').stop(true,true).animate({left:'0px'});
	}else if(nowIndex>index){
		$('#groups #group').eq(nowIndex).stop(true,true).animate({left:'1180px'});
		//即将显示的要进来
		$('#groups #group').eq(index).css('left','-1180px').stop(true,true).animate({left:'0px'});
	}
}
//点击左箭头
$('#left').click(function(){
	index++;
	if(index>2){
		index=0;
	}
	scrollPlay();
	nowIndex=index;

	autoPlay();
	
})
//点击右箭头
$('#right').click(function(){
	index--;
	if(index<0){
		index=2;
	}
	scrollPlay();
	nowIndex=index;

	autoPlay();
	
})


$b("login").onclick = function(){
    $b("login-father").style.display = "block"
    $b("login-box").style.display = "block"
    console.log($b("login-father"))
}
$b("login-close").onclick = function(){
    $b("login-father").style.display = "none"
    $b("login-box").style.display = "none"
    $b("register-box").style.display = "none"
}
$b("register").onclick = function(){
    $b("login-father").style.display = "block"
    $b("register-box").style.display = "block"
}
$b("register-close").onclick = function(){
    $b("login-father").style.display = "none"
    $b("register-box").style.display = "none"
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
function $b(id){
    return typeof id === "string" ? document.getElementById(id) : null;
}


var header_in_left = document.getElementById('header_in_left');
var lis = header_in_left.getElementsByTagName('li');
for(var i=0;i<lis.length;i++){
	lis[i].onmouseover = function(){
        this.children[2].play();
	}
	lis[i].onmouseout = function(){
        this.children[2].play();
	}

}
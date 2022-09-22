document.onscroll = function(){
    var scrollTop = scroll().top;
    if(scrollTop >= 250){
        $a("nav").classList.add("nav-scro")
        $a("nav-input").style.display = "block"
        $a("nav-logo-img2").src="..img2/shop/logo.png"
    }else{
        $a("nav").classList.remove("nav-scro")
        $a("nav-input").style.display = "none"
        $a("nav-logo-img2").src="..img2/shop/logo-w.png"
    }
    $a("head-banner").style.backgroundPositionY = scrollTop/2 +"px"    
}


$a("login").onclick = function(){
    $a("login-father").style.display = "block"
    $a("login-box").style.display = "block"
}
$a("login-close").onclick = function(){
    $a("login-father").style.display = "none"
    $a("login-box").style.display = "none"
    $a("register-box").style.display = "none"
}
$a("register").onclick = function(){
    $a("login-father").style.display = "block"
    $a("register-box").style.display = "block"
}
$a("register-close").onclick = function(){
    $a("login-father").style.display = "none"
    $a("register-box").style.display = "none"
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
function $a(id){
    return typeof id === "string" ? document.getElementById(id) : null;
}

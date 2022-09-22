$("login").onclick = function(){
    $("login-father").style.display = "block"
    $("login-box").style.display = "block"
}
$("login-close").onclick = function(){
    $("login-father").style.display = "none"
    $("login-box").style.display = "none"
    $("register-box").style.display = "none"
}
$("register").onclick = function(){
    $("login-father").style.display = "block"
    $("register-box").style.display = "block"
}
$("register-close").onclick = function(){
    $("login-father").style.display = "none"
    $("register-box").style.display = "none"
}
// 封装获取id函数
function $(id){
    return typeof id === "string" ? document.getElementById(id) : null;
}



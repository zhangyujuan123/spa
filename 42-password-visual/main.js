var $pwdButton=(function(){
    var num=0;
    function show(container){
        num++;
        var $pwd=$("<div>密码：<input type='password' autofocus class='pwd' id='pwd'><i class='fa fa-eye eye'></i></div>");
        $(container).append($pwd);
        var $pwd1=$('.pwd'),
            $eye=$('.eye');
        $eye.hover(function () { 
            $eye.attr('class','fa fa-eye-slash');
            $pwd1.attr('type','text');
            console.log('123')
        },function(){
            $eye.attr('class','fa fa-eye');
            $pwd1.attr('type','password');
        });
    }
    function getPwd(){
        alert($('.pwd').val());
    }
    return {
        show:show,
        getPwd:getPwd
    }
 }());
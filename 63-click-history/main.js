$(function(){
    var $btn=$('#main>input'),
        num=0;
    $btn.val('被按了'+num+' 次');
    $btn.click(function(){
        num++;
        var n=location.origin+location.pathname+'#/'+num;
        window.history.pushState(null,null,n);
        $btn.val('被按了'+num+' 次');
    })
    $(window).on('popstate',function(){
        num=""===(num=location.href.match(/(\d*)$/)[0])?0:num;
        $btn.val('被按了'+num+' 次');
    })
})
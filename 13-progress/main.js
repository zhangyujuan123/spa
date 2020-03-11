$(function(){
    var $start=$('#start'),
    $stop=$('#stop'),
    $reset=$('#reset'),
    $pro=$('#pro');
    var timer;
    $start.click(function(){
        var i=$pro.attr('value');
        timer=setInterval(function(){
            i++;
            $pro.attr('value',i);
        },100);
    });
    $stop.click(function(){
        clearInterval(timer);
    });
    $reset.click(function(){
        $pro.attr('value',0);
    });
    
 });
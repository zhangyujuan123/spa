define(['jquery'],function($){
    function TimerButton(){
         var $btn=$('<input class="timer-button" type="button">'),
            timer,
            timer2,
            num,
            cfg={
                container:'body',
                num:6,
                title:'同意',
                enable:false,
                onClick:null
            }
        this.show=function (conf){
        //1.DOM draw
        $.extend(cfg,conf);
        $(cfg.container).append($btn);
        num=cfg.num;
        $btn.attr('disabled',cfg.enable);
        if(cfg.enable){
            $btn.val(cfg.title+'('+cfg.num+'s)');
            timer=setInterval(function(){
                num--;
                if(num===0){
                    clearInterval(timer);
                    $btn.val(cfg.title);
                    $btn.removeAttr('disabled');
                }else{
                    $btn.val(cfg.title+'('+num+'s)');
                }
            },1000);
            $btn.click(cfg.onClick);
        }
        else{
            $btn.val(cfg.title);
            $btn.click(function(){
                cfg.onClick();
                var num=cfg.num;
                $btn.val(cfg.title+'('+num+'s)');
                timer2=setInterval(function(){
                    num--;
                    if(num===0){
                        clearInterval(timer2);
                        $btn.val(cfg.title);
                        $btn.removeAttr('disabled');
                    }else{
                        $btn.val(cfg.title+'('+num+'s)');
                    }
                },1000);
            })
        }
    
    }
    }

    return TimerButton;
});
// var $timerButton=(function(){
//     // $btn.css({
//     //     height:'50px',
//     //     width:'100px'
//     // })
//     function show(conf){
//         //1.DOM draw
//         var $btn=$('<input class="timer-button" type="button">'),
//         timer,
//         timer2,
//         num,
//         cfg={
//             container:'body',
//             num:6,
//             title:'同意',
//             enable:false,
//             onClick:null
//         }
//         clearInterval(timer);
//         clearInterval(timer2);
//         $.extend(cfg,conf);
//         $(cfg.container).append($btn);
//         num=cfg.num;
//         $btn.attr('disabled',cfg.enable);
//         if(cfg.enable){
//             $btn.val(cfg.title+'('+cfg.num+'s)');
//             timer=setInterval(function(){
//                 num--;
//                 if(num===0){
//                     clearInterval(timer);
//                     $btn.val(cfg.title);
//                     $btn.removeAttr('disabled');
//                 }else{
//                     $btn.val(cfg.title+'('+num+'s)');
//                 }
//             },1000);
//             $btn.click(cfg.onClick);
//         }
//         else{
//             $btn.val(cfg.title);
//             $btn.click(function(){
//                 cfg.onClick();
//                 var num=cfg.num;
//                 $btn.val(cfg.title+'('+num+'s)');
//                 timer2=setInterval(function(){
//                     num--;
//                     if(num===0){
//                         clearInterval(timer2);
//                         $btn.val(cfg.title);
//                         $btn.removeAttr('disabled');
//                     }else{
//                         $btn.val(cfg.title+'('+num+'s)');
//                     }
//                 },1000);
//             })
//         }
    
//     }
//     return {
//         show:show
//     }
//  }());

 //不用 page load event

 //封装成对象，有几种方案
 /*
 1.简单对象字面量，不完全是面向对象，不能包括私有方法
 var timerBtn={
     show:function()
 }
2.工厂函数，一个函数返回值是一个简单对象
var timerBtn=(function(){
    return {
        show:function(){}
    }
}())
3.构造函数：function TimerBtn(){

}
var tb=new TimerBtn();
*/
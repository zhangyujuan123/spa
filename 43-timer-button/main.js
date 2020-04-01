requirejs.config()
require(['jquery'],function($){
    $(function(){
        var $btnAdd=$('#add');
        $btnAdd.click(function(){
            require(['timer-button'],function(TimerButton){
                var tb=new TimerButton();
                tb.show({
                    num:$('#tim').val(),
                    title:$('#btnTxt').val(),
                    onClick:function(){
                        $('#txt').html();
                    },
                    enable:able
                })
            })
            var $select=$('.select'),able;
            for(var i=0;i<$select.length;i++){
                if($select[i].checked==true){
                    if($select[i].value=='true'){
                        able=false;
                    }
                    else{
                       able=true;
                    }
                }
            }
            var tb=new TimerButton();
            tb.show({
                num:$('#tim').val(),
                title:$('#btnTxt').val(),
                onClick:function(){
                    $('#txt').html();
                },
                enable:able
            })
            $timerButton.show({
                
            })
        })
    
    });
})

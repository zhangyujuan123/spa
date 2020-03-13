$(function(){
    //get dom elem
    var $width=$('#width'),
        $height=$('#height'),
        $btncal=$('#calculate'),
        $perimeter=$('#perimeter'),
        $area=$('#area');
    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
    /**calc button click event */
    $btncal.click(function(){
        //validate if error return;
        if(!validate('#width')||!validate('#height')) return;


        //get value
        var w=Number($width.val()),
            h=Number($height.val());
        //calculate
        var p=roundFractional(2*(w+h),1),
            a=roundFractional(w*h,2);
        //output
        $perimeter.val(p);
        $area.val(a);
    });




    function validate(field){
        //get DOM error message
        var $data=$(field),
            $message=$(field+'-validation-message');
        //validate null
        if($data.val()===''){
            $message.html('不能为空！');
            $data.select();
            return false;
        }
        //validate number
        if(!(/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val()))){
            $message.html('必须是数值！');
            $data.select();
            return false;
        }
        //validate>0
        if(Number($data.val()) < 0){
            $message.html('必须大于零！');
            $data.select();
            return false;
        }
        $message.html(' ');
        return true;
    }

});
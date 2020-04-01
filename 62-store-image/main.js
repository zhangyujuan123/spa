$(function(){
    var $url=$('input[type="text"]'),
        $btnSave=$('input[type="button"]'),
        $img=$('img'),
        $tmpImg=$('<img>');

    //load local storge string to $img
    var strImg=window.localStorage.getItem('img');
    if(strImg!==''){
        $img.attr('src',strImg);
    }
    $btnSave.click(function(){
        //validate url not null
        var url=$url.val();
        if(url==='')return;    
        //load local storge string to $img
        var strImg=window.localStorage.getItem('img');
        $img.attr('src',strImg);
    })
    $tmpImg.load(function(){
        //create canvas
        var can=$('<canvas>').get(0);
        var ctx=can.getContext('2d');
        can.width=$tmpImg.get(0).width;
        can.height=$tmpImg.get(0).height;
        //canvas fill tmpImg
        ctx.drawImage($tmpImg.get(0),0,0,can.width,can.height)
        //canvas output base64 string
        var str=can.toDataURL();
                //load url image tmpImg
                $tmpImg.attr('crossOrigin','anonymous');
                $tmpImg.attr('src',url);
                //save vbase64 string to local storage
                window.localStorage.setItem('img',str);
    })
})
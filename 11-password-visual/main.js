$(function(){
    var $pwd=$('#pwd'),
    $eye=$('#eye');
    $eye.hover(function () { 
        $eye.attr('class','fa fa-eye-slash');
        $pwd.attr('type','text');
        console.log('123')
    },function(){
        $eye.attr('class','fa fa-eye');
        $pwd.attr('type','password');
    });
 });
$(document).ready(function()
{
	$(".scroll").click(function(){
$("nav").slideToggle();	
});
$(".d4").cycle({
	fx:"scrollRight",
	next:".d2",
	prev:".d3",

});
 
$(".d5").delay(1000).fadeIn(4000);
$(".a1111").click(function(){	
    $(".z").fadeIn(1000,function()
    	{
    		$("nav").slideUp(1000);
    	});
});
$(".aa1").click(function(){	
    $(".z").fadeOut(1000,function()
    	{
    		$("nav").slideDown(1000);
    });
 
});
});
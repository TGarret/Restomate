// je cache les menus
$('#cache1').css("display","none");
$('#cache2').css("display","none");
$('#cache3').css("display","none");

// je les fais apparaître

$('#presentation').click(function(){
    $('#cache1').toggle();
});

$('#menu').click(function(){
    $('#cache2').toggle();
});

$('#toilettes').click(function(){
    $('#cache3').toggle();
});
var $p = $('p');
$p.on('click', function(event) {
  var date = new Date(event.timeStamp);
	$p.text("C'est l'heure qu'il est bâtard: " + date)
});

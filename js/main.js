$(document).ready(function(){



	/////mobile menu //////

	$('a.menu-icon').click(function(){
		$('menu-links').slideToggle();

	});

	///fix hidden linnks on window resize//////
	$(window).resize(function(){
		if(window).width() > 700){
$('menu-links').removeAttr('style');

	}
});

});
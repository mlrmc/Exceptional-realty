<<<<<<< HEAD
$(function() {

  ////////// Mobile Menu //////////

  $('a.menu-icon').click(function() {
    $('#menu-links').slideToggle();
  });

  // fix hidden links on window resize

  $(window).resize(function() {
    if ($(window).width() > 700) {
      $('#menu-links').removeAttr('style');
    }
  });
=======
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
>>>>>>> 10e50f89d975bbb2ad8194c9b7b08c463803d713

});
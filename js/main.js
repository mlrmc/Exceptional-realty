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


  ////contact form validation
function  validateName(fullname){
   if(fullname.length > 2){
    $('#fullname').removeClass('error');
    $('#fullname-error').hide();
    return true
     }
      
   else { 
    $('#fullname').addClass('error');
    $('#fullname-error').show();
    return false;
   }
}

function validateEmail(email) {
   var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
if (re.test(email)){
    $('#email').removeClass('error');
    $('#email-error').hide();
    return true

}
else{
    $('#email').addClass('error');
    $('#email-error').show();
    return false;
  }
}

function validateMessage(message){
  if(message.length > 0) {
    $('#message').removeClass('error');
    $('#message-error').hide();
    return true
}
else {
    $('#message').addClass('error');
    $('#message-error').show();
    return false
  }
}

  $('form').submit(function(event) {

    var fullname = $('#fullname').val(),
        email = $('#email').val(),
        message = $.trim($('#message').val());

        if (validateName(fullname) & validateEmail(email) & validateMessage(message)) {
          return true;

        }
        else{
          event.preventDefault();
       }
  });

});

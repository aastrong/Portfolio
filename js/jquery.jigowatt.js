jQuery(document).ready(function(){

	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit')
			.after('<img src="assets/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			comments: $('#comments').val(),
		},
			function(data){
				$('#submit').removeAttr('disabled');
				$('.contact').removeClass('open');
		        $('section.background .bg2').removeClass('shown');
		        $('.container.name').fadeIn(500);
		        $('.container.name').animate("opacity", "1");
		        $('.success').addClass('shown');

			}
		);

		});

		return false;

	});

});
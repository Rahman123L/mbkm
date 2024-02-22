$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

    // Muncul Form
	if( wScroll > $('.form').offset().top - 230 ) {	
		$('.form .thumbnaill').each(function(i) {
			setTimeout(function() {
				$('.form .thumbnaill').eq(i).addClass('muncull');
			}, 200 * (i+1))
		});
	}
});
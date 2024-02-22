$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

    // Muncul Card
	if( wScroll > $('.card').offset().top - 130 ) {	
		$('.card .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.card .thumbnail').eq(i).addClass('muncul');
			}, 400 * (i+1))
		});
	}
});
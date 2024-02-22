$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

    // Muncul konten
	if( wScroll > $('.konten').offset().top - 230 ) {	
		$('.konten .thumbnailll').each(function(i) {
			setTimeout(function() {
				$('.konten .thumbnailll').eq(i).addClass('muncul');
			}, 400 * (i+1))
		});
	}
});
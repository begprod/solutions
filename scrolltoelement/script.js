//for link
$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000);
		return false;
		}
	}
});

//widthout link, data-to-scroll is id of scroll target
$('.anchor-link-menu__item').click(function() {
	var getScrollEl = $(this).attr('data-to-scroll');
	console.log(getScrollEl);
		$('html, body').animate({
		scrollTop: $(getScrollEl).offset().top
	}, 2000);
});
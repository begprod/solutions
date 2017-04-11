$(window).scroll(function () {
	var sticky = $('.header--sub');
	var winScroll = $(window).scrollTop();

	if (winScroll >= 100) {
		sticky.addClass('header--fixed');
	} else {
		sticky.removeClass('header--fixed');
	}
});
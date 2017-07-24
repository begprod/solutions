// Bootsrap carousel dots auto generate
$(document).ready(function() {
	var myCarousel = $('.carousel');
	var indicators = $('.carousel-indicators');
	myCarousel.find('.carousel-inner').children('.item').each(function(index) {
		(index === 0) ?
		indicators.append('<li data-target="#carousel-example-generic" data-slide-to="' + index + '" class="active"></li>'):
		indicators.append('<li data-target="#carousel-example-generic" data-slide-to="' + index + '"></li>');
	});
});
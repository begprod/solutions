$(document).ready(function() {
	$('.sidebar-cities ul li').slice(0, 7).css({
		'display':'inline-block'
	});
	var blockSize = $('.sidebar-cities ul li').size();
	console.log(blockSize);
	$('.sidebar-cities__more-btn').click(function() {
		$('.sidebar-cities ul li').slice(7, blockSize).css({
			'display':'inline-block'
		});
		$(this).fadeOut(200);
	});
});
function webUnderConstruction() {
	$('.wuc').css({
		'position': 'relative'
	});
	$('.wuc').children().each(function() {
		var rgba = 'rgba('
					+ (Math.floor(Math.random() * 226)) + ','
					+ (Math.floor(Math.random() * 156)) + ','
					+ (Math.floor(Math.random() * 256)) + ', .8)';
		$(this).css({
			'position': 'relative',
			'border': '3px solid ' + rgba
		});
		var elClassName = $(this).attr('class');
		$(this).append('<div class="el-class">' + elClassName + '</div>');
		$('.el-class').css({
			'position': 'absolute',
			'bottom': '0',
			'right': '0',
			'color': 'white',
			'background-color': 'red',
			'opacity': '.5',
			'z-index': '5'
		})
	});
}

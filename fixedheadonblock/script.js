var tableHead = $('.weekdays');
var tabelHeadOffsetTop = tableHead.offset().top;
var tableHeight = $('.timetables-wrap').height();
$(window).scroll(function (event) {
	var winScroll = $(window).scrollTop();
	var tableOffset = $('.timetables-wrap').offset().top;
	if (winScroll >= tabelHeadOffsetTop) {
		tableHead.addClass('weekdays--fixed');
	} else {
		tableHead.removeClass('weekdays--fixed');
	}
	if ((tableOffset + tableHeight - 50) < winScroll) {
		tableHead.removeClass('weekdays--fixed');
		console.log('true');
	}
});
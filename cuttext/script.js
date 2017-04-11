$('.owl-item__head').each(function() {
	var headText = $(this).text();
	var headTextLen = headText.length;
	var cutNum = 60;
	if (headTextLen >= cutNum) {
		$(this).val(headText).text(headText.substr(0, cutNum) + '…');
	}
});
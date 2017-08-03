$(document).ready(function () {
	cutText('.card', 300);
});

function cutText(className, numOfChars) {
	$(className).each(function() {
		var text = $(this).text();
		var textSize = text.length;
		
		if(textSize >= numOfChars) {
			$(this).val(text).text(text.substr(0, numOfChars) + '…');
		}
	});
}
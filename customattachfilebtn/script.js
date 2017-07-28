$(document).ready(function() {
	attachFile();
});

function attachFile() {
	$('.attachfile-field').click(function(e) {
		$('.inputfile').click();
		return false;
	});
	$('.inputfile').change(function() {
		var filename = $('.inputfile').val().replace(/C:\\fakepath\\/i, '');
		$('.filename').html(filename);
	});
}

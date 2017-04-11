$('.attachfile-field').click(function() {
	$('.inputfile').click();
});
$('.inputfile').change(function() {
	var filename = $('.inputfile').val().replace(/C:\\fakepath\\/i, '');
	$('.attachfile-field').append(filename);
});
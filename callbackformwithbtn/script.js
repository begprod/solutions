jQuery(function () {
	var initial = 2700;
	var count = initial;
	var counter; //10 will  run it every 100th of a second
	function timer() {
		if (count <= 0) {
			clearInterval(counter);
			return;
		}
		count--;
		displayCount(count);
	}

	function displayCount(count) {
		var res = count / 100;
		document.getElementById('timer-count').innerHTML = res.toPrecision(count.toString().length);
	}

	jQuery('.b-callback-btn').on('click', function () {
		jQuery('.call-back-wrapper').fadeIn(300);
		jQuery(this).fadeOut(300);
	});
	jQuery('.call-back-form__close').on('click', function () {
		jQuery('.call-back-wrapper').fadeOut(300);
		jQuery('.b-callback-btn').fadeIn(300);
		//сбросить
		clearInterval(counter);
		count = initial;
		displayCount(count);
	});

	jQuery('.call-back-form__btn').on('click', function () {
		counter = setInterval(timer, 10);
	});

	displayCount(initial);
	//стоп
	clearInterval(counter);
});
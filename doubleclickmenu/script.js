$(document).ready(function() {
	$('.mobile-menu-icon').click(function() {
		$(this).toggleClass('mobile-menu-icon--active');
		$('.mobile-menu').slideToggle(200);
		$('.mobile-menu__menu-wrap li').removeClass('js-mobile-menu--active');
	});
	$('.mobile-header__search').click(function() {
		$('.mobile-header__search-form').toggleClass('mobile-header__search--active');
	});
	$('.mobile-menu__menu-wrap > li > a').click(function(e){
		if(!$(this).parent().hasClass('js-mobile-menu--active')) {
			$('.mobile-menu__menu-wrap li').removeClass('js-mobile-menu--active');
			$(this).parent().addClass('js-mobile-menu--active');
			e.preventDefault();
		} else {
			return true;
		}
	});
});
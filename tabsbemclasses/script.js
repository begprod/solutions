$(document).ready(function() {
    $(".b-tabs-menu__link").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass('b-tabs-menu__item--active');
        $(this).parent().siblings().removeClass('b-tabs-menu__item--active');
        var tab = $(this).attr('href');
        $(".tab-content__item").not(tab).css('display', 'none');
        $(tab).fadeIn();
    });
});
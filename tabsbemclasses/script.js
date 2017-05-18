$(document).ready(function() {
    $(".tabs-menu-wrp__item a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("tabs-menu-wrp__item--active");
        $(this).parent().siblings().removeClass("tabs-menu-wrp__item--active");
        var tab = $(this).attr("href");
        $(".tab-content__item").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});
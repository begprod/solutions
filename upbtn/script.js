//btn element
var scrollBtn = $('.up-btn');
var bodyHtml = $('body, html');
scrollBtn.click(function (event) {
    bodyHtml.animate({ scrollTop: 0 }, 400);
    return false;
});

$(window).scroll(function () {
    if ($(document).scrollTop() > 200) {
        scrollBtn.fadeIn(300);
    } else {
        scrollBtn.fadeOut(300);
    }
});
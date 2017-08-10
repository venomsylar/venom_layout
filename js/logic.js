$ = jQuery;
$(document).ready(function () {
    var width = document.body.clientWidth;

    $("#menuOpen").click(function (e) {
        $(this).toggleClass("opened");
    });

    /*var mainSlider = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplayDisableOnInteraction: false,
        loop: true,
        autoplay: 5000
    });*/

    $("select").selbel();

    $('.content table').wrap('<div class="table_wrap">');

    $(window).bind("resize", function () {

    });
    $('#mainMenu li.menu-item-has-children').append('<span class="subMenuButton"></span>');
    $('.subMenuButton').click(function () {
        var t = $(this);
        if(t.hasClass('open')) {
            t.removeClass('open').prev().slideUp(300);
        } else {
            t.removeClass('open').prev().slideDown(300);
            t.addClass('open');
        }
    });
});
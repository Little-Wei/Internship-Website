$(document).ready(function () {
    // animate arrow-down button twice
    $('.first-title img').animate({ top: '+=15%' }, 500).animate({ top: '-=15%' }, 500);
    $('.first-title img').animate({ top: '+=15%' }, 500).animate({ top: '-=15%' }, 500);

    // change navbar link's color
    $('#first-link').hover(function () {
        $(this).removeClass('nav-link-color');
        $(this).css('color', '#ECBC9A');
    }, function () {
        $(this).addClass('nav-link-color');
    });

    $('#second-link').hover(function () {
        $(this).removeClass('nav-link-color');
        $(this).css('color', '#ECBC9A');
    }, function () {
        $(this).addClass('nav-link-color');
    });

    $('#third-link').hover(function () {
        $(this).removeClass('nav-link-color');
        $(this).css('color', '#ECBC9A');
    }, function () {
        $(this).addClass('nav-link-color');
    });

    // when hover, animate arrow-down button
    $('.first-title img').hover(function () {
        $(this).animate({ top: '+=15%' }, 500);
    }, function () {
        $(this).animate({ top: '-=15%' }, 500);
    });
});
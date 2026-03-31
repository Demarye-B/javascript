$(function(){
    $('.botanic').hide();

    $('h1, h2').mouseover(function () {
        $(this).css('color', '#47a3ff');
    });

    $('h1, h2').mouseout(function () {
        $(this).css('color', 'darkgreen');
    });

    $('.flower').click(function () {
        $('.botanic').hide();
        $(this).children('.botanic').show();
    });


})
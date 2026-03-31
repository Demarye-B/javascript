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

    $('.pic').hover(
        function (evt) {
            let idToShow = '#' + $(this).attr('title');
            let x = evt.pageX;
            let y = evt.pageY;
            $(idToShow).css('left', x);
            $(idToShow).css('top', y);
            $(idToShow).show();
        },
        function (evt) {
            let idToHide = '#' + $(this).attr('title');
            $(idToHide).hide();
        }
    );

})
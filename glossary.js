$(function(){
    $('.botanic').hide();
    $('.imgdiv').hide();

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
            let x = evt.pageX + 150;
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

    $(document).keypress(function (evt) {
        let letter = String.fromCharCode(evt.which);
        letter = letter.toLowerCase();
        let anchor = '#' + letter;
        window.location = anchor;
    });

})
$(function() {
    $('#thumbs').find('img').hover(
        function() {
            $(this).css({"border": "10px solid green", "box-shadow": "10px 5px 5px black"});
        },
        function() {
            $(this).css({"border": "none", "box-shadow": "none"})
        });
});
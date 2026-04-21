$(function() {
    $('#thumbs').find('img').hover(
        function() {
            $(this).css({"border": "2px solid darkgreen", "box-shadow": "10px 5px 5px black"});
        },
        function() {
            $(this).css({"border": "none", "box-shadow": "none"})
        });
});
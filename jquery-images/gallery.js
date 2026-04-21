$(function() {
    $('#thumbs').find('img').hover(
        function() {
            $(this).css({"border": "2px solid darkgreen", "box-shadow": "10px 5px 5px black"});
        },
        function() {
            $(this).css({"border": "none", "box-shadow": "none"})
    });

    $('#thumbs').find('img').click(function() {
         var imgFile = $(this).attr('src');
         var imgText = $(this).attr('alt');
         $('#lgPic').attr('src', imgFile);
         $('#lgTitle').text(imgText)
    });

    $('#lgPic').click(function() {
        console.log("Click event's working...")
    });
});
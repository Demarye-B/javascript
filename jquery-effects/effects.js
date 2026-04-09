$(function(){
    console.log("test");

    $('#newsletter').hide();

    $('#openclose').click(function () {
        if ($('#newsletter').is(":hidden")) {
            $('#newsletter').show();
            $('#openclose').text("-")
        } else{
            $('#newsletter').hide();
            $('#openclose').text("+")
        }
    });

})

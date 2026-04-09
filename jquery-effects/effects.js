$(function(){
    console.log("test");

    $('#newsSignup').hide();

    $('#openclose').click(function () {
        if ($('#newsSignup').is(":hidden")) {
            $('#newsSignup').show();
            $('#openclose').text("-")
        } else{
            $('#newsSignup').hide();
            $('#openclose').text("+")
        }
    });

})

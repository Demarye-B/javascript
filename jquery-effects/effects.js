$(function(){
    console.log("test");

    $('#newsSignup').hide();

    $('#openclose').click(function () {
         $("a").on("submit", function(event){
            event.preventDefault();
        });
        if ($('#newsSignup').is(":hidden")) {
            $('#newsSignup').show();
            $('#openclose').text("-")
        } else{
            $('#newsSignup').hide();
            $('#openclose').text("+")
        }
    });

})

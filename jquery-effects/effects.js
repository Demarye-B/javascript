$(function(){
    $('#newsSignup').hide();

    $('#openclose').click(function (event) {
        event.preventDefault();
        if ($('#newsSignup').is(":hidden")) {
            $('#newsSignup').show();
            $('#openclose').text("-")
        } else{
            $('#newsSignup').hide();
            $('#openclose').text("+")
        }
    });

    $('#slogan').mouseover(function(){
        $(this).fadeOut(400, 'linear', function(){
            $(this).text("Hand Picked Just for You")
            $(this).fadeIn("slow", "swing");
        });
    });

    $('#slogan').mouseout(function(){
        $(this).fadeOut("fast", 'swing', function(){
            $(this).text("The Power of Flowers")
            $(this).fadeIn("slow", "linear");
        });
    });

    $(document).ready(function() {
        $('#rose').animate({right: '100px', opacity: '1'}, "slow", "swing");
    });

    $('#newsSignup').submit(function(event) {
        event.preventDefault();
        alert("Thank you for registering")
        $('#newsSignup').hide();
        $('#signuplink').fadeTo("slow", 0.3)
    });
})

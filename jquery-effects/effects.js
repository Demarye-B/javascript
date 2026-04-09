$(function(){
    console.log("test");

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

    $('#slogan').mouseenter(function(){
        $(this).fadeOut(400, 'linear', function(){
            $(this).text("Hand Picked Just for You")
            $(this).fadeIn("slow", {easing: "swing"});
        });
    });

    $('#slogan').mouseleave(function(){
        $(this).fadeOut("fast", 'swing', function(){
            $(this).text("The Power of Flowers")
            $(this).fadeIn("slow", "linear");
        });
    });

    $(document).ready(function() {
        $('#rose').animate({right: '100px', opacity: '1'}, "slow", "swing");
    });


    

})

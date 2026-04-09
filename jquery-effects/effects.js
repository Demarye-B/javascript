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

    $('#slogan').mouseover(function(){
        $(this).fadeOut(400, 'linear', function(){
            $(this).text("Hand Picked Just for You")
            $(this).fadeIn("slow", {easing: "swing"});
        });
    });

    $('#slogan').mouseout(function(){
        $(this).fadeOut("fast", 'swing', function(){
            $(this).text("The Power of Flowers")
            $(this).fadeIn("slow", "linear");
        });
    });

})

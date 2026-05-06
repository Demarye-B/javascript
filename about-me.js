$(function() {
    

    function addition() {
        var number1 = 1
        var number2 = 2

        return number1 + number2;
    };

    var today= addition();

     document.getElementById("notd").innerHTML = 
    "The number of the day is " + today + "."

    $(document).ready(function() {
        $('#title').animate({right: '1px', opacity: '1'}, "slow", "swing");
        $('.fade').fadeIn();
    });
});
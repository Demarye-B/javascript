$(function() {
    today = 0

    function addition() {
        var number1 = Math.floor(Math.random * 1236);
        var number2 = Math.floor(Math.random * 1236);
        var today = number1 + number2
        document.getElementById("notd").innerHTML = 
    "The number of the day is " + today + "."
    };


     

    $(document).ready(function() {
        $('#title').animate({right: '1px', opacity: '1'}, "slow", "swing");
        $('.fade').fadeIn();
    });
});
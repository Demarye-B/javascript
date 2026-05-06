$(function() {
    

    function addition() {
        var number1 = Math.floor(Math.random * 1236);
        var number2 = Math.floor(Math.random * 1236);
        var sum = number1 + number2;

        return sum;
    };

    var math= addition();

     document.getElementById("notd").innerHTML = 
    "The number of the day is " + math + "."

    $(document).ready(function() {
        $('#title').animate({right: '1px', opacity: '1'}, "slow", "swing");
        $('.fade').fadeIn();
    });
});
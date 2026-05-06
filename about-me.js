$(function() {
       

    function addition() {
       var num1 = document.getElementById("1").innerHTML = 1 +
Math.floor(Math.random() * 145);
        var num2 = document.getElementById("2").innerHTML = 1 +
Math.floor(Math.random() * 16);
num1 = parseInt(num1);
num2 = parseInt(num2);
var today = num1 + num2

return today;
    };

     document.getElementById("notd").innerHTML = 
    "The number of the day is " + today + "."

     

    $(document).ready(function() {
        $('#title').animate({right: '1px', opacity: '1'}, "slow", "swing");
        $('.fade').fadeIn();
    });
});
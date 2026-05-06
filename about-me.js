$(function() {
        var num1 = document.getElementById("1").innerHTML =
Math.floor(Math.random() * 10);
        var num2 = document.getElementById("2").innerHTML =
Math.floor(Math.random() * 10);
num1 = parseInt(num1);
num2 = parseInt(num2);
var today = num1 + num2

    function addition() {
      
    };

     document.getElementById("notd").innerHTML = 
    "The number of the day is " + today + "."

     

    $(document).ready(function() {
        $('#title').animate({right: '1px', opacity: '1'}, "slow", "swing");
        $('.fade').fadeIn();
    });
});
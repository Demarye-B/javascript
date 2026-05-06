$(function() {
       

    function addition() {
      var num1 = 1
        var num2 = 2
return num1 + num2

    };
 today = addition();
     document.getElementById("notd").innerHTML = 
    "The number of the day is " + today + "."

     

    $(document).ready(function() {
        $('#title').animate({right: '1px', opacity: '1'}, "slow", "swing");
        $('.fade').fadeIn();
    });
});
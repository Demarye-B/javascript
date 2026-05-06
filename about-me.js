$(function() {
    function NumberOfTheDay () {
        var number = Math.floor(Math.random * 1236);
    };

     document.getElementById("notd").innerHTML = 
    "The number of the day is " + number + "."

    $(document).ready(function() {
        $('#title').animate({right: '1px', opacity: '1'}, "slow", "swing");
        $('.fade').fadeIn();
    });
});
$(function() {
    function NumberOfTheDay () {
        var notd = Math.floor(Math.random * 1236);

        document.getElementById("notd").innerHTML = 
    "The number of the day is " + notd + "."
    };

    $(document).ready(function() {
        $('#notd').animate({right: '100px', opacity: '1'}, "slow", "swing");
    });
});
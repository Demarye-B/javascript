$(function() {

    $('#name').focus();

    $('#name').blur(function() {
        if ($(this).val() == "") {
        $('#nameErr').text('Username is required');
        } else {
        
        $('#nameErr').text('');
        }
    });

    emailregex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;

    $('#email').blur(function() {
        if (!$('#email').val().match(emailregex)) {
        $('#emailErr').text('Email format user@domain.com');
        } else {
        $('#emailErr').text('');
        }
    });

    $('#address').blur(function() {
        if ($(this).val() == "") {
        $('#addressErr').text('Address is required');
        } else {
        
        $('#addressErr').text('');
        }
    });

    $('#city').blur(function() {
        if ($(this).val() == "") {
        $('#cityErr').text('City is required');
        } else {
        
        $('#cityErr').text('');
        }
    });

    $('#shipaddr').blur(function() {
        if ($(this).val() == "") {
        $('#shipaddrErr').text('Address is required');
        } else {
        
        $('#shipaddrErr').text('');
        }
    });

    $('#shipcity').blur(function() {
        if ($(this).val() == "") {
        $('#shipcityErr').text('City is required');
        } else {
        
        $('#shipcityErr').text('');
        }
    });

    $('#zip').blur(function() {
        var zipValue = $(this).val();
        if ($(this).val() == "") {
        $('#zipErr').text('Zip code is required');
        } else if (isNaN(zipValue)) {
        $('#zipErr').text('Zip code must be numbers');
        } else if ($(this).val().length < 5 || $(this).val().length > 5) {
        $('#zipErr').text('Zip code must be 5 characters');;
        } else {
        $('#zipErr').text('');
        }
    });

    $('#copy').click(function() {
        if ($(this).prop('checked')) {
            var address = $('#address').val();
            var city = $('#city').val();
            var zip = $('#zip').val();
            var state = $('#state').val();

            $('#shipaddr').val(address);
            $('#shipcity').val(city);
            $('#shipzip').val(zip);
            $('#shipstate').val(state);
        }
    });
    
   

    $('.qty').blur(function() {
         var orderTotal = 0
        for (let i = 1; i <= 3; i++) {
        var price = $('#price' + i).text();
        price = parseInt(price);
        var quantity = $('#' + i).val();
        if (isNaN(quantity) || quantity == "") {
            quantity = 0
            $('.qty').text('');
        };
        var total = price * quantity;
        $('#total' + i).text("$" + total.toFixed(2));
        orderTotal = orderTotal + total
    }

    $('#subt').text(orderTotal);

    var state = $('#shipstate').val();
    if (state == "TX") {
        var tax = orderTotal * 0.08
        orderTotal = orderTotal + tax
    }

    if (state == "TX") {
        var shipping = 5.00
        orderTotal = orderTotal + shipping
    }else if (state == "CA" || state == "NY") {
        var shipping = 20.00
        orderTotal = orderTotal + shipping
    }else {
        var shipping = 10.00
        orderTotal = orderTotal + shipping
    }
    $('#tax').text("$" + tax)
    $('#ship').text("$" + shipping)

    $('#gTotal').text("$" + orderTotal.toFixed(2));
    });

    
});
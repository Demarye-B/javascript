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
});
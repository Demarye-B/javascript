$(function() {
    let shopcount = 0

    $('.add').click(function() {
        var idValue = $(this).attr('id');
        var nameValue = $(this).attr('name');
        shopcount++;
        if (shopcount > 0){
            $('#empty').hide();
        }
        var cartLink = "<li class='cartItem' name='" + idvalue + "'>" + nameValue + " <span class='del'>Remove</span></li>";
        $('#cart').append(cartLink);
        $('#' + itemID).hide();
    });

});


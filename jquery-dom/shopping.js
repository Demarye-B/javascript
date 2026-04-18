$(function() {
    let shopcount = 0

    $('.add').click(function() {
        var idValue = $(this).attr('id');
        var nameValue = $(this).attr('name');
        shopcount++;
        if (shopcount > 0){
            $('#empty').hide();
        }
        var cartLink = "<li class='cartItem' name='" + idValue + "'>" + nameValue + " <span class='del'>Remove</span></li>";
        $('#cart').append(cartLink);
        $('#' + idValue).hide();

        
    });

    $('.del').on("click", "span", function() {
            $(this).parent().hide();
            shopcount--
            if (shopcount == 0){
                $('#empty').show();
            }
            $('#' + idValue).show();
        });

});


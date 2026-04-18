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

    $('#cart').delegate(".del", "click", function() {
            shopcount--
            if (shopcount == 0){
                $('#empty').show();
            }
            var nameValue = $(this).parent().attr('name');
            $('#' + nameValue).show();
            $(this).parent().remove();
     });
     
     $('.rating').find('img').click(function() {
        $(this).siblings().attr('src', 'jquery-dom\staroff.gif');
        $(this).attr('src', 'jquery-dom\staron.gif')
        $(this).prevAll().attr('src', 'jquery-dom\staron.gif')
     });

});


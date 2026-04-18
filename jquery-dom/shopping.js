$(function() {
    let shopcount = 0

    $('.add').click(function() {
        shopcount++
        if (shopcount > 0){
            $('#empty').hide();
        }
    });

});


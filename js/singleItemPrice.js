$(function () {
    var price = $('span').text()
    price = parseInt(price)
    localStorage.setItem("price", price);
    var itemPrice = localStorage.getItem("price");

    $('.product_quantity').focusout(() => {
        var quantity = $('.product_quantity').val()

        if (quantity == 0) {
            $('.product_quantity').val(1)
            quantity = 1
        }

        price = itemPrice * quantity
        $('span').html(price)
    })

    $('#addToCart').click(() => {
        var quantity = $('.product_quantity').val()

        localStorage.setItem('quantity', quantity)
        localStorage.setItem('finalPrice', price)
        window.location.href = "cart.html";

    })
})
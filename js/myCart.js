$(function () {

    var price = localStorage.getItem("price");


    var itemPrice = localStorage.getItem("finalPrice");
    var quantity = localStorage.getItem("quantity");
    $('span').html(itemPrice)
    $('.product_quantity').val(quantity)


    $('.product_quantity').focusout(() => {
        var quantity = $('.product_quantity').val()

        if (quantity == 0) {
            $('.product_quantity').val(1)
            quantity = 1
        }

        price = price * quantity
        $('span').html(price)
    })

    $('#checkoutButton').click(() => {
        var quantity = $('.product_quantity').val()

        localStorage.setItem('quantity', quantity)
        localStorage.setItem('finalPrice', price)
        window.location.href = "checkout.html";

    })

    $('.delete_button').click(() => {
        $('tbody').empty()
    })
})
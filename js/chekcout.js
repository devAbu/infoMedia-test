$(function () {

    var price = localStorage.getItem("price");


    var itemPrice = localStorage.getItem("finalPrice");
    var quantity = localStorage.getItem("quantity");
    $('span').html(itemPrice)
    $('.product_quantity').val(quantity)

    $('#submitButton').click(() => {
        var fullName = $('#fullName').val()
        var address = $('#address').val()
        var number = $('#number').val()
        var email = $('#email').val()
        
        if (fullName == "") {
            alert("Ime ne moze biti prazno")
        } else if (address == "") {
            alert("Adresa ne moze biti prazna")
        } else if (number == "") {
            alert("Broj telefona ne smije biti prazan")
        } else if (email == "") {
            alert("Email ne smije biti prazna")
        }else{
            alert("Narudzba poslana")
        }
    })


})
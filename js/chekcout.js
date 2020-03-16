$(function () {

    var price = localStorage.getItem("price");


    var itemPrice = localStorage.getItem("finalPrice");
    var quantity = localStorage.getItem("quantity");
    $('span').html(itemPrice)
    $('.product_quantity').val(quantity)

    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }

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
        } else if (number.length < 9) {
            alert("Unesi validan broj telefona (9 brojeva minimalno)")
        } else if (email == "") {
            alert("Email ne smije biti prazna")
        } else if (!validateEmail(email)) {
            alert("Unesi ispravan format email adrese")
        } else {
            alert("Narudzba poslana")
        }
    })

    function notNumber(e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which);
        if (keyCode > 47 && keyCode < 58 || keyCode > 95 && keyCode < 107) {
            e.preventDefault();
        }
    }

    function notLetter(e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which);
        if (!keyCode > 47 && !keyCode < 58 || !keyCode > 95 && !keyCode < 107 || keyCode == 69) {
            e.preventDefault();
        }
    }

})
<<<<<<< Updated upstream
var sizes = document.querySelectorAll('.size-radio');
sizes.forEach(btn => {
    btn.addEventListener('click', function () {
        btns.forEach(b => {
            b.classList.remove('active');
        });
        this.classList.add('active');

    })
});
var toppings = document.querySelectorAll('.topping-detail');

toppings.forEach(tp => {
    tp.addEventListener('click', function () {
        console.log("active");
        if ($(this).hasClass('active')) {
            console.log("unactive");
            this.classList.remove('active')
        }else{
            console.log($(this).hasClass('active'));
            this.classList.add('active');
        }
        console.log($(this).hasClass('active'));
    } );
=======
$(document).ready(function () {

    $('#modal-sum-btn').click(function (e) {
        $('#modal-quantity').val(parseInt($('#modal-quantity').val()) + 1);
    });
    $('#modal-sub-btn').click(function (e) {
        if (parseInt($('#modal-quantity').val()) > 1) {
            $('#modal-quantity').val(parseInt($('#modal-quantity').val()) - 1);
        }

    });
>>>>>>> Stashed changes
});
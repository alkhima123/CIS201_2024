document.addEventListener('DOMContentLoaded', function() {
    const productBtns = document.querySelectorAll('.product-btn');

    productBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const productContainer = this.parentElement;
            const productInfo = this.textContent;

            alert(`You clicked on ${productInfo}.`);
        });
    });
});
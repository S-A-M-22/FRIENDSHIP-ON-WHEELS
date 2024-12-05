function checkCartEmpty() {
    var cart = document.getElementById('cart-wrapper');
    console.log(cart.childElementCount);
    if (cart.childElementCount == 0) {
        console.log("cart empty");
        var empty = document.createElement("h3");
        empty.textContent = "Your cart is empty!";
        var returnButton = document.createElement("a");
        returnButton.textContent = "Back to meal options";
        returnButton.className = "back";
        returnButton.href = "meal_order.html";

        cart.appendChild(empty);
        cart.appendChild(returnButton);
    }
}

function deleteElement(element) {
    element.parentNode.remove();
    checkCartEmpty();
}

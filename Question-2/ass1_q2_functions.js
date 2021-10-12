/* define functions here */

function calculateTotal(quantity, price) {
    return quantity * price;
}

function outputCartRow(file, title, quantity, price, total) {
    document.write('<tr>');
    document.write('<td><img src=ass1_images/' + file + '></td>');
    document.write('<td>' + title + '</td>');
    document.write('<td>' + quantity + '</td>');
    document.write('<td>' + "$" + price.toFixed(2) + '</td>');
    document.write('<td>' + "$" + total.toFixed(2) + '</td>');
    document.write('</tr>');
}


var subTotal = 0;

function subTotalCalc(quantities, prices) {

    for (var index = 0; index < quantities.length; index++) {
        subTotal = subTotal + (quantities[index] * prices[index]);
    }

    document.write('<tr class="totals">');
    document.write('<td colspan="4">Subtotal</td>');
    document.write('<td>$' + subTotal.toFixed(2) + '</td>');
    document.write('</tr>');

}

var TaxAmount = 0;

function calculateTax() {

    TaxAmount = subTotal * 0.10;

    document.write('<tr class="totals">');
    document.write('<td colspan="4">Tax</td>');
    document.write('<td>$' + TaxAmount.toFixed(2) + '</td>');
    document.write('</tr>');

}

var ShippingChargeAmount = 0;

function shippingCharge() {
    if (subTotal > 1000) {
        ShippingChargeAmount = 0;
    } else {
        ShippingChargeAmount = 40;
    }


    document.write('<tr class="totals">');
    document.write('<td colspan="4">Shipping</td>');
    document.write('<td>$' + ShippingChargeAmount.toFixed(2) + '</td>');
    document.write('</tr>');

}

function total() {

    var grandTotal = subTotal + TaxAmount + ShippingChargeAmount;

    document.write('<tr class="totals focus">');
    document.write('<td colspan="4">Grand Total</td>');
    document.write('<td>$' + grandTotal.toFixed(2) + '</td>');
    document.write('</tr>');

}
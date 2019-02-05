const errorMessage = "Invalid input data";
let price = prompt('Enter money (0 to 9999999):');
let discount = prompt('Enter discount (0 to 99):');
if (price === "" || isNaN(price) || price <= 0 || price > 9999999) {
    alert(errorMessage);
} else if (discount === "" || isNaN(discount) || discount < 0 || discount > 99) {
    alert(errorMessage);
} else {
    let savemoney = price / 100 * discount;
    let saleprice = price - savemoney;
    let withDiscount = Math.floor(saleprice * 100) / 100;
    let saved = Math.floor(savemoney * 100) / 100;
    let resultMessage =
        "Price without discount: " + price + "$" +
        "\nDiscount: " + discount + "%" +
        "\nPrice with discount: " + withDiscount + "$" +
        "\nSaved:  " + saved + "$";
    alert(resultMessage);
}
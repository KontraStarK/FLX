let a = prompt("Please enter number a");
let b = prompt("Please enter number b");
let c = prompt("Please enter number c");
let errorMessage = "Invalid input data";
let formula = b * b - 4 * a * c;
let x = Math.floor(formula);
if (a === "" || b === "" || c === "") {
    alert(errorMessage);
} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert(errorMessage);
} else if (a === 0 || b === 0 || c === 0) {
    alert(errorMessage);
} else if (x < 0) {
    alert("no solution");
} else if (x === 0) {
    alert("x=0");
} else if (x > 0) {
    let x1 = (-b - x) / (2 * a);
    let x2 = (-b + x) / (2 * a);
    alert("x1 =" + x1 + ' ' + 'and' + ' ' + "x2 =" + x2);
}
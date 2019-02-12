function reverseNumber(number) {
    return Math.sign(number) * Math.abs(number).toString().split('').reverse().join('');
}
reverseNumber(-456);

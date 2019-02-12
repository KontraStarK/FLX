function addOne(x) {
    return x + 1;
}

function pipe() {
    var a = arguments[0];
    var result = arguments[1](a);
    for (var i = 2; i < arguments.length; i++) {
        result = arguments[i](result);
    }
    return result;
}
pipe(1, addOne, addOne);
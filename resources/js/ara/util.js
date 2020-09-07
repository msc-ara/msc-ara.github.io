
function isNumeric(n) {

    let b = !isNaN(parseFloat(n)) && isFinite(n);
    // console.log("n: " + n + " ; b: " + b);
    return b;
}

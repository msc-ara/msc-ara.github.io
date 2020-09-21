
function isNumeric(n) {

    let b = !isNaN(parseFloat(n)) && isFinite(n);
    // console.log("n: " + n + " ; b: " + b);
    return b;
}

function changeLanguage (lang) {

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    window.location.href = window.location.pathname + "?code=" + code + "&lang=" + lang;
}
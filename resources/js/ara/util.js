
function isNumeric(n) {

    let b = !isNaN(parseFloat(n)) && isFinite(n);
    // console.log("n: " + n + " ; b: " + b);
    return b;
}

function changeLanguage (lang) {

    let code = getUrlParam("code");
    if (code.trim().length != 0) {
        code = "&code="+code;
    }
    window.location.href = window.location.pathname + "?lang=" + lang + code;
}

function getUrlParam (key) {

    const urlParams = new URLSearchParams(window.location.search);
    key = urlParams.get(key);
    if (key != null) {
        return key;
    }
    return "";
}
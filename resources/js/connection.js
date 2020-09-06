
let URL_BASE = "https://araapi.herokuapp.com/ara-api/";
const host = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;

function savePost () {

    let form = document.getElementById("formRegister");
    console.info("form.title: " + form.title.value + "; form.activeDays: " + form.activeDays.value);
    let post = Post("", form.title.value , form.activeDays.value , null);

    console.info("host: " + host);
    const URL_FINAL = URL_BASE + "post/";
    fetch(URL_FINAL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(post),
    }).then(function(response) {
        return response.body;
    }).then(function(body) {
        // let objectURL = URL.createObjectURL(body);
        alert(body);

    });;
}

document.getElementById("submitFormRegister")
    .addEventListener("click", function(){

        // alert("submitFormRegister click");
    savePost();
});
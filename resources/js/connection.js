
let URL_BASE = "https://araapi.herokuapp.com/ara-api/";
let host = window.location.protocol + "//" + window.location.hostname;

async function savePost () {

    let form = document.getElementById("formRegister");
    let post = Post("", form.title.value , form.activeDays.value , null);

    const URL_FINAL = URL_BASE + "post/";
    let response = await fetch(URL_FINAL, {
        method: "POST",
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(post),

    });

    const json = JSON.stringify(await response.json());
    console.info("response.body: " + json);

    if (response.status == 201) {
        const parse = JSON.parse(json);
        if (window.location.hostname == "localhost") {
            host += ":" + window.location.port;
        }
        window.location.href = host + "/resources/post.html?code=" + parse.code;
    }
}

document.getElementById("submitFormRegister")
    .addEventListener("click", function(){

    savePost();
});
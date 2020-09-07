
const URL_BASE = "https://araapi.herokuapp.com/ara-api";
const URL_BASE_POST = URL_BASE + "/post";
const URL_BASE_COMMENT = URL_BASE + "/comment";
let host = window.location.protocol + "//" + window.location.hostname;

async function savePost () {

    let form = document.getElementById("formRegister");
    let post = Post("", form.title.value , form.activeDays.value , null);

    const URL_FINAL = URL_BASE_POST;
    let response = await fetch(URL_FINAL, {
        method: "POST",
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(post),
    });

    return response
}

async function getPostByCode(code) {

    const URL_FINAL = URL_BASE_POST + "/" + code + "/";
    let response = await fetch(URL_FINAL, {
        method: "GET",
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
    });

    const json = JSON.stringify(await response.json());
    console.info("response.body: " + json);
    console.info("response.status: " + response.status);

    if (response.status == 200) {

        const parse = JSON.parse(json);
        let post = Post(parse.Code, parse.Title, parse.ActiveDays, parse.Comments);
        console.info("parse: " + JSON.stringify(parse));
        console.info("post: " + JSON.stringify(post));

        return post;
    }

    return "";
}

async function addComment(postCode, commentText) {

    let form = document.getElementById("formAddComment");
    let comment = Comment(null, commentText);
    let post = Post("", form.title.value , form.activeDays.value , null);

    const URL_FINAL = URL_BASE_COMMENT + "/post/" + postCode + "/";
    let response = await fetch(URL_FINAL, {
        method: "POST",
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(comment),
    });

    return response;
}

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

    return response;
}

async function addComment(postCode, commentText) {

    let comment = PostComment(null, commentText);
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

async function deleteComment(postCode, commentID) {

    const URL_FINAL = URL_BASE_COMMENT + "/" + commentID + "/post/+ " + postCode + "/";
    let response = await fetch(URL_FINAL, {
        method: "DELETE",
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
    });

    return response;
}

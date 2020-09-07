
loadDetail();
async function loadDetail () {

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const response = await getPostByCode(code);

    const json = JSON.stringify(await response.json());

    if (response.status == 200) {

        const parse = JSON.parse(json);
        const post = Post(parse.Code, parse.Title, parse.ActiveDays, parse.Comments);

        document.getElementById("idPostCode").innerHTML = post.code;
        document.getElementById("idPostCodeForm").value = post.code;
        document.getElementById("idPostTitle").innerHTML = post.title;

        await loadCommentsFromPost(post);

    }

}

// const submitFormRegister = document.getElementById("submitFormAddComment");
// if (submitFormRegister != null) {
//
//     submitFormRegister.addEventListener("click", async () =>{
//
//         let form = document.getElementById("formAddComment");
//         let response = await addComment(form.postCode.value, form.comment.value);
//         // const json = JSON.stringify(await response.json());
//
//         if (response.status == 201) {
//
//             window.location.href = window.location;
//
//         }
//
//     });
// }

async function submitFormAddComment () {

    let form = document.getElementById("formAddComment");
    let response = await addComment(form.postCode.value, form.comment.value);
    // const json = JSON.stringify(await response.json());

    if (response.status == 201) {

        window.location.href = window.location;

    }

}

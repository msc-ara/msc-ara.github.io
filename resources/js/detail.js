
load();
async function load () {

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const response = await getPostByCode(code);

    console.info("<<<<<<<<<response.status>>>>>>>>> " + response.status);
    if (response.status == 200) {

        const json = JSON.stringify(await response.json());
        const parse = JSON.parse(json);
        // console.info("parse: " + JSON.stringify(parse));
        const post = Post(parse.Code, parse.Title, parse.ActiveDays, parse.Comments);

        // console.info("<<<<<<<<<post>>>>>>>>> " + JSON.stringify(post));
        document.getElementById("idPostCode").innerHTML = post.code;
        document.getElementById("idPostCodeForm").value = post.code;
        document.getElementById("idPostTitle").innerHTML = post.title;

    }

}

const submitFormRegister = document.getElementById("submitFormAddComment");
if (submitFormRegister != null) {

    submitFormRegister.addEventListener("click", async () =>{

        let form = document.getElementById("formAddComment");

        console.info("form.comment: " + form.comment.value);
        let response = await addComment(form.postCode.value, form.comment.value);
        const json = JSON.stringify(await response.json());
        console.info("response.body: " + json);

        if (response.status == 201) {

            window.location.href = window.location;

        }
    })
}

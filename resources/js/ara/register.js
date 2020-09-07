
// const submitFormRegister = document.getElementById("submitFormRegister");
// if (submitFormRegister != null) {
//
//     submitFormRegister.addEventListener("click", async () =>{
//
//         const form = document.getElementById("formRegister");
//         const post = Post("", form.title.value , form.activeDays.value , null);
//         let response = await savePost(post);
//         const json = JSON.stringify(response.json());
//         // console.info("response.body: " + json);
//
//         if (response.status == 201) {
//
//             const parse = JSON.parse(json);
//             if (window.location.hostname == "localhost") {
//                 host += ":" + window.location.port + "/msc-ara.github.io";
//             }
//
//             window.location.href = host + "/resources/post.html?code=" + parse.Code;
//
//         }
//
//     });
//
// }

async function submitFormRegister () {

    const form = document.getElementById("formRegister");
    const post = Post("", form.title.value , form.activeDays.value , null);
    let response = await savePost(post);
    const json = JSON.stringify(await response.json());
    console.info("response.body: " + json);

    if (response.status == 201) {

        const parse = JSON.parse(json);
        if (window.location.hostname == "localhost") {
            host += ":" + window.location.port + "/msc-ara.github.io";
        }

        window.location.href = host + "/resources/detail.html?code=" + parse.Code;

    }

}
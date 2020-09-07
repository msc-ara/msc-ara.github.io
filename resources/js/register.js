
const submitFormRegister = document.getElementById("submitFormRegister");
if (submitFormRegister != null) {
    submitFormRegister.addEventListener("click", () =>{

        let response = savePost();
        const json = JSON.stringify(response.json());
        // console.info("response.body: " + json);

        if (response.status == 201) {

            const parse = JSON.parse(json);
            if (window.location.hostname == "localhost") {
                host += ":" + window.location.port + "/msc-ara.github.io";
            }

            window.location.href = host + "/resources/post.html?code=" + parse.Code;

        }
    });
}
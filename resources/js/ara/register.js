
async function submitFormRegister () {

    const form = document.getElementById("formRegister");
    const post = Post("", form.title.value , form.activeDays.value , null, null);
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


loadIndex();
async function loadIndex () {

    const response = await getPostsPagination(0, 100);

    const json = JSON.stringify(await response.json());

    if (response.status == 200) {

        const parse = JSON.parse(json);
        await loadPosts(parse, "idPosts");

    }

}

async function loadPosts (posts, idOutPutInnerHTML) {

    // console.info("posts: " + JSON.stringify(posts));

    let output = "";
    for (let obj in posts) {

        let post = await Post(posts[obj].Code, posts[obj].Title, posts[obj].ActiveDays, posts[obj].Comments, new Date(posts[obj].Date));
        // console.info("<<<<<<<posts>>>>>>>: \n" + JSON.stringify(post));

        (output += `
            <div class="row form-group">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text">${post.title}</p>
                        </div>
                        <div class="card-footer text-muted">
                            <small class="text-muted">${post.date.toDateString()}</small>
                        </div>
                    </div>
                </div>
            </div>
        `)

    }
    // console.info("output: " + output);
    document.getElementById(idOutPutInnerHTML).innerHTML = output;

}


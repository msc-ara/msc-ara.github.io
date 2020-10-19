
const countToSearch = 10;

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
        const urlParams = new URLSearchParams(window.location.search);
        let lang = getUrlParam("lang");
        if (lang.trim().length != 0) {
            lang = "&lang=" + lang;
        }

        window.location.href = host + "/resources/detail.html?code=" + parse.Code + lang;

    }

}

loadIndex();
async function loadIndex () {

    let language = loadLanguage();
    language.loadHome();

    const response = await getPostsPagination(0, countToSearch);

    const json = JSON.stringify(await response.json());

    if (response.status == 200) {
        const parse = JSON.parse(json);
        await loadPosts(0, parse, "idPosts", language.getHome());
    }

}

async function loadPosts (page, posts, idOutPutInnerHTML, home) {

    // console.info("posts: " + JSON.stringify(posts));

    let output = "";
    for (let obj in posts) {

        let post = await Post(posts[obj].Code, posts[obj].Title, posts[obj].ActiveDays, posts[obj].Comments, new Date(posts[obj].Date));
        // console.info("<<<<<<<posts>>>>>>>: \n" + JSON.stringify(post));
        let lang = getUrlParam("lang");
        if (lang.trim().length != 0) {
            lang = "&lang=" + lang;
        }
        const url = `detail.html?code=${post.code}` + lang;
        (output += `
            <a href="${url}" class="text-decoration-none" style="color: black;" >
                <div class="row form-group">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${post.code}</h5>
                                <p class="card-text">${post.title}</p>
                            </div>
                            <div class="card-footer text-muted">
                                <small class="text-muted">
                                    ${home.textCardCommentsCount}: ${post.commentsLength()} -
                                    ${home.textCardDateCreatePost}: ${post.date.toDateString()} 
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        `)

    }

    (output += `
        <div id="idLoadMoreDiv" class="idLoadMoreDiv">
            <div class="form-group col-12">
                <button class="btn btn-primary btn-block" id="idLoadMore" onclick="loadMore(this.id, ${page})">
                    ${home.buttonLoadMorePost}
                </button>
            </div>
        </div>
    `)
        // console.info("output: " + output);

    let idLoadMoreDiv = document.getElementsByClassName("idLoadMoreDiv");
    // console.info("idLoadMoreDiv: " + idLoadMoreDiv);
    let element = idLoadMoreDiv.item(idLoadMoreDiv.length - 1);
    // console.info("element: " + element);
    if (element != null) {
        element.innerHTML = "";
        element.innerHTML += output;
    } else {
        document.getElementById(idOutPutInnerHTML).innerHTML += output;
    }

}

async function loadMore(idLoadMore, actualPage) {

    console.info("actualPage: " + actualPage);
    const page = parseInt(actualPage) + 1;
    const response = await getPostsPagination(page, countToSearch);
    const json = JSON.stringify(await response.json());

    if (response.status == 200) {

        const parse = JSON.parse(json);
        let language = loadLanguage();
        await loadPosts(page, parse, "idLoadMoreDiv", language.getHome());

    }

}

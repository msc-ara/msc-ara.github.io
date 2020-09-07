
async function loadCommentsFromPost (post) {

    console.info("post.comments: " + JSON.stringify(post.comments));

    let output = "";
    for (let obj in post.comments) {

        let postComment = PostComment(new Date(post.comments[obj].Date), post.comments[obj].Comment);
        (output += `
            <div class="row form-group">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text">${postComment.comment}</p>
                        </div>
                        <div class="card-footer text-muted">
                            <small class="text-muted">${postComment.date}</small>
                        </div>
                    </div>
                </div>
            </div>
        `)

    }
    // console.info("output: " + output);
    document.getElementById("idPostComments").innerHTML = output;

}

function Post(code, title, activeDays, comments) {

    let newObj = new Object();
    newObj.code = code;
    newObj.title = title;
    newObj.activeDays = activeDays;
    newObj.comments = comments;

    return newObj;
}

function Comments (code, description) {

    let newObj = new Object();
    newObj.code = code;
    newObj.description = description;

    return newObj;
}
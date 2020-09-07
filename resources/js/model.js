function Post(code, title, activeDays, comments) {

    let newObj = new Object();
    newObj.code = code;
    newObj.title = title;
    newObj.activeDays = parseInt(activeDays);
    newObj.comments = comments;

    return newObj;
}

function Comment (date, description) {

    let newObj = new Object();
    newObj.date = date;
    newObj.description = description;

    return newObj;
}
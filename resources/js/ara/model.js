function Post(code, title, activeDays, comments, date) {

    let newObj = new Object();
    newObj.code = code;
    newObj.title = title;

    let days = 0;
    if (isNumeric(activeDays)) {
        days = parseInt(activeDays);
    }
    newObj.activeDays = days;
    newObj.comments = comments;
    newObj.date = date;

    newObj.commentsLenght = () => {

        let count = 0;
        if (newObj.comments != null) {
            for (let obj in newObj.comments) {
                count++;
            }
        }

        return count;
    }

    return newObj;
}

function PostComment (date, description) {

    let newObj = new Object();
    newObj.date = date;
    newObj.comment = description;

    return newObj;
}
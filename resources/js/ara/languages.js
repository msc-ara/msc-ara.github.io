let languagesMap = new Map(
    [
        ["eng", new LanguageEng()],
        ["ptBR", new LanguagePT_BR()],
    ]
);

function Languages(htmlLang, home, detail) {

    let obj = new Object();
    obj.htmlLang = htmlLang;
    obj.home = home;
    obj.detail = detail;

    obj.loadHome = () => {

        document.getElementById("homeTextPresentation").innerHTML = home.textPresentation;
        document.getElementById("homeTextSubtitle").innerHTML = home.textSubtitle;
        document.getElementById("homeTextSmallPostTitle").innerHTML = home.textSmallPostTitle;
        document.getElementById("homeTextSmallPostActiveDays").innerHTML = home.textSmallPostActiveDays;
        document.getElementById("homeButtonCreatePost").innerHTML = home.buttonCreatePost;
        // document.getElementById("homeButtonLoadMorePost").innerHTML = home.buttonLoadMorePost;
        // let element = document.getElementById("homeTextCardCommentsCount");
        // if (element !== 'undefined' && element != null) {
        //     element.innerHTML = home.textCardCommentsCount;
        // }
        // element = document.getElementById("homeTextCardDateCreatePost");
        // if (element !== 'undefined' && element != null) {
        //     element.innerHTML = home.textCardDateCreatePost;
        // }

        return;
    }

    obj.getHome = () => {
        return obj.home;
    }

    obj.loadDetails = () => {

        document.getElementById("detailTextExpireAt").innerHTML = detail.textExpireAt;
        document.getElementById("detailTextSmallCommentPost").innerHTML = detail.textSmallCommentPost;
        document.getElementById("detailButtonCommentPost").innerHTML = detail.buttonCommentPost;

        return;
    }

    return obj;
}

function LanguageEng() {

    const home = {
        textPresentation: "You're in ARA, and so, here you can Ask, Request and Answer anything you want.",
        textSubtitle: "Enjoy, be free... be yourself!",
        textSmallPostTitle: "Write Anything You Want In Your Post.",
        textSmallPostActiveDays: "How Many Days The Post Will Be Active.",
        buttonCreatePost: "Create Post",
        buttonLoadMorePost: "Load More",
        textCardCommentsCount: "Comments",
        textCardDateCreatePost: "Date",
    }

    const detail = {
        textExpireAt: "Expire At",
        textSmallCommentPost: "Write A Comment For This Post.",
        buttonCommentPost: "Comment",
    }

    let languages = Languages("en", home, detail);

    return languages;
}

function LanguagePT_BR() {

    const home = {
        textPresentation: "Você está no ARA, aqui você pode perguntar, requisitar ou responder o que quiser.",
        textSubtitle: "Aproveite, seja livre... seja você mesmo!",
        textSmallPostTitle: "Escreva Algo Que Queira No Seu Post.",
        textSmallPostActiveDays: "Quantos Dias O Post Ficará Ativo.",
        buttonCreatePost: "Criar Post",
        buttonLoadMorePost: "Carregar Mais",
        textCardCommentsCount: "Comentários",
        textCardDateCreatePost: "Data",
    }

    const detail = {
        textExpireAt: "Expira em",
        textSmallCommentPost: "Escreva Um Comentário Para Este Post.",
        buttonCommentPost: "Comentar",
    }

    let languages = Languages("pt-br", home, detail);

    return languages;
}

function loadLanguage() {

    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get("lang");

    let language = languagesMap.get(lang);
    if (language === "undefined" || language == null) {
        language = LanguageEng();
    }

    document.getElementsByTagName("html").item(0).lang = language.htmlLang;

    return language;
}

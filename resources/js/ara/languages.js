let languagesMap = new Map(
    [
        ["eng", new LanguageEng()],
    ]
);

function Languages (htmlLang, textPresentation, textSubtitle, textSmallPostTitle,
                    textSmallPostActiveDays, buttonCreatePost, buttonLoadMorePost,
                    textCardCommentsCount, textCardDateCreatePost) {

    let obj = new Object();
    obj.htmlLang = htmlLang;
    obj.home = {
        textPresentation: textPresentation,
        textSubtitle: textSubtitle,
        textSmallPostTitle: textSmallPostTitle,
        textSmallPostActiveDays: textSmallPostActiveDays,
        buttonCreatePost: buttonCreatePost,
        buttonLoadMorePost: buttonLoadMorePost,
        textCardCommentsCount: textCardCommentsCount,
        textCardDateCreatePost: textCardDateCreatePost,
    };

    return obj;
}

function LanguageEng () {

    const textPresentation = "You're in ARA, and so, here you can Ask, Request and Answer anything you want.";
    const textSubtitle = "Enjoy, be free... be yourself!";
    const textSmallPostTitle = "Write Anything You Want In Your Post.";
    const textSmallPostActiveDays = "How Many Days The Post Will Be Active.";
    const buttonCreatePost = "Create Post";
    const buttonLoadMorePost = "LOAD MORE";
    const textCardCommentsCount = "Comments";
    const textCardDateCreatePost = "Date";

    let languages = Languages("en",
                              textPresentation,
                              textSubtitle,
                              textSmallPostTitle,
                              textSmallPostActiveDays,
                              buttonCreatePost,
                              buttonLoadMorePost,
                              textCardCommentsCount,
                              textCardDateCreatePost);

    return languages;
}

function loadLanguage() {

    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get("lang");

    let language = languagesMap.get(lang);
    if (language === "undefined" || language == null) {
        language = LanguageEng();
    }

    console.info(language);

    document.getElementsByTagName("html").item(0).lang = language.htmlLang;
    document.getElementById("homeTextPresentation").innerHTML = language.home.textPresentation;
    document.getElementById("homeTextSubtitle").innerHTML = language.home.textSubtitle;
    document.getElementById("homeTextSmallPostTitle").innerHTML = language.home.textSmallPostTitle;
    document.getElementById("homeTextSmallPostActiveDays").innerHTML = language.home.textSmallPostActiveDays;
    document.getElementById("homeButtonCreatePost").innerHTML = language.home.buttonCreatePost;
    document.getElementById("homeButtonLoadMorePost").innerHTML = language.home.buttonLoadMorePost;

    document.getElementById("homeTextCardCommentsCount").innerHTML = language.home.textCardCommentsCount;
    document.getElementById("homeTextCardDateCreatePost").innerHTML = language.home.textCardDateCreatePost;

}

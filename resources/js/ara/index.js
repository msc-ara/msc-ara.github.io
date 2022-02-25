
let phrasesMap = new Map(
    [
        // [1, new Phrase("#CB3535", "#000000", "Flamengo will be brasileirao 2020 champion?")],
        [1, new Phrase("#358fcb", "#FFFFFF", "How about travel to Paris?")],
        [2, new Phrase("#ffffff", "#000000", "I wanna change my computer... any suggestion?")],
        [3, new Phrase("#CB3535", "#ffffff", "What to drink in Singapore?")],
        [4, new Phrase("#399024", "#ffffff", "Who will travel this summer and for where?")],
        [5, new Phrase("#244c90", "#ffffff", "Let's enjoy the night!")],
        [6, new Phrase("#FFFFFF", "#244c90", "I'm drinking a chai...")],
        [7, new Phrase("#358fcb", "#FFFFFF", "I wanna surf")],
    ]
);

function loadIndex() {

    const howManyRandomNumber = phrasesMap.size;
    // console.info("howManyRandomNumber: " + howManyRandomNumber);
    let index = Math.floor((Math.random() * howManyRandomNumber) + 1);
    // console.info("index: " + index);

    let phrase = phrasesMap.get(index);
    // console.info("phrase: " + JSON.stringify(phrase));

    let body = document.getElementById("idBodyIndex");
    body.style=`background-color:${phrase.backgroundColor};color:${phrase.fontColor}`;
    let text = document.getElementById("idTextIndex");
    text.innerText = phrase.description;

}
loadIndex();
class Dictionar {
    constructor() {
        this.words = [];
    }
    addWord(word) {
        this.words.push(word);
        console.log(`Cuvantul ${word} a fost adăugat în dicționar`);
    }
    findWord(word) {
        if (this.words.includes(word)) {
            console.log(`Cuvantul ${word} a fost găsit în dicționar`)
        } else {
            console.log(`Cuvantul ${word} nu a fost găsit în dicționar`)
        }
    }
}
let myDictionar = new Dictionar();
document.getElementById("saveWord").addEventListener("click", function () {
    let word = document.getElementById("cuvantAdaugat").value.trim();//take the word without spaces
    if (word !== "") {
        myDictionar.addWord(word);
        document.getElementById("cuvantAdaugat").value = "";
    } else {
        console.log(`Introduceți, vă rugăm, un cuvânt valid!`);
        document.getElementById("cuvantAdaugat").value = "";
    }
});
document.getElementById("searchWord").addEventListener("click", function () {
    let word = document.getElementById("wordEntered").value.trim();
    if (word !== "") {
        myDictionar.findWord(word);
        document.getElementById("wordEntered").value = "";
    } else {
        console.log(`Introduceți, vă rugăm, un cuvânt valid!`);
        document.getElementById("wordEntered").value = "";
    }
})
const dailyKan = document.getElementById(`kanji`)
const getKan = document.getElementById(`get-kanji`)
const meaning = document.getElementById(`meaning`)
const read = document.getElementById(`read`)


getKan.addEventListener("click", function() {
    getKanjiLetter();

})

function getKanjiLetter(){

    fetch("https://kanjialive-api.p.rapidapi.com/api/public/kanji/all", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
            "x-rapidapi-key": "a7cd65d8f5msh29d7c6f25510201p18afacjsn0851cc9ec915"
        }
    })
    .then((response) => response.json())
    .then((obj) => {
        console.log("obj", obj);
        createKanji(obj);
    })
    .catch(err => {
        console.log(err);
    });

    const getRandomNum = function(numbers=1236) {
        return Math.floor( Math.random() * numbers ) - 1
      }

    function createKanji(letter) {
        let randomNum = getRandomNum();

        dailyKan.innerHTML = `
            <h3>${letter[randomNum].kanji.character}</h3>  
            <video width="150" height="150" autoplay loop>
            <source src="${letter[randomNum].kanji.video.mp4}">
            </video>
        
        `;
        meaning.innerHTML = `<b>Meaning:</b> ${letter[randomNum].kanji.meaning.english}`;
        read.innerHTML = `
        <b>Kunyomi:</b> ${letter[randomNum].kanji.kunyomi.hiragana} <b>Onyomi:</b> ${letter[randomNum].kanji.onyomi.katakana}
        `;
}

}
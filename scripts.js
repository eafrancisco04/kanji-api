const dailyKan = document.getElementById("kanji")
const getKan = document.getElementById("get-kanji")

getKan.addEventListener("click", function() {
    getKanjiLetter();

})

function getKanjiLetter(){

//     fetch("https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&contains=C%2523&idRange=0-150&blacklistFlags=nsfw%2Cracist", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
// 		"x-rapidapi-key": "a7cd65d8f5msh29d7c6f25510201p18afacjsn0851cc9ec915"
// 	}
// })

    fetch("https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?ks=16", {
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

    const getRandomNum = function(numbers=31) {
        return Math.floor( Math.random() * numbers ) - 1
      }

    function createKanji(letter) {
        let randomNum = getRandomNum();


        dailyKan.innerHTML = `<p>${letter[randomNum].kanji.character}</p>`;
}

}
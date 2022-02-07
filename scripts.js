const gameEl = document.getElementById("game")
const getGame = document.getElementById("get-game")

getGame.addEventListener("click", function() {
    getGameData();

})

function getGameData(){

    fetch("https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?ks=16", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
            "x-rapidapi-key": "a7cd65d8f5msh29d7c6f25510201p18afacjsn0851cc9ec915"
        }
    })
    .then((response) => response.json())
    .then((obj) => {
        createPosts(obj);
    })
    .catch(err => {
        console.error(err);
    });

}
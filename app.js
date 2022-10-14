const app = document.getElementById("app");
const url = "https://rickandmortyapi.com/api/character?page=";
const moreButton = document.getElementById("more");
let page = 1;

moreButton.addEventListener('click', () => {
    page++;
    loadCharacters(page)
});

const showResult = (result) => console.log(result);
const extractData = (result) => result.data.results;
// const clearApp = () => app.innerHTML = ""
const clearApp = res => { app.innerHTML = ""; return res }
const loadCharacters = (page) => 
    axios
        .get(url + page)
        .then(extractData)
        .then(clearApp)
        .then(renderCharacters)

const renderCharacters = characters => {
    // clearApp()
    characters.map(character => {
        console.log(character)
        let div = document.createElement("div")
        div.innerHTML = character.name
        app.appendChild(div)
    })
}

app.innerHTML = "Load characters";
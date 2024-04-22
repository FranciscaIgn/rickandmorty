const URL_BASE = "https://rickandmortyapi.com/api/"

let charactercardcontainer = document.querySelector(".wrapper");
// 1 Traer los datos de la API

const getallcharacter = async() => {
    try{
        const response = await fetch(`${URL_BASE}character`)
        const data = await response.json()

        
        return data
   
    }catch(error){
        console.log('no me salio')
    }
}

getallcharacter()

//  2 crear tarjeta para los personajes

const createcharactercard = async() => {
    try{
        const getcharacterdata = await getallcharacter()
        console.log(getcharacterdata)
        const characterdata = getcharacterdata.results
        console.log(characterdata)

        let htmlcode = '';
        characterdata.forEach((character) => {
            htmlcode +=`
            <div class="character-card">
              <div class="character-img">
                  <img src="${character.image}" alt="${character.name} image">
              </div>
              <div class="character-card-body">
                    <h2 class="character-title">${character.name}</h2>
                    <h3 class="character-subtitle">Species</h3>
                    <p class="character-species-status">${character.species} - ${character.status}</p>
                    <button class="btn-character-card">Click for more Info</button>
              </div>
            </div>
            `
            return htmlcode // return del foreach
        })
            
            return htmlcode // return de mi funcion grande
    }catch(error){
        console.log('no me salio :C')
    }
}
createcharactercard()

// 3 imprimir las tarjetas

const printcharactercards = async() =>{
    try{
        const charactercollectioncards = await createcharactercard()
        
        charactercardcontainer.innerHTML = charactercollectioncards

    }catch(error){
        console.log('esto no me salio')
    }

}
printcharactercards()


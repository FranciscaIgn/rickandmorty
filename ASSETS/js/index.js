const URL_BASE = "https://rickandmortyapi.com/api/"

let charactercardcontainer = document.querySelector(".wrapper");
let characterselected = document.querySelector(".character-selected");

let inputcharacter = document.querySelector(".search-character");
let searchbutton = document.querySelector(".search-button"); 
// 1 Traer los datos de la API character

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

// 4 traer los datos de 1 solo peronaje
const getonecharacter = async(character) => {
    try{
        const response = await fetch(`${URL_BASE}character/${character}`)
        const data = await response.json()
        
        return (data)
        
    }catch(error){
        console.log('esto no me funciono dios')
    }

}
getonecharacter()

//  2 crear tarjeta para los personajes

const createcharactercard = async() => {
    try{
        const getcharacterdata = await getallcharacter()
       
        const characterdata = getcharacterdata.results
      

        let htmlcode = '';
        characterdata.forEach((character) => {
            htmlcode +=`
            <div class="character-card">
              <div class="character-img">
                  <img src="${character.image}" alt="${character.name} image">
              </div>
              <div class="character-card-body">
                    <h2 class="character-title">${character.name}</h2>
                    <p class="character-species-id">N° ${character.id}</p>
                    <h3 class="character-subtitle">Species</h3>
                    <p class="character-species-status">${character.species} - ${character.status}</p>
                    
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

//  5 crear tarjeta para un solo personaje

const createOnecharactercard = async(character) => {
   try{
        const characterData = await getonecharacter(character)
        
        let htmlcode =`
        <div class="one-character-card">
           <div class="one-character-header">
               <div class="one-character-img">
                  <img src="${characterData.image}" alt="${characterData.name}">
           </div>
        <h2 class="one-character-name">${characterData.name}</h2>
           <p class="one-character-status"> ${characterData.status}</p>
            <p class="one-character-species">${characterData.species}</p>
            <p class="character-id">N° ${characterData.id}</p>
        <div class="one-character-body">
          <p class="character-info> Type: <span class="character-text">${characterData.type}</span></p>
          <p class="character-info> Gender: <span class="character-text">${characterData.gender}</span></p>
          <p class="character-info> origin: <span class="character-text">${characterData.origin}</span></p>
          <p class="character-info> location: <span class="character-text">${characterData.location}</span></p> 
        </div>

        <div>
            <canvas id="myChart">

            </canvas>
           </div>    
       `
        console.log(htmlcode)
        return htmlcode
        

    }catch(error){
          console.log('no me esta funcionando')
    }
}


 //6 imprimir la tarjeta del character 

const printonecharactercard = async(character) => {
    try{
       
       const getchracter = await getonecharacter(character)
       
       const charactercard = await createOnecharactercard(character)

        characterselected.innerHTML = charactercard
        
        createcharacterChart(getchracter)

    }catch(error){
        console.log('ya vali madre')
    }
}

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


searchbutton.addEventListener('click' , async() => {
    let character = inputcharacter.value

    await printonecharactercard(character)

   
})

// 7 crear funcion de chatjs

const createcharacterChart = (character) => {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [`${character.species}`,
                 `${character.species}`,
                 `${character.species}`,
                 `${character.species}`],
        datasets: [{
          label: 'species',
          data: [1, 2, 3, 4, 5, 6],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}






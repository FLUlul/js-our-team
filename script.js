/* 
Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:

- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.

- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
*/

const containerTeam = document.querySelector(".team-container");

let img = "";
let name = "";
let title = "";


let team = [
    {
        "image": "img/wayne-barnett-founder-ceo.jpg",
        "name":  "Wayne Barnett",
        "title": "Founder & CEO"
    },

    {
        "image": "img/angela-caroll-chief-editor.jpg",
        "name":  "Angela Caroll",
        "title": "Chief Editor"
    },
];


for(i = 0; i < team.length; i++){
    let teamIndex = team[i];
    img = teamIndex.image;
    name = teamIndex.name;
    title = teamIndex.title; 

/*     for(let key in teamIndex){
        console.log(key, teamIndex[key]);
        
    } */
}


let founder = newCard(img, name, title);
let chiefEditor = newCard(img, name, title);


console.log(img);
console.log(name);
console.log(title);




function newCard(imageUrl, nameCard, titleCard){

    containerTeam.innerHTML += `
    <div class="team-card">
    <div class="card-image">
      <img
        src=${imageUrl}
        alt=${nameCard}
      />
    </div>
    <div class="card-text">
      <h3>${nameCard}</h3>
      <p>${titleCard}</p>
    </div>
  </div>
  `
}


/* 
Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:

- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.

- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
*/

const containerTeam = document.querySelector(".team-container");


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

    {
        "image": "img/walter-gordon-office-manager.jpg",
        "name":  "Walter Gordon",
        "title": "Office Manager"
    },

    {
        "image": "img/angela-lopez-social-media-manager.jpg",
        "name":  "Angela Lopez",
        "title": "Social Media Manager"
    },

    {
        "image": "img/scott-estrada-developer.jpg",
        "name":  "Scott Estrada",
        "title": "Developer"
    },

    {
        "image": "img/barbara-ramos-graphic-designer.jpg",
        "name":  "Barbara Ramos",
        "title": "Graphic Designer"
    },
];


for(i = 0; i < team.length; i++){
    let teamIndex = team[i];

    let imgVar = teamIndex.image;
    let nameVar = teamIndex.name;
    let titleVar = teamIndex.title; 

    let card = newCard(imgVar, nameVar, titleVar);

    console.log(imgVar);
    console.log(nameVar);
    console.log(titleVar);
}









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


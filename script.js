/* 
Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:

- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.

- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
*/

/* 
-mi creo una funzione che mi permetta di avere l'html con le variabili che do ai parametri della funzione
-creo l'array di oggetti con le informazioni suddivise in
    immagine
    nome
    titolo
creo un ciclo for
    mi creo una variabile a cui assegno l'indice i dell'array
    mi creo una varabile dove vado a prendere il contenuto della chiave immagine nell'oggetto dell'indice
    mi creo una varabile dove vado a prendere il contenuto della chiave nome nell'oggetto dell'indice
    mi creo una varabile dove vado a prendere il contenuto della chiave titolo nell'oggetto dell'indice

    richiamo la funzione html cambiando i parametri con le variabili


    -creo un event listener click al pulsante del form
        mi prende il valore dentro l'input nome
        mi prende il valore dentro l'input ruolo
        mi prende il valore dentro l'input immagine

        mi richiamo la funzione html cambiando i parametri con le variabili.

*/

/* costanti per associare gli elementi in html */
const containerTeam = document.querySelector(".team-container");
const addBtn = document.getElementById("addMemberButton");

/* array di oggetti  */
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

/* pulsante del form */
addBtn.addEventListener("click",
    function(){
        /* i valori inseriti negli input quando clicca */
        let nameInput = document.getElementById("name").value;
        let roleInput = document.getElementById("role").value;
        let imageInput = document.getElementById("image").value;
        
        console.log(nameInput, roleInput, imageInput);

        let addCard = {
            "image": imageInput,
            "name": nameInput,
            "title": roleInput
        }

        /* console.log(addCard); */

        team.push(addCard);

        /* console.log(team); */
        let teamIndex = team[team.length-1];

        let imgVar = teamIndex.image;
        let nameVar = teamIndex.name;
        let titleVar = teamIndex.title; 
    
        newCard(imgVar, nameVar, titleVar);
        /* richiamo funzione html con le variabili dei valori inseriti */
        /* newCard(imageInput, nameInput, roleInput); */

    }
);

/* ciclo for per riempire la pagina, prendendo i valori dall'array di oggetti */
for(i = 0; i < team.length; i++){
    let teamIndex = team[i];

    let imgVar = teamIndex.image;
    let nameVar = teamIndex.name;
    let titleVar = teamIndex.title; 

    newCard(imgVar, nameVar, titleVar);

}



/* funzione per creare il blocco html */
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


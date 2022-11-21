/*creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.*/

const container = document.getElementById("container");

//crea arrey oggetti
const team = 
[
    {
        "nome" : "Wayne",
        "cognome" : "Barnett",
        "ruolo" : "CEO",
        "foto" : "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome" : "Angela",
        "cognome" : "Caroll",
        "ruolo" : "Chief editor",
        "foto" : "img/angela-caroll-chief-editor.jpg"
    },

    {
        "nome" : "Walter",
        "cognome" : "Gordon",
        "ruolo" : "Office manager",
        "foto" : "img/walter-gordon-office-manager.jpg"
    },

    {
        "nome" : "Angela",
        "cognome" : "Lopez",
        "ruolo" : "Social media manager",
        "foto" : "img/angela-lopez-social-media-manager.jpg"
    },

    {
        "nome" : "Scott",
        "cognome" : "Estrada",
        "ruolo" : "Developer",
        "foto" : "img/scott-estrada-developer.jpg"
    },

    {
        "nome" : "Barbara",
        "cognome" : "Ramos",
        "ruolo" : "Graphic designer",
        "foto" : "img/barbara-ramos-graphic-designer.jpg"
    }

]

console.log(team);

//crea div che conterranno info team
for (let i = 0; i < team.length; i++) {
    let teamObj = team[i];
    let card = `
    <div class="card">
                <img src="${teamObj.foto}" alt="">

                <div class="text">
                    <div>${teamObj.nome} ${teamObj.cognome}</div>
                    <div>${teamObj.ruolo}</div>
                </div>
                
            </div>
    `;

    container.innerHTML += card; 
}
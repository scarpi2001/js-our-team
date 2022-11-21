/*creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.*/

//crea arrey oggetti
const team = 
[
    {
        "nome" : "Wayne",
        "cognome" : "Barnett",
        "ruolo" : "CEO",
        "foto" : "wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome" : "Angela",
        "cognome" : "Caroll",
        "ruolo" : "Chief editor",
        "foto" : "angela-caroll-chief-editor.jpg"
    },

    {
        "nome" : "Walter",
        "cognome" : "Gordon",
        "ruolo" : "Office manager",
        "foto" : "walter-gordon-office-manager.jpg"
    },

    {
        "nome" : "Angela",
        "cognome" : "Lopez",
        "ruolo" : "Social media manager",
        "foto" : "angela-lopez-social-media-manager.jpg"
    },

    {
        "nome" : "Scott",
        "cognome" : "Estrada",
        "ruolo" : "Developer",
        "foto" : "scott-estrada-developer.jpg"
    },

    {
        "nome" : "Barbara",
        "cognome" : "Ramos",
        "ruolo" : "Graphic designer",
        "foto" : "barbara-ramos-graphic-designer.jpg"
    }

]

console.log(team);

//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++) {
    let teamObj = team[i];

    console.log("membro", i + 1);

    for (let key in teamObj) {
        console.log(teamObj[key]);
    }
    
}
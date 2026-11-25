
const joueurs = [
  { pseudo: "Maple", poste: "Support", scoreSaison: 2510 },
  { pseudo: "Quill", poste: "Initiateur", scoreSaison: 1870 },
  { pseudo: "Frostbyte", poste: "Duelliste", scoreSaison: 3620 },
];


joueurs.sort((a, b) => b.scoreSaison - a.scoreSaison);


const corpsTableau = document.querySelector("#corps-tableau");


let lignes = "";


for (const joueur of joueurs) {


  let classe = "";

  if (joueur.scoreSaison > 3000) {
    classe = ' class="score-eleve"';
  }


  lignes += `
    <tr${classe}>
      <td>${joueur.pseudo}</td>
      <td>${joueur.poste}</td>
      <td>${joueur.scoreSaison}</td>
    </tr>
  `;
}


corpsTableau.innerHTML = lignes;

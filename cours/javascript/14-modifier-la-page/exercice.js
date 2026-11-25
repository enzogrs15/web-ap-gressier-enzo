
const pseudoJoueur = "Serpent";
const posteJoueur = "Duelliste";
const scoreSaison = 6140;


const nomJoueur = document.querySelector("#nom-joueur");
const statutJoueur = document.querySelector("#statut-joueur");


nomJoueur.textContent = pseudoJoueur;
statutJoueur.textContent = posteJoueur;


console.log(nomJoueur.outerHTML);
console.log(statutJoueur.outerHTML);


nomJoueur.classList.toggle("score-eleve", scoreSaison > 5000);

console.log(nomJoueur.outerHTML);

const commentaire = "Ce joueur est <strong>en pleine forme</strong> cette saison.";

statutJoueur.textContent = commentaire;


statutJoueur.innerHTML = commentaire;

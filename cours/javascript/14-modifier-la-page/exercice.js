const nomJoueur = document.querySelector("#nom-joueur");
const statutJoueur = document.querySelector("#statut-joueur");

nomJoueur.textContent = "Nova Sentinels";
statutJoueur.textContent = "Joueur confirmé";

console.log(nomJoueur.outerHTML);
console.log(statutJoueur.outerHTML);

// Ajouter une classe si le score dépasse 5000
nomJoueur.classList.toggle("score-eleve", scoreSaison > 5000);

console.log(nomJoueur.outerHTML);

// Comparaison textContent et innerHTML
const commentaire = "Ce joueur est <strong>en pleine forme</strong> cette saison.";

// FAILLE XSS : utiliser innerHTML avec du contenu utilisateur non vérifié
// peut permettre l'injection de code malveillant.

statutJoueur.innerHTML = commentaire;

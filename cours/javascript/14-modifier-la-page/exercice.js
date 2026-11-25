// Informations sur un joueur de l'équipe Silent Vipers
const pseudoJoueur = "Serpent";
const posteJoueur = "Duelliste";
const scoreSaison = 6140;

// Sélectionner les éléments HTML
const nomJoueur = document.querySelector("#nom-joueur");
const statutJoueur = document.querySelector("#statut-joueur");

// Modifier le contenu des éléments
nomJoueur.textContent = pseudoJoueur;
statutJoueur.textContent = posteJoueur;

// Afficher les informations dans la console
console.log(nomJoueur.outerHTML);
console.log(statutJoueur.outerHTML);

// Ajouter une classe si le score dépasse 5000
nomJoueur.classList.toggle("score-eleve", scoreSaison > 5000);

console.log(nomJoueur.outerHTML);

// Comparaison textContent et innerHTML
const commentaire = "Ce joueur est <strong>en pleine forme</strong> cette saison.";

// Première méthode : textContent
statutJoueur.textContent = commentaire;

// Deuxième méthode : innerHTML
statutJoueur.innerHTML = commentaire;

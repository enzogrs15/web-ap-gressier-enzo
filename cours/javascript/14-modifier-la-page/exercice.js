
// Informations sur un joueur de l'équipe Silent Vipers
const pseudoJoueur = "Serpent";
const posteJoueur = "Duelliste";
const scoreSaison = 6140;

// Modifier le nom du joueur
document.getElementById("nom-joueur").textContent = pseudoJoueur;

// Modifier le statut du joueur
document.getElementById("statut-joueur").textContent =
    "Poste : " + posteJoueur + " | Score de saison : " + scoreSaison;

// Ajouter une classe selon une condition
document.querySelector("#nom-joueur").classList.toggle("score-eleve", scoreSaison > 5000);

// Vérifier la classe dans la console
console.log(document.querySelector("#nom-joueur").outerHTML);

// Variable commentaire
const commentaire = "Ce joueur est <strong>en pleine forme</strong> cette saison.";

// Test avec textContent
document.querySelector("#statut-joueur").textContent = commentaire;

// Test avec innerHTML
// document.querySelector("#statut-joueur").innerHTML = commentaire;

// innerHTML peut provoquer une faille XSS si le contenu provient directement
// d'une saisie utilisateur non vérifiée.
// FailIe XSS (Cross-Site Scripting) : innerHTML peut exécuter
// du contenu malveillant injecté par un utilisateur.


// Informations sur un joueur de l'équipe Iron Phoenix
const pseudoJoueur = "Ashen";
const posteJoueur = "Duelliste";
let scoreSaison = 5210;

// Calculer un bonus de 500 points
let scoreAvecBonus = scoreSaison + 500;

// Afficher le pseudo et le score avec bonus
console.log(pseudoJoueur + " : " + scoreAvecBonus);

// Vérifier si le score dépasse 5000
let meilleurScore = scoreSaison > 5000;

console.log(meilleurScore);

// Addition classique : les deux nombres sont additionnés
console.log(5 + 3);

// Avec une chaîne de caractères, + réalise une concaténation
console.log("5" + 3);

// Les nombres décimaux sont représentés en virgule flottante binaire,
// ce qui peut entraîner de petites imprécisions de calcul.
console.log(0.1 + 0.2);


// Effectif de l'équipe Silent Vipers
const joueurs = [
  { pseudo: "Serpent", poste: "Duelliste", scoreSaison: 6140 },
  { pseudo: "Onyx", poste: "Controleur", scoreSaison: 4470 },
  { pseudo: "Whisper", poste: "Sentinelle", scoreSaison: 3890 },
  { pseudo: "Tempest", poste: "Initiateur", scoreSaison: 5030 },
];

const champRecherche = document.querySelector("#champ-recherche");
const corpsTableau = document.querySelector("#corps-tableau");

// Fonction pour normaliser le texte
function normaliser(chaine) {
  return chaine
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// Fonction pour afficher les joueurs
function afficherJoueurs(listeJoueurs) {
  let lignesTableau = "";

  if (listeJoueurs.length === 0) {
    lignesTableau = '<tr><td colspan="3">Aucun joueur ne correspond à la recherche.</td></tr>';
  } else {
    for (const joueur of listeJoueurs) {
      lignesTableau += "<tr><td>" + joueur.pseudo + "</td><td>" + joueur.poste + "</td><td>" + joueur.scoreSaison + "</td></tr>";
    }
  }

  corpsTableau.innerHTML = lignesTableau;
}

// Afficher tous les joueurs au démarrage
afficherJoueurs(joueurs);

// Gestionnaire de recherche
champRecherche.addEventListener("input", function () {
  const recherche = normaliser(champRecherche.value);

  const joueursFiltres = joueurs.filter(function (joueur) {
    return normaliser(joueur.pseudo).includes(recherche);
  });

  afficherJoueurs(joueursFiltres);
});

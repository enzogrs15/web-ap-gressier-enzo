
// Base fournie : compteur de caractères et message personnalisé pour le pseudo
const formulaire = document.querySelector("#formulaire-joueur");
const champPseudo = document.querySelector("#pseudo");
const compteurPseudo = document.querySelector("#compteur-pseudo");
const champDateNaissance = document.querySelector("#date-naissance");
const champDateArrivee = document.querySelector("#date-arrivee");
const messageFormulaire = document.querySelector("#message-formulaire");

const limitePseudo = 20;

function mettreAJourCompteur() {
  const caracteresRestants = limitePseudo - champPseudo.value.length;

  compteurPseudo.textContent = caracteresRestants + " caractère(s) restant(s)";

  if (caracteresRestants <= 5) {
    compteurPseudo.classList.add("compteur-alerte");
  } else {
    compteurPseudo.classList.remove("compteur-alerte");
  }
}

champPseudo.addEventListener("input", mettreAJourCompteur);
mettreAJourCompteur();

champPseudo.addEventListener("invalid", function () {
  if (champPseudo.validity.valueMissing) {
    champPseudo.setCustomValidity("Merci d'indiquer le pseudo du joueur avant de valider le formulaire.");
  } else if (champPseudo.validity.patternMismatch) {
    champPseudo.setCustomValidity("Un pseudo ne peut contenir que des lettres et des chiffres.");
  }
});

champPseudo.addEventListener("input", function () {
  champPseudo.setCustomValidity("");
});

function verifierDates() {
  if (
    champDateNaissance.value !== "" &&
    champDateArrivee.value !== "" &&
    champDateArrivee.value < champDateNaissance.value
  ) {
    champDateArrivee.setCustomValidity(
      "La date d'arrivée dans l'équipe ne peut pas être antérieure à la date de naissance."
    );
  } else {
    champDateArrivee.setCustomValidity("");
  }
}

champDateNaissance.addEventListener("change", verifierDates);
champDateArrivee.addEventListener("change", verifierDates);

formulaire.addEventListener("submit", function (evenement) {
  evenement.preventDefault();

  messageFormulaire.textContent = "Formulaire valide : toutes les vérifications sont passées.";

  console.log("Formulaire valide : l'envoi réel sera pris en charge par le PHP, à partir de la Partie 20.");
});

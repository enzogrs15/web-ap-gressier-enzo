

const boutonSilentVipers = document.querySelector('#bouton-silent-vipers');
const detailsSilentVipers = document.querySelector('#details-silent-vipers');

boutonSilentVipers.addEventListener('click', function () {
  detailsSilentVipers.classList.toggle('cachee');

  if (detailsSilentVipers.classList.contains('cachee')) {
    boutonSilentVipers.textContent = 'Afficher Silent Vipers';
  } else {
    boutonSilentVipers.textContent = 'Masquer Silent Vipers';
  }
});


const boutonsEquipes = document.querySelectorAll('.bouton-equipe');


boutonsEquipes.forEach(function (bouton) {
  bouton.addEventListener('click', function (event) {


    const boutonClique = event.currentTarget;


    const identifiantCible = boutonClique.dataset.cible;


    const detailsEquipe = document.querySelector('#' + identifiantCible);


    detailsEquipe.classList.toggle('cachee');


    if (detailsEquipe.classList.contains('cachee')) {
      boutonClique.textContent = 'Afficher ' + boutonClique.textContent.replace('Masquer ', '');
    } else {
      boutonClique.textContent = 'Masquer ' + boutonClique.textContent.replace('Afficher ', '');
    }

  });
});

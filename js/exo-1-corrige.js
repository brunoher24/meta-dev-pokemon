const gererErreur = erreur => {
  alert(`Une erreur est survenue ! : ${erreur}`);
};

const afficherLeResultatFinalDeMaRquete = resultatFinal => {
  console.log(resultatFinal);
};

const gererLaReponseDeMaRequete = reponseDeMaRequete => {
  return reponseDeMaRequete.json();
}

fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
  .then(gererLaReponseDeMaRequete, gererErreur)
  .then(afficherLeResultatFinalDeMaRquete, gererErreur);
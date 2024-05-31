export const exo1 = () => {
  const afficherLeResultatFinalDeMaRquete = resultatFinal => {
    console.log(resultatFinal);
  };

  const gererLaReponseDeMaRequete = reponseDeMaRequete => {
    return reponseDeMaRequete.json();
  }

  fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
    .then(gererLaReponseDeMaRequete)
    .then(afficherLeResultatFinalDeMaRquete);
  /*
    Ajouter une fonction à passer en deuxième paramètre
    de chaque bloc de completion .then(), de façon à afficher
    dans la console si une erreur est survenue dans l'envoi
    de la requête
  */
};


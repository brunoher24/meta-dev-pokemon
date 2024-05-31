/*
  lien utile : https://beyondthecloud.dev/blog/then-vs-async-await-in-lwc#nested-promises
  refondre la syntaxe .then en async await
*/
export const exo2 = () => {
  const gererLaReponseDeMaRequete = reponseDeMaRequete => {
    return reponseDeMaRequete.json();
  }

  const afficherLeResultatFinalDeMaRquete = resultatFinal => {
    console.log(resultatFinal);
  }

  fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
    .then(gererLaReponseDeMaRequete)
    .then(afficherLeResultatFinalDeMaRquete);

};


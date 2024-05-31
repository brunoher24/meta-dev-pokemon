export const exo2Corrige = async () => {

  const reponseDeMaRequete = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20");
  const resultatFinal = await reponseDeMaRequete.json();
  console.log(resultatFinal);
};


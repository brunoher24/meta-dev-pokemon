export const exo2Corrige = async () => {
  const reponseDeMaRequette = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20");
  const resultatFinal = await reponseDeMaRequette.json();
  return resultatFinal;
};




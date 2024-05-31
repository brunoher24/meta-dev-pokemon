export const exo4 = async () => {

  const reponseDeMaRequete = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20");
  const resultatFinal = await reponseDeMaRequete.json();

  /*
    CONSIGNE 4 : 
    afficher sous la forme d'une liste dans la page les pokemons avec leur nom

    url pour récupéer dynamiquement l'image d'un pokemon grâce à son index
    https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png

    indice : 
    const tableau = 'https://pokeapi.co/api/v2/pokemon/1479897/'.split('/');
    console.log(tableau[tableau.length-2])
  */
};
export const exo5 = async () => {

  const reponseDeMaRequete = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20");
  const resultatFinal = await reponseDeMaRequete.json();
  const pokemons = resultatFinal.results;

  const listePokemonsUl = document.querySelector("#pokemons-list");

  let innerHTML = "";
  for (let i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i]);
    const url = pokemons[i].url;
    const fragments = url.split("/");
    const index = fragments[fragments.length - 2];
    innerHTML += `
    <li>
      <p>Nom : ${pokemons[i].name}</p>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png" alt="">
      <button>Voir infos</button>
    </li>`;
  }
  listePokemonsUl.innerHTML = innerHTML;

  /*
    CONSIGNE 5 : 
    Ajouter à chaque pokemon généré dans la liste un bouton 'voir details'
    Ajouter une fonction de callback à ce bouton déclenchée lors de l'événement 'click’
    Lors du click, afficher dans la console l'id du pokemon correspondant
    ----------

    lien utiles : 

    https://ian-marshall.medium.com/innerhtml-vs-append-with-event-listeners-b13cba10cdf8
    https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/dataset
    https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
  */
};
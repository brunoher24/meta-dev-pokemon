export const exo4Corrige = async () => {

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
    </li>`;
  }
  listePokemonsUl.innerHTML = innerHTML;
};
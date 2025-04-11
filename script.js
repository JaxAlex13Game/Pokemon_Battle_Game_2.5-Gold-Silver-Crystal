// Add this at the beginning of your script.js

// Title Screen Functionality
const titleScreen = document.getElementById("title-screen");
const gameScreen = document.getElementById("game-screen");
const startGameBtn = document.getElementById("start-game");
const howToPlayBtnTitle = document.getElementById("how-to-play-btn");

startGameBtn.addEventListener("click", () => {
  titleScreen.style.display = "none";
  gameScreen.style.display = "block";
  
  // Initialize game with random Pokémon
  const [initialPokemon1, initialPokemon2] = getTwoUniquePokemon();
  currentPokemon1 = { ...initialPokemon1 };
  currentPokemon2 = { ...initialPokemon2 };
  displayPokemon(currentPokemon1, pokemon1Element);
  displayPokemon(currentPokemon2, pokemon2Element);
});

howToPlayBtnTitle.addEventListener("click", () => {
  modal.style.display = "block";
});

// The rest of your existing JavaScript code remains the same...
// Type effectiveness chart
const typeEffectiveness = {
  normal: { rock: 0.5, ghost: 0, steel: 0.5 },
  fire: { fire: 0.5, water: 0.5, grass: 2, ice: 2, bug: 2, rock: 0.5, dragon: 0.5, steel: 2 },
  water: { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2, dragon: 0.5 },
  electric: { water: 2, electric: 0.5, grass: 0.5, ground: 0, flying: 2, dragon: 0.5 },
  grass: { fire: 0.5, water: 2, grass: 0.5, poison: 0.5, ground: 2, flying: 0.5, bug: 0.5, rock: 2, dragon: 0.5, steel: 0.5 },
  ice: { fire: 0.5, water: 0.5, grass: 2, ice: 0.5, ground: 2, flying: 2, dragon: 2, steel: 0.5 },
  fighting: { normal: 2, ice: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: 0.5 },
  poison: { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0, fairy: 2 },
  ground: { fire: 2, electric: 2, grass: 0.5, poison: 2, flying: 0, bug: 0.5, rock: 2, steel: 2 },
  flying: { electric: 0.5, grass: 2, fighting: 2, bug: 2, rock: 0.5, steel: 0.5 },
  psychic: { fighting: 2, poison: 2, psychic: 0.5, dark: 0, steel: 0.5 },
  bug: { fire: 0.5, grass: 2, fighting: 0.5, poison: 0.5, flying: 0.5, psychic: 2, ghost: 0.5, dark: 2, steel: 0.5, fairy: 0.5 },
  rock: { fire: 2, ice: 2, fighting: 0.5, ground: 0.5, flying: 2, bug: 2, steel: 0.5 },
  ghost: { normal: 0, psychic: 2, ghost: 2, dark: 0.5 },
  dragon: { dragon: 2, steel: 0.5, fairy: 0 },
  dark: { fighting: 0.5, psychic: 2, ghost: 2, dark: 0.5, fairy: 0.5 },
  steel: { fire: 0.5, water: 0.5, electric: 0.5, ice: 2, rock: 2, steel: 0.5, fairy: 2 },
  fairy: { fire: 0.5, fighting: 2, poison: 0.5, dragon: 2, dark: 2, steel: 0.5 }
};

// Pokémon data
// Sample Pokémon data
const pokemonList = [
  { name: "Bulbasaur", hp: 68, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/bulbasaur.png" },
  { name: "Ivysaur", hp: 97, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/ivysaur.png" },
  { name: "Venusaur", hp: 134, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/venusaur.png" },
  { name: "Charmander", hp: 65, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/charmander.png" },
  { name: "Charmeleon", hp: 95, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/charmeleon.png" },
  { name: "Charizard", hp: 129, types: ["fire", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/charizard.png" },
  { name: "Squirtle", hp: 61, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/squirtle.png" },
  { name: "Wartortle", hp: 84, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/wartortle.png" },
  { name: "Blastoise", hp: 131, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/blastoise.png" },
  { name: "Caterpie", hp: 55, types: ["bug"], image: "https://img.pokemondb.net/sprites/crystal/normal/caterpie.png"},
  { name: "Metapod", hp: 65, types: ["bug"], image: "https://img.pokemondb.net/sprites/crystal/normal/metapod.png"},
  { name: "Butterfree", hp: 84, types: ["bug", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/butterfree.png"},
  { name: "Weedle", hp: 43, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/weedle.png"},
  { name: "Kakuna", hp: 51, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/kakuna.png"},
  { name: "Beedrill", hp: 83, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/beedrill.png"},
  { name: "Pidgey", hp: 55, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/pidgey.png"},
  { name: "Pidgeotto", hp: 78, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/pidgeotto.png"},
  { name: "Pidgeot", hp: 118, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/pidgeot.png"},
  { name: "Rattata", hp: 51, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/rattata.png"},
  { name: "Raticate", hp: 78, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/raticate.png"},
  { name: "Spearow", hp: 58, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/spearow.png"},
  { name: "Fearow", hp: 106, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/fearow.png"},
  { name: "Ekans", hp: 61, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/ekans.png"},
  { name: "Arbok", hp: 86, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/arbok.png"},
  { name: "Pikachu", hp: 56, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/pikachu.png"},
  { name: "Pikachu(Female)", hp: 56, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/pikachu-f.png"},
  { name: "Raichu", hp: 94, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/raichu.png"},
  { name: "Raichu(Female)", hp: 94, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/raichu-f.png"},
  { name: "Sandshrew", hp: 61, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/sandshrew.png"},
  { name: "Sandslash", hp: 90, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/sandslash.png"},
  { name: "Nidoran(Female)", hp: 64, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/nidoran-f.png"},
  { name: "Nidorina", hp: 88, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/nidorina.png"},
  { name: "Nidoqueen", hp: 114, types: ["poison", "ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/nidoqueen.png"},
  { name: "Nidoran(Male)", hp: 62, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/nidoran-m.png"},
  { name: "Nidorino", hp: 90, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/nidorino.png"},
  { name: "Nidoking", hp: 116, types: ["poison", "ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/nidoking.png"},
  { name: "Clefairy", hp: 81, types: ["fairy"], image: "https://img.pokemondb.net/sprites/crystal/normal/clefairy.png"},
  { name: "Clefable", hp: 128, types: ["fairy"], image: "https://img.pokemondb.net/sprites/crystal/normal/clefable.png"},
  { name: "Vulpix", hp: 61, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/vulpix.png"},
  { name: "Ninetales", hp: 90, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/ninetales.png"},
  { name: "Jigglypuff", hp: 118, types: ["normal", "fairy"], image: "https://img.pokemondb.net/sprites/crystal/normal/jigglypuff.png" },
  { name: "Wigglytuff", hp: 150, types: ["normal", "fairy"], image: "https://img.pokemondb.net/sprites/crystal/normal/wigglytuff.png" },
  { name: "Zubat", hp: 53, types: ["poison", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/zubat.png"},
  { name: "Golbat", hp: 83, types: ["poison", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/golbat.png"},
  { name: "Oddish", hp: 61, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/oddish.png"},
  { name: "Gloom", hp: 81, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/gloom.png"},
  { name: "Vileplume", hp: 102, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/vileplume.png"},
  { name: "Paras", hp: 54, types: ["bug", "grass"], image: "https://img.pokemondb.net/sprites/crystal/normal/paras.png"},
  { name: "Parasect", hp: 76, types: ["bug", "grass"], image: "https://img.pokemondb.net/sprites/crystal/normal/parasect.png"},
  { name: "Venonat", hp: 79, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/venonat.png"},
  { name: "Venomoth", hp: 101, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/venomoth.png"},
  { name: "Diglett", hp: 42, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/diglett.png"},
  { name: "Dugtrio", hp: 66, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/dugtrio.png"},
  { name: "Meowth", hp: 59, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/meowth.png" },
  { name: "Persian", hp: 83, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/persian.png" },
  { name: "Psyduck", hp: 67, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/psyduck.png" },
  { name: "Golduck", hp: 102, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/golduck.png" },
  { name: "Mankey", hp: 69, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/normal/mankey.png"},
  { name: "Primeape", hp: 97, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/normal/primeape.png"},
  { name: "Growlithe", hp: 66, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/growlithe.png"},
  { name: "Arcanine", hp: 113, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/arcanine.png" },
  { name: "Poliwag", hp: 70, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/poliwag.png"},
  { name: "Poliwhirl", hp: 91, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/poliwhirl.png"},
  { name: "Poliwrath", hp: 121, types: ["water", "fighting"], image: "https://img.pokemondb.net/sprites/crystal/normal/poliwrath.png"},
  { name: "Abra", hp: 50, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/abra.png"},
  { name: "Kadabra", hp: 70, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/kadabra.png" },
  { name: "Alakazam", hp: 90, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/alakazam.png" },
  { name: "Machop", hp: 85, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/normal/machop.png" },
  { name: "Machoke", hp: 95, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/normal/machoke.png" },
  { name: "Machamp", hp: 125, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/normal/machamp.png" },
  { name: "Bellsprout", hp: 74, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/bellsprout.png"},
  { name: "Weepinbell", hp: 94, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/weepinbell.png"},
  { name: "Victreebel", hp: 112, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/victreebel.png"},
  { name: "Tentacool", hp: 73, types: ["water", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/tentacool.png"},
  { name: "Tentacruel", hp: 106, types: ["water", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/tentacruel.png"},
  { name: "Geodude", hp: 75, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/geodude.png"},
  { name: "Graveler", hp: 88, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/graveler.png"},
  { name: "Golem", hp: 103, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/golem.png"},
  { name: "Ponyta", hp: 69, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/ponyta.png"},
  { name: "Rapidash", hp: 87, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/rapidash.png"},
  { name: "Slowpoke", hp: 124, types: ["water", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/slowpoke.png"},
  { name: "Slowbro", hp: 140, types: ["water", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/slowbro.png"},
  { name: "Magnemite", hp: 51, types: ["electric", "steel"], image: "https://img.pokemondb.net/sprites/crystal/normal/magnemite.png"},
  { name: "Magneton", hp: 76, types: ["electric", "steel"], image: "https://img.pokemondb.net/sprites/crystal/normal/magneton.png"},
  { name: "Farfetch'd", hp: 82, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/farfetchd.png"},
  { name: "Doduo", hp: 67, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/doduo.png"},
  { name: "Dodrio", hp: 90, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/dodrio.png"},
  { name: "Seel", hp: 74, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/seel.png"},
  { name: "Dewgong", hp: 122, types: ["water", "ice"], image: "https://img.pokemondb.net/sprites/crystal/normal/dewgong.png"},
  { name: "Grimer", hp: 108, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/grimer.png"},
  { name: "Muk", hp: 126, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/muk.png"},
  { name: "Shellder", hp: 62, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/shellder.png"},
  { name: "Cloyster", hp: 84, types: ["water", "ice"], image: "https://img.pokemondb.net/sprites/crystal/normal/cloyster.png"},
  { name: "Gastly", hp: 62, types: ["ghost", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/gastly.png" },
  { name: "Haunter", hp: 79, types: ["ghost", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/haunter.png" },
  { name: "Gengar", hp: 95, types: ["ghost", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/gengar.png" },
  { name: "Onix", hp: 64, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/onix.png"},
  { name: "Drowzee", hp: 74, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/drowzee.png"},
  { name: "Hypno", hp: 113, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/hypno.png"},
  { name: "Krabby", hp: 63, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/krabby.png"},
  { name: "Kingler", hp: 86, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/kingler.png"},
  { name: "Voltorb", hp: 73, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/voltorb.png"},
  { name: "Electrode", hp: 92, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/electrode.png"},
  { name: "Exeggcute", hp: 81, types: ["grass", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/exeggcute.png"},
  { name: "Exeggutor", hp: 112, types: ["grass", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/exeggutor.png"},
  { name: "Cubone", hp: 68, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/cubone.png"},
  { name: "Marowak", hp: 91, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/marowak.png"},
  { name: "Hitmonlee", hp: 81, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/normal/hitmonlee.png"},
  { name: "Hitmonchan", hp: 84, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/normal/hitmonchan.png"},
  { name: "Lickitung", hp: 117, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/lickitung.png"},
  { name: "Koffing", hp: 64, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/koffing.png"},
  { name: "Weezing", hp: 88, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/weezing.png"},
  { name: "Rhyhorn", hp: 102, types: ["ground", "rock"], image: "https://img.pokemondb.net/sprites/crystal/normal/rhyhorn.png"},
  { name: "Rhydon", hp: 134, types: ["ground", "rock"], image: "https://img.pokemondb.net/sprites/crystal/normal/rhydon.png"},
  { name: "Chansey", hp: 227, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/chansey.png"},
  { name: "Tangela", hp: 79, types: ["grass"], image: "https://img.pokemondb.net/sprites/crystal/normal/tangela.png"},
  { name: "Kangaskhan", hp: 118, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/kangaskhan.png"},
  { name: "Horsea", hp: 57, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/horsea.png"},
  { name: "Seadra", hp: 87 ,types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/seadra.png"},
  { name: "Goldeen", hp: 54, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/goldeen.png"},
  { name: "Seaking", hp: 97, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/seaking.png"},
  { name: "Staryu", hp: 64, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/staryu.png"},
  { name: "Starmie", hp: 84, types: ["water", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/starmie.png"},
  { name: "Mr. Mime", hp: 69, types: ["psychic", "fairy"], image: "https://img.pokemondb.net/sprites/crystal/normal/mr-mime.png"},
  { name: "Scyther", hp: 83, types: ["bug", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/scyther.png"},
  { name: "Jynx", hp: 93, types: ["ice", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/jynx.png"},
  { name: "Electabuzz", hp: 85, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/electabuzz.png"},
  { name: "Magmar", hp: 90, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/magmar.png"},
  { name: "Pinsir", hp: 87, types: ["bug"], image: "https://img.pokemondb.net/sprites/crystal/normal/pinsir.png"},
  { name: "Tauros", hp: 103, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/tauros.png"},
  { name: "Magikarp", hp: 45, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/magikarp.png"},
  { name: "Magikarp(Female)", hp: 45, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/magikarp-f.png"},
  { name: "Gyrados", hp: 123, types: ["water", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/gyarados.png" },
  { name: "Gyrados(Female)", hp: 123, types: ["water", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/gyarados-f.png" },
  { name: "Lapras", hp: 150, types: ["water", "ice"], image: "https://img.pokemondb.net/sprites/crystal/normal/lapras.png"},
  { name: "Ditto", hp: 79, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/ditto.png"},
  { name: "Eevee", hp: 86, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/eevee.png" },
  { name: "Vaporeon", hp: 135, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/vaporeon.png"},
  { name: "Jolteon", hp: 86, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/jolteon.png"},
  { name: "Flareon", hp: 99, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/flareon.png"},
  { name: "Porygon", hp: 94, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/porygon.png"},
  { name: "Omanyte", hp: 70, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/crystal/normal/omanyte.png"},
  { name: "Omastar", hp: 100, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/crystal/normal/omastar.png"},
  { name: "Kabuto", hp: 62, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/crystal/normal/kabuto.png"},
  { name: "Kabutops", hp: 90, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/crystal/normal/kabutops.png"},
  { name: "Aerodactyl", hp: 102, types: ["rock", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/aerodactyl.png"},
  { name: "Snorlax", hp: 182, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/snorlax.png" },
  { name: "Articuno", hp: 124, types: ["ice", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/articuno.png"},
  { name: "Zapdos", hp: 121, types: ["electric", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/zapdos.png"},
  { name: "Moltres", hp: 123, types: ["fire", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/moltres.png"},
  { name: "Dratini", hp: 76, types: ["dragon"], image: "https://img.pokemondb.net/sprites/crystal/normal/dratini.png"},
  { name: "Dragonair", hp: 94, types: ["dragon"], image: "https://img.pokemondb.net/sprites/crystal/normal/dragonair.png"},
  { name: "Dragonite", hp: 118, types: ["dragon", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/dragonite.png" },
  { name: "Mewtwo", hp: 136, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/mewtwo.png" },
  { name: "Mew", hp: 134, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/mew.png" },
  { name: "Chikorita", hp: 70, types: ["grass"], image: "https://img.pokemondb.net/sprites/crystal/normal/chikorita.png"},
  { name: "Bayleef", hp: 92, types: ["grass"], image: "https://img.pokemondb.net/sprites/crystal/normal/bayleef.png" },
  { name: "Meganium", hp: 112, types: ["grass"], image: "https://img.pokemondb.net/sprites/crystal/normal/meganium.png" },
  { name: "Cyndaquil", hp: 61, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/cyndaquil.png" },
  { name: "Quilava", hp: 91, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/quilava.png" },
  { name: "Typhlosion", hp: 108, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/typhlosion.png" },
  { name: "Totodile", hp: 67, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/totodile.png" },
  { name: "Croconaw", hp: 97, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/croconaw.png" },
  { name: "Feraligatr", hp: 119, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/feraligatr.png"},
  { name: "Sentret", hp: 66, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/sentret.png"},
  { name: "Furret", hp: 100, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/furret.png"},
  { name: "Hoothoot", hp: 74, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/hoothoot.png"},
  { name: "Noctowl", hp: 124, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/noctowl.png"},
  { name: "Ledyba", hp: 68, types: ["bug", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/ledyba.png"},
  { name: "Ledian", hp: 86, types: ["bug", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/ledian.png"},
  { name: "Spinarak", hp: 78, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/spinarak.png"},
  { name: "Ariados", hp: 87, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/ariados.png"},
  { name: "Crobat", hp: 105, types: ["poison", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/crobat.png"},
  { name: "Chinchou", hp: 81, types: ["water", "electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/chinchou.png"},
  { name: "Lanturn", hp: 133, types: ["water", "electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/lanturn.png"},
  { name: "Pichu", hp: 53, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/pichu.png"},
  { name: "Cleffa", hp: 66, types: ["fairy"], image: "https://img.pokemondb.net/sprites/crystal/normal/cleffa.png"},
  { name: "Igglybuff", hp: 99, types: ["normal", "fairy"], image: "https://img.pokemondb.net/sprites/crystal/normal/igglybuff.png"},
  { name: "Togepi", hp: 63, types: ["fairy"], image: "https://img.pokemondb.net/sprites/crystal/normal/togepi.png"},
  { name: "Togetic", hp: 87, types: ["fairy", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/togetic.png"},
  { name: "Natu", hp: 54, types: ["psychic", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/natu.png"},
  { name: "Xatu", hp: 92, types: ["psychic", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/xatu.png"},
  { name: "Mareep", hp: 87, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/mareep.png"},
  { name: "Flaaffy", hp: 103, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/flaaffy.png"},
  { name: "Ampharos", hp: 124, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/ampharos.png"},
  { name: "Bellossom", hp: 106, types: ["grass"], image: "https://img.pokemondb.net/sprites/crystal/normal/bellossom.png"},
  { name: "Marill", hp: 75, types: ["water", "fairy"], image: "https://img.pokemondb.net/sprites/crystal/normal/marill.png"},
  { name: "Azumarill", hp: 108, types: ["water", "fairy"], image: "https://img.pokemondb.net/sprites/crystal/normal/azumarill.png"},
  { name: "Sudowoodo", hp: 105, types: ["rock"], image: "https://img.pokemondb.net/sprites/crystal/normal/sudowoodo.png"},
  { name: "Sudowoodo(Female)", hp: 105, types: ["rock"], image: "https://img.pokemondb.net/sprites/crystal/normal/sudowoodo-f.png"},
  { name: "Politoed", hp: 124, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/politoed.png"},
  { name: "Hoppip", hp: 51, types: ["grass", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/hoppip.png"},
  { name: "Skiploom", hp: 77, types: ["grass", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/skiploom.png"},
  { name: "Jumpluff", hp: 99, types: ["grass", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/jumpluff.png"},
  { name: "Aipom", hp: 63, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/aipom.png" },
  { name: "Aipom(Female)", hp: 63, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/aipom-f.png" },
  { name: "Sunkern", hp: 47, types: ["grass"], image: "https://img.pokemondb.net/sprites/crystal/normal/sunkern.png" },
  { name: "Sunflora", hp: 97, types: ["grass"], image: "https://img.pokemondb.net/sprites/crystal/normal/sunflora.png"},
  { name: "Yanma", hp: 95, types: ["bug", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/yanma.png"},
  { name: "Wooper", hp: 60, types: ["water", "ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/wooper.png"},
  { name: "Quagsire", hp: 102, types: ["water", "ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/quagsire.png"},
  { name: "Espeon", hp: 99, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/espeon.png"},
  { name: "Umbreon", hp: 130, types: ["dark"], image: "https://img.pokemondb.net/sprites/crystal/normal/umbreon.png"},
  { name: "Murkrow", hp: 85, types: ["dark", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/murkrow.png"},
  { name: "Murkrow(Female)", hp: 85, types: ["dark", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/murkrow-f.png"},
  { name: "Slowking", hp: 157, types: ["water", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/slowking.png"},
  { name: "Misdreavus", hp: 66, types: ["ghost"], image: "https://img.pokemondb.net/sprites/crystal/normal/misdreavus.png"},
  { name: "Unown-A", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-a.png"},
  { name: "Unown-B", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-b.png"},
  { name: "Unown-C", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-c.png"},
  { name: "Unown-D", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-d.png"},
  { name: "Unown-E", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-e.png"},
  { name: "Unown-F", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-f.png"},
  { name: "Unown-G", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-g.png"},
  { name: "Unown-H", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-h.png"},
  { name: "Unown-I", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-i.png"},
  { name: "Unown-J", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-j.png"},
  { name: "Unown-K", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-k.png"},
  { name: "Unown-L", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-l.png"},
  { name: "Unown-M", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-m.png"},
  { name: "Unown-N", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-n.png"},
  { name: "Unown-O", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-o.png"},
  { name: "Unown-P", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-p.png"},
  { name: "Unown-Q", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-q.png"},
  { name: "Unown-R", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-r.png"},
  { name: "Unown-S", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-s.png"},
  { name: "Unown-T", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-t.png"},
  { name: "Unown-U", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-u.png"},
  { name: "Unown-V", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-v.png"},
  { name: "Unown-W", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-w.png"},
  { name: "Unown-X", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-x.png"},
  { name: "Unown-Y", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-y.png"},
  { name: "Unown-Z", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-z.png"},
  { name: "Unown-!", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-em.png"},
  { name: "Unown-?", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/unown-qm.png"},
  { name:  "Wobbuffet", hp: 202, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/wobbuffet.png"},
  { name:  "Wobbuffet(Female)", hp: 202, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/wobbuffet-f.png"},
  { name: "Girafarig", hp: 101, types: ["normal", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/girafarig.png" },
  { name: "Girafarig(Female)", hp: 101, types: ["normal", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/girafarig-f.png" },
  { name: "Pineco", hp: 57, types: ["bug"], image: "https://img.pokemondb.net/sprites/crystal/normal/pineco.png" },
  { name: "Forretress", hp: 100, types: ["bug", "steel"], image: "https://img.pokemondb.net/sprites/crystal/normal/forretress.png" },
  { name: "Dunsparce", hp: 123, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/dunsparce.png" },
  { name: "Gligar", hp: 80, types: ["ground", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/gligar.png"},
  { name: "Gligar(Female)", hp: 80, types: ["ground", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/gligar-f.png"},
  { name: "Steelix", hp: 145, types: ["steel", "ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/steelix.png"},
  { name: "Steelix(Female)", hp: 145, types: ["steel", "ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/steelix-f.png"},
  { name: "Snubbull", hp: 78, types: ["fairy"], image: "https://img.pokemondb.net/sprites/crystal/normal/snubbull.png"},
  { name: "Granbull", hp: 122, types: ["fairy"], image: "https://img.pokemondb.net/sprites/crystal/normal/granbull.png" },
  { name: "Qwilfish", hp: 75, types: ["water", "poison"], image: "https://img.pokemondb.net/sprites/crystal/normal/qwilfish.png"},
  { name: "Scizor", hp: 143, types: ["bug", "steel"], image: "https://img.pokemondb.net/sprites/crystal/normal/scizor.png"},
  { name: "Scizor(Female)", hp: 143, types: ["bug", "steel"], image: "https://img.pokemondb.net/sprites/crystal/normal/scizor-f.png"},
  { name: "Shuckle", hp: 119, types: ["bug", "rock"], image: "https://img.pokemondb.net/sprites/crystal/normal/shuckle.png"},
  { name: "Heracross", hp: 129, types: ["bug", "fighting"], image: "https://img.pokemondb.net/sprites/crystal/normal/heracross.png"},
  { name: "Heracross(Female)", hp: 129, types: ["bug", "fighting"], image: "https://img.pokemondb.net/sprites/crystal/normal/heracross-f.png"},
  { name: "Sneasel", hp: 79, types: ["dark", "ice"], image: "https://img.pokemondb.net/sprites/crystal/normal/sneasel.png"},
  { name: "Sneasel(Female)", hp: 79, types: ["dark", "ice"], image: "https://img.pokemondb.net/sprites/crystal/normal/sneasel-f.png"},
  { name: "Teddiursa", hp: 73, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/teddiursa.png"},
  { name: "Ursaring", hp: 116, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/ursaring.png" },
  { name: "Slugma", hp: 75, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/slugma.png" },
  { name: "Magcargo", hp: 125, types: ["fire", "rock"], image: "https://img.pokemondb.net/sprites/crystal/normal/magcargo.png" },
  { name: "Swinub", hp: 85, types: ["ice", "ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/swinub.png"},
  { name: "Piloswine", hp: 135, types: ["ice", "ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/piloswine.png"},
  { name: "Corsola", hp: 90, types: ["water", "rock"], image: "https://img.pokemondb.net/sprites/crystal/normal/corsola.png"},
  { name: "Remoraid", hp: 65, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/remoraid.png"},
  { name: "Octillery", hp: 122, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/octillery.png"},
  { name: "Delibird", hp: 77, types: ["ice", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/delibird.png"},
  { name: "Mantine", hp: 124, types: ["water", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/mantine.png"},
  { name: "Skarmory", hp: 132, types: ["steel", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/skarmory.png"},
  { name: "Houndour", hp: 67, types: ["dark", "fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/houndour.png"},
  { name: "Houndoom", hp: 138, types: ["dark", "fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/houndoom.png"},
  { name: "Houndoom(Female)", hp: 138, types: ["dark", "fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/houndoom-f.png"},
  { name: "Kingdra", hp: 166, types: ["water", "dragon"], image: "https://img.pokemondb.net/sprites/crystal/normal/kingdra.png"},
  { name: "Phanpy", hp: 116, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/phanpy.png"},
  { name: "Donphan", hp: 195, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/donphan.png"},
  { name: "Donphan(Female)", hp: 195, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/donphan-f.png"},
  { name: "Porygon2", hp: 137, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/porygon2.png"},
  { name: "Stantler", hp: 95, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/stantler.png"},
  { name: "Smeargle", hp: 66, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/smeargle.png"},
  { name: "Tyrogue", hp: 52, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/normal/tyrogue.png"},
  { name: "Hitmontop", hp: 97, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/normal/hitmontop.png"},
  { name: "Smoochum", hp: 64, types: ["ice", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/smoochum.png"},
  { name: "Elekid", hp: 76, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/elekid.png"},
  { name: "Magby", hp: 91, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/magby.png"},
  { name: "Miltank", hp: 138, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/miltank.png"},
  { name: "Blissey", hp: 255, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/normal/blissey.png"},
  { name: "Raikou", hp: 168, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/normal/raikou.png" },
  { name: "Entei", hp: 151, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/normal/entei.png" },
  { name: "Suicune", hp: 178, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/normal/suicune.png" },
  { name: "Larvitar", hp: 105, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/larvitar.png"},
  { name: "Pupitar", hp: 124, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/crystal/normal/pupitar.png"},
  { name: "Tyranitar", hp: 200, types: ["rock", "dark"], image: "https://img.pokemondb.net/sprites/crystal/normal/tyranitar.png"},
  { name: "Lugia", hp: 280, types: ["psychic", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/lugia.png"},
  { name: "Ho-oh", hp: 206, types: ["fire", "flying"], image: "https://img.pokemondb.net/sprites/crystal/normal/ho-oh.png"},
  { name: "Celebi", hp: 183, types: ["grass", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/normal/celebi.png"},
  { name: "Bulbasaur(Shiny)", hp: 68, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/bulbasaur.png" },
  { name: "Ivysaur(Shiny)", hp: 97, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/ivysaur.png" },
  { name: "Venusaur(Shiny)", hp: 134, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/venusaur.png" },
  { name: "Charmander(Shiny)", hp: 65, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/charmander.png" },
  { name: "Charmeleon(Shiny)", hp: 95, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/charmeleon.png" },
  { name: "Charizard(Shiny)", hp: 129, types: ["fire", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/charizard.png" },
  { name: "Squirtle(Shiny)", hp: 61, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/squirtle.png" },
  { name: "Wartortle(Shiny)", hp: 84, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/wartortle.png" },
  { name: "Blastoise(Shiny)", hp: 131, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/blastoise.png" },
  { name: "Caterpie(Shiny)", hp: 55, types: ["bug"], image: "https://img.pokemondb.net/sprites/crystal/shiny/caterpie.png"},
  { name: "Metapod(Shiny)", hp: 65, types: ["bug"], image: "https://img.pokemondb.net/sprites/crystal/shiny/metapod.png"},
  { name: "Butterfree(Shiny)", hp: 84, types: ["bug", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/butterfree.png"},
  { name: "Weedle(Shiny)", hp: 43, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/weedle.png"},
  { name: "Kakuna(Shiny)", hp: 51, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/kakuna.png"},
  { name: "Beedrill(Shiny)", hp: 83, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/beedrill.png"},
  { name: "Pidgey(Shiny)", hp: 55, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/pidgey.png"},
  { name: "Pidgeotto(Shiny)", hp: 78, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/pidgeotto.png"},
  { name: "Pidgeot(Shiny)", hp: 118, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/pidgeot.png"},
  { name: "Rattata(Shiny)", hp: 51, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/rattata.png"},
  { name: "Raticate(Shiny)", hp: 78, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/raticate.png"},
  { name: "Spearow(Shiny)", hp: 58, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/spearow.png"},
  { name: "Fearow(Shiny)", hp: 106, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/fearow.png"},
  { name: "Ekans(Shiny)", hp: 61, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/ekans.png"},
  { name: "Arbok(Shiny)", hp: 86, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/arbok.png"},
  { name: "Pikachu(Shiny)", hp: 56, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/pikachu.png"},
  { name: "Pikachu(Female-Shiny)", hp: 56, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/pikachu-f.png"},
  { name: "Raichu(Shiny)", hp: 94, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/raichu.png"},
  { name: "Raichu(Female-Shiny)", hp: 94, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/raichu-f.png"},
  { name: "Sandshrew(Shiny)", hp: 61, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/sandshrew.png"},
  { name: "Sandslash(Shiny)", hp: 90, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/sandslash.png"},
  { name: "Nidoran(Female)(Shiny)", hp: 64, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/nidoran-f.png"},
  { name: "Nidorina(Shiny)", hp: 88, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/nidorina.png"},
  { name: "Nidoqueenv", hp: 114, types: ["poison", "ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/nidoqueen.png"},
  { name: "Nidoran(Male)(Shiny)", hp: 62, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/nidoran-m.png"},
  { name: "Nidorino(Shiny)", hp: 90, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/nidorino.png"},
  { name: "Nidoking(Shiny)", hp: 116, types: ["poison", "ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/nidoking.png"},
  { name: "Clefairy(Shiny)", hp: 81, types: ["fairy"], image: "https://img.pokemondb.net/sprites/crystal/shiny/clefairy.png"},
  { name: "Clefable(Shiny)", hp: 128, types: ["fairy"], image: "https://img.pokemondb.net/sprites/crystal/shiny/clefable.png"},
  { name: "Vulpix(Shiny)", hp: 61, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/vulpix.png"},
  { name: "Ninetales(Shiny)", hp: 90, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/ninetales.png"},
  { name: "Jigglypuff(Shiny)", hp: 118, types: ["normal", "fairy"], image: "https://img.pokemondb.net/sprites/crystal/shiny/jigglypuff.png" },
  { name: "Wigglytuff(Shiny)", hp: 150, types: ["normal", "fairy"], image: "https://img.pokemondb.net/sprites/crystal/shiny/wigglytuff.png" },
  { name: "Zubat(Shiny)", hp: 53, types: ["poison", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/zubat.png"},
  { name: "Golbat(Shiny)", hp: 83, types: ["poison", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/golbat.png"},
  { name: "Oddish(Shiny)", hp: 61, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/oddish.png"},
  { name: "Gloom(Shiny)", hp: 81, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/gloom.png"},
  { name: "Vileplume(Shiny)", hp: 102, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/vileplume.png"},
  { name: "Paras(Shiny)", hp: 54, types: ["bug", "grass"], image: "https://img.pokemondb.net/sprites/crystal/shiny/paras.png"},
  { name: "Parasect(Shiny)", hp: 76, types: ["bug", "grass"], image: "https://img.pokemondb.net/sprites/crystal/shiny/parasect.png"},
  { name: "Venonat(Shiny)", hp: 79, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/venonat.png"},
  { name: "Venomoth(Shiny)", hp: 101, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/venomoth.png"},
  { name: "Diglett(Shiny)", hp: 42, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/diglett.png"},
  { name: "Dugtrio(Shiny)", hp: 66, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/dugtrio.png"},
  { name: "Meowth(Shiny)", hp: 59, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/meowth.png" },
  { name: "Persian(Shiny)", hp: 83, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/persian.png" },
  { name: "Psyduck(Shiny)", hp: 67, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/psyduck.png" },
  { name: "Golduck(Shiny)", hp: 102, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/golduck.png" },
  { name: "Mankey(Shiny)", hp: 69, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/shiny/mankey.png"},
  { name: "Primeape(Shiny)", hp: 97, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/shiny/primeape.png"},
  { name: "Growlithe(Shiny)", hp: 66, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/growlithe.png"},
  { name: "Arcanine(Shiny)", hp: 113, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/arcanine.png" },
  { name: "Poliwag(Shiny)", hp: 70, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/poliwag.png"},
  { name: "Poliwhirl(Shiny)", hp: 91, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/poliwhirl.png"},
  { name: "Poliwrath(Shiny)", hp: 121, types: ["water", "fighting"], image: "https://img.pokemondb.net/sprites/crystal/shiny/poliwrath.png"},
  { name: "Abra(Shiny)", hp: 50, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/abra.png"},
  { name: "Kadabra(Shiny)", hp: 70, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/kadabra.png" },
  { name: "Alakazam(Shiny)", hp: 90, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/alakazam.png" },
  { name: "Machop(Shiny)", hp: 85, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/shiny/machop.png" },
  { name: "Machoke(Shiny)", hp: 95, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/shiny/machoke.png" },
  { name: "Machamp(Shiny)", hp: 125, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/shiny/machamp.png" },
  { name: "Bellsprout(Shiny)", hp: 74, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/bellsprout.png"},
  { name: "Weepinbell(Shiny)", hp: 94, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/weepinbell.png"},
  { name: "Victreebel(Shiny)", hp: 112, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/victreebel.png"},
  { name: "Tentacool(Shiny)", hp: 73, types: ["water", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/tentacool.png"},
  { name: "Tentacruel(Shiny)", hp: 106, types: ["water", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/tentacruel.png"},
  { name: "Geodude(Shiny)", hp: 75, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/geodude.png"},
  { name: "Graveler(Shiny)", hp: 88, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/graveler.png"},
  { name: "Golem(Shiny)", hp: 103, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/golem.png"},
  { name: "Ponyta(Shiny)", hp: 69, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/ponyta.png"},
  { name: "Rapidash(Shiny)", hp: 87, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/rapidash.png"},
  { name: "Slowpoke(Shiny)", hp: 124, types: ["water", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/slowpoke.png"},
  { name: "Slowbro(Shiny)", hp: 140, types: ["water", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/slowbro.png"},
  { name: "Magnemite(Shiny)", hp: 51, types: ["electric", "steel"], image: "https://img.pokemondb.net/sprites/crystal/shiny/magnemite.png"},
  { name: "Magneton(Shiny)", hp: 76, types: ["electric", "steel"], image: "https://img.pokemondb.net/sprites/crystal/shiny/magneton.png"},
  { name: "Farfetch'd(Shiny)", hp: 82, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/farfetchd.png"},
  { name: "Doduo(Shiny)", hp: 67, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/doduo.png"},
  { name: "Dodrio(Shiny)", hp: 90, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/dodrio.png"},
  { name: "Seel(Shiny)", hp: 74, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/seel.png"},
  { name: "Dewgong(Shiny)", hp: 122, types: ["water", "ice"], image: "https://img.pokemondb.net/sprites/crystal/shiny/dewgong.png"},
  { name: "Grimer(Shiny)", hp: 108, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/grimer.png"},
  { name: "Muk(Shiny)", hp: 126, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/muk.png"},
  { name: "Shellder(Shiny)", hp: 62, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/shellder.png"},
  { name: "Cloyster(Shiny)", hp: 84, types: ["water", "ice"], image: "https://img.pokemondb.net/sprites/crystal/shiny/cloyster.png"},
  { name: "Gastly(Shiny)", hp: 62, types: ["ghost", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/gastly.png" },
  { name: "Haunter(Shiny)", hp: 79, types: ["ghost", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/haunter.png" },
  { name: "Gengar(Shiny)", hp: 95, types: ["ghost", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/gengar.png" },
  { name: "Onix(Shiny)", hp: 64, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/onix.png"},
  { name: "Drowzee(Shiny)", hp: 74, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/drowzee.png"},
  { name: "Hypno(Shiny)", hp: 113, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/hypno.png"},
  { name: "Krabby(Shiny)", hp: 63, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/krabby.png"},
  { name: "Kingler(Shiny)", hp: 86, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/kingler.png"},
  { name: "Voltorb(Shiny)", hp: 73, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/voltorb.png"},
  { name: "Electrode(Shiny)", hp: 92, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/electrode.png"},
  { name: "Exeggcute(Shiny)", hp: 81, types: ["grass", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/exeggcute.png"},
  { name: "Exeggutor(Shiny)", hp: 112, types: ["grass", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/exeggutor.png"},
  { name: "Cubone(Shiny)", hp: 68, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/cubone.png"},
  { name: "Marowak(Shiny)", hp: 91, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/marowak.png"},
  { name: "Hitmonlee(Shiny)", hp: 81, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/shiny/hitmonlee.png"},
  { name: "Hitmonchan(Shiny)", hp: 84, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/shiny/hitmonchan.png"},
  { name: "Lickitung(Shiny)", hp: 117, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/lickitung.png"},
  { name: "Koffing(Shiny)", hp: 64, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/koffing.png"},
  { name: "Weezing(Shiny)", hp: 88, types: ["poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/weezing.png"},
  { name: "Rhyhorn(Shiny)", hp: 102, types: ["ground", "rock"], image: "https://img.pokemondb.net/sprites/crystal/shiny/rhyhorn.png"},
  { name: "Rhydon(Shiny)", hp: 134, types: ["ground", "rock"], image: "https://img.pokemondb.net/sprites/crystal/shiny/rhydon.png"},
  { name: "Chansey(Shiny)", hp: 227, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/chansey.png"},
  { name: "Tangela(Shiny)", hp: 79, types: ["grass"], image: "https://img.pokemondb.net/sprites/crystal/shiny/tangela.png"},
  { name: "Kangaskhan(Shiny)", hp: 118, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/kangaskhan.png"},
  { name: "Horsea(Shiny)", hp: 57, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/horsea.png"},
  { name: "Seadra(Shiny)", hp: 87 ,types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/seadra.png"},
  { name: "Goldeen(Shiny)", hp: 54, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/goldeen.png"},
  { name: "Seaking(Shiny)", hp: 97, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/seaking.png"},
  { name: "Staryu(Shiny)", hp: 64, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/staryu.png"},
  { name: "Starmie(Shiny)", hp: 84, types: ["water", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/starmie.png"},
  { name: "Mr. Mime(Shiny)", hp: 69, types: ["psychic", "fairy"], image: "https://img.pokemondb.net/sprites/crystal/shiny/mr-mime.png"},
  { name: "Scyther(Shiny)", hp: 83, types: ["bug", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/scyther.png"},
  { name: "Jynx(Shiny)", hp: 93, types: ["ice", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/jynx.png"},
  { name: "Electabuzz(Shiny)", hp: 85, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/electabuzz.png"},
  { name: "Magmar(Shiny)", hp: 90, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/magmar.png"},
  { name: "Pinsir(Shiny)", hp: 87, types: ["bug"], image: "https://img.pokemondb.net/sprites/crystal/shiny/pinsir.png"},
  { name: "Tauros(Shiny)", hp: 103, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/tauros.png"},
  { name: "Magikarp(Shiny)", hp: 45, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/magikarp.png"},
  { name: "Magikarp(Female-Shiny)", hp: 45, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/magikarp-f.png"},
  { name: "Gyrados(Shiny)", hp: 123, types: ["water", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/gyarados.png" },
  { name: "Gyrados(Female-Shiny)", hp: 123, types: ["water", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/gyarados-f.png" },
  { name: "Lapras(Shiny)", hp: 150, types: ["water", "ice"], image: "https://img.pokemondb.net/sprites/crystal/shiny/lapras.png"},
  { name: "Ditto(Shiny)", hp: 79, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/ditto.png"},
  { name: "Eevee(Shiny)", hp: 86, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/eevee.png" },
  { name: "Vaporeon(Shiny)", hp: 135, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/vaporeon.png"},
  { name: "Jolteon(Shiny)", hp: 86, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/jolteon.png"},
  { name: "Flareon(Shiny)", hp: 99, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/flareon.png"},
  { name: "Porygon(Shiny)", hp: 94, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/porygon.png"},
  { name: "Omanyte(Shiny)", hp: 70, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/omanyte.png"},
  { name: "Omastar(Shiny)", hp: 100, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/omastar.png"},
  { name: "Kabuto(Shiny)", hp: 62, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/kabuto.png"},
  { name: "Kabutops(Shiny)", hp: 90, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/kabutops.png"},
  { name: "Aerodactyl(Shiny)", hp: 102, types: ["rock", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/aerodactyl.png"},
  { name: "Snorlax(Shiny)", hp: 182, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/snorlax.png" },
  { name: "Articuno(Shiny)", hp: 124, types: ["ice", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/articuno.png"},
  { name: "Zapdos(Shiny)", hp: 121, types: ["electric", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/zapdos.png"},
  { name: "Moltres(Shiny)", hp: 123, types: ["fire", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/moltres.png"},
  { name: "Dratini(Shiny)", hp: 76, types: ["dragon"], image: "https://img.pokemondb.net/sprites/crystal/shiny/dratini.png"},
  { name: "Dragonair(Shiny)", hp: 94, types: ["dragon"], image: "https://img.pokemondb.net/sprites/crystal/shiny/dragonair.png"},
  { name: "Dragonite(Shiny)", hp: 118, types: ["dragon", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/dragonite.png" },
  { name: "Mewtwo(Shiny)", hp: 136, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/mewtwo.png" },
  { name: "Mew(Shiny)", hp: 134, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/mew.png" },
  { name: "Chikorita(Shiny)", hp: 70, types: ["grass"], image: "https://img.pokemondb.net/sprites/crystal/shiny/chikorita.png"},
  { name: "Bayleef(Shiny)", hp: 92, types: ["grass"], image: "https://img.pokemondb.net/sprites/crystal/shiny/bayleef.png" },
  { name: "Meganium(Shiny)", hp: 112, types: ["grass"], image: "https://img.pokemondb.net/sprites/crystal/shiny/meganium.png" },
  { name: "Cyndaquil(Shiny)", hp: 61, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/cyndaquil.png" },
  { name: "Quilava(Shiny)", hp: 91, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/quilava.png" },
  { name: "Typhlosion(Shiny)", hp: 108, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/typhlosion.png" },
  { name: "Totodile(Shiny)", hp: 67, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/totodile.png" },
  { name: "Croconaw(Shiny)", hp: 97, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/croconaw.png" },
  { name: "Feraligatr(Shiny)", hp: 119, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/feraligatr.png"},
  { name: "Sentret(Shiny)", hp: 66, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/sentret.png"},
  { name: "Furret(Shiny)", hp: 100, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/furret.png"},
  { name: "Hoothoot(Shiny)", hp: 74, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/hoothoot.png"},
  { name: "Noctowl(Shiny)", hp: 124, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/noctowl.png"},
  { name: "Ledyba(Shiny)", hp: 68, types: ["bug", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/ledyba.png"},
  { name: "Ledian(Shiny)", hp: 86, types: ["bug", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/ledian.png"},
  { name: "Spinarak(Shiny)", hp: 78, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/spinarak.png"},
  { name: "Ariados(Shiny)", hp: 87, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/ariados.png"},
  { name: "Crobat(Shiny)", hp: 105, types: ["poison", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/crobat.png"},
  { name: "Chinchou(Shiny)", hp: 81, types: ["water", "electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/chinchou.png"},
  { name: "Lanturn(Shiny)", hp: 133, types: ["water", "electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/lanturn.png"},
  { name: "Pichu(Shiny)", hp: 53, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/pichu.png"},
  { name: "Cleffa(Shiny)", hp: 66, types: ["fairy"], image: "https://img.pokemondb.net/sprites/crystal/shiny/cleffa.png"},
  { name: "Igglybuff(Shiny)", hp: 99, types: ["normal", "fairy"], image: "https://img.pokemondb.net/sprites/crystal/shiny/igglybuff.png"},
  { name: "Togepi(Shiny)", hp: 63, types: ["fairy"], image: "https://img.pokemondb.net/sprites/crystal/shiny/togepi.png"},
  { name: "Togetic(Shiny)", hp: 87, types: ["fairy", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/togetic.png"},
  { name: "Natu(Shiny)", hp: 54, types: ["psychic", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/natu.png"},
  { name: "Xatu(Shiny)", hp: 92, types: ["psychic", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/xatu.png"},
  { name: "Mareep(Shiny)", hp: 87, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/mareep.png"},
  { name: "Flaaffy(Shiny)", hp: 103, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/flaaffy.png"},
  { name: "Ampharos(Shiny)", hp: 124, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/ampharos.png"},
  { name: "Bellossom(Shiny)", hp: 106, types: ["grass"], image: "https://img.pokemondb.net/sprites/crystal/shiny/bellossom.png"},
  { name: "Marill(Shiny)", hp: 75, types: ["water", "fairy"], image: "https://img.pokemondb.net/sprites/crystal/shiny/marill.png"},
  { name: "Azumarill(Shiny)", hp: 108, types: ["water", "fairy"], image: "https://img.pokemondb.net/sprites/crystal/shiny/azumarill.png"},
  { name: "Sudowoodo(Shiny)", hp: 105, types: ["rock"], image: "https://img.pokemondb.net/sprites/crystal/shiny/sudowoodo.png"},
  { name: "Sudowoodo(Female-Shiny)", hp: 105, types: ["rock"], image: "https://img.pokemondb.net/sprites/crystal/shiny/sudowoodo-f.png"},
  { name: "Politoed(Shiny)", hp: 124, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/politoed.png"},
  { name: "Hoppip(Shiny)", hp: 51, types: ["grass", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/hoppip.png"},
  { name: "Skiploom(Shiny)", hp: 77, types: ["grass", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/skiploom.png"},
  { name: "Jumpluff(Shiny)", hp: 99, types: ["grass", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/jumpluff.png"},
  { name: "Aipom(Shiny)", hp: 63, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/aipom.png" },
  { name: "Aipom(Female-Shiny)", hp: 63, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/aipom-f.png" },
  { name: "Sunkern(Shiny)", hp: 47, types: ["grass"], image: "https://img.pokemondb.net/sprites/crystal/shiny/sunkern.png" },
  { name: "Sunflora(Shiny)", hp: 97, types: ["grass"], image: "https://img.pokemondb.net/sprites/crystal/shiny/sunflora.png"},
  { name: "Yanma(Shiny)", hp: 95, types: ["bug", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/yanma.png"},
  { name: "Wooper(Shiny)", hp: 60, types: ["water", "ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/wooper.png"},
  { name: "Quagsire(Shiny)", hp: 102, types: ["water", "ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/quagsire.png"},
  { name: "Espeon(Shiny)", hp: 99, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/espeon.png"},
  { name: "Umbreon(Shiny)", hp: 130, types: ["dark"], image: "https://img.pokemondb.net/sprites/crystal/shiny/umbreon.png"},
  { name: "Murkrow(Shiny)", hp: 85, types: ["dark", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/murkrow.png"},
  { name: "Murkrow(Female-Shiny)", hp: 85, types: ["dark", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/murkrow-f.png"},
  { name: "Slowking(Shiny)", hp: 157, types: ["water", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/slowking.png"},
  { name: "Misdreavus(Shiny)", hp: 66, types: ["ghost"], image: "https://img.pokemondb.net/sprites/crystal/shiny/misdreavus.png"},
  { name: "Unown-A(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-a.png"},
  { name: "Unown-B(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-b.png"},
  { name: "Unown-C(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-c.png"},
  { name: "Unown-D(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-d.png"},
  { name: "Unown-E(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-e.png"},
  { name: "Unown-F(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-f.png"},
  { name: "Unown-(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-g.png"},
  { name: "Unown-H(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-h.png"},
  { name: "Unown-I(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-i.png"},
  { name: "Unown-J(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-j.png"},
  { name: "Unown-K(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-k.png"},
  { name: "Unown-L(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-l.png"},
  { name: "Unown-M(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-m.png"},
  { name: "Unown-N(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-n.png"},
  { name: "Unown-O(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-o.png"},
  { name: "Unown-P(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-p.png"},
  { name: "Unown-Q(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-q.png"},
  { name: "Unown-R(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-r.png"},
  { name: "Unown-S(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-s.png"},
  { name: "Unown-T(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-t.png"},
  { name: "Unown-U(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-u.png"},
  { name: "Unown-V(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-v.png"},
  { name: "Unown-W(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-w.png"},
  { name: "Unown-X(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-x.png"},
  { name: "Unown-Y(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-y.png"},
  { name: "Unown-Z(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-z.png"},
  { name: "Unown-!(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-em.png"},
  { name: "Unown-?(Shiny)", hp: 64, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/unown-qm.png"},
  { name:  "Wobbuffet(Shiny)", hp: 202, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/wobbuffet.png"},
  { name:  "Wobbuffet(Female-Shiny)", hp: 202, types: ["psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/wobbuffet-f.png"},
  { name: "Girafarig(Shiny)", hp: 101, types: ["normal", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/girafarig.png" },
  { name: "Girafarig(Female-Shiny)", hp: 101, types: ["normal", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/girafarig-f.png" },
  { name: "Pineco(Shiny)", hp: 57, types: ["bug"], image: "https://img.pokemondb.net/sprites/crystal/shiny/pineco.png" },
  { name: "Forretress(Shiny)", hp: 100, types: ["bug", "steel"], image: "https://img.pokemondb.net/sprites/crystal/shiny/forretress.png" },
  { name: "Dunsparce(Shiny)", hp: 123, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/dunsparce.png" },
  { name: "Gligar(Shiny)", hp: 80, types: ["ground", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/gligar.png"},
  { name: "Gligar(Female-Shiny)", hp: 80, types: ["ground", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/gligar-f.png"},
  { name: "Steelix(Shiny)", hp: 145, types: ["steel", "ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/steelix.png"},
  { name: "Steelix(Female-Shiny)", hp: 145, types: ["steel", "ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/steelix-f.png"},
  { name: "Snubbull(Shiny)", hp: 78, types: ["fairy"], image: "https://img.pokemondb.net/sprites/crystal/shiny/snubbull.png"},
  { name: "Granbull(Shiny)", hp: 122, types: ["fairy"], image: "https://img.pokemondb.net/sprites/crystal/shiny/granbull.png" },
  { name: "Qwilfish(Shiny)", hp: 75, types: ["water", "poison"], image: "https://img.pokemondb.net/sprites/crystal/shiny/quilfish.png"},
  { name: "Scizor(Shiny)", hp: 143, types: ["bug", "steel"], image: "https://img.pokemondb.net/sprites/crystal/shiny/scizor.png"},
  { name: "Scizor(Female-Shiny)", hp: 143, types: ["bug", "steel"], image: "https://img.pokemondb.net/sprites/crystal/shiny/scizor-f.png"},
  { name: "Shuckle(Shiny)", hp: 119, types: ["bug", "rock"], image: "https://img.pokemondb.net/sprites/crystal/shiny/shuckle.png"},
  { name: "Heracross(Shiny)", hp: 129, types: ["bug", "fighting"], image: "https://img.pokemondb.net/sprites/crystal/shiny/heracross.png"},
  { name: "Heracross(Female-Shiny)", hp: 129, types: ["bug", "fighting"], image: "https://img.pokemondb.net/sprites/crystal/shiny/heracross-f.png"},
  { name: "Sneasel(Shiny)", hp: 79, types: ["dark", "ice"], image: "https://img.pokemondb.net/sprites/crystal/shiny/sneasel.png"},
  { name: "Sneasel(Female-Shiny)", hp: 79, types: ["dark", "ice"], image: "https://img.pokemondb.net/sprites/crystal/shiny/sneasel-f.png"},
  { name: "Teddiursa(Shiny)", hp: 73, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/teddiursa.png"},
  { name: "Ursaring(Shiny)", hp: 116, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/ursaring.png" },
  { name: "Slugma(Shiny)", hp: 75, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/slugma.png" },
  { name: "Magcargo(Shiny)", hp: 125, types: ["fire", "rock"], image: "https://img.pokemondb.net/sprites/crystal/shiny/magcargo.png" },
  { name: "Swinub(Shiny)", hp: 85, types: ["ice", "ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/swinub.png"},
  { name: "Piloswine(Shiny)", hp: 135, types: ["ice", "ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/piloswine.png"},
  { name: "Corsola(Shiny)", hp: 90, types: ["water", "rock"], image: "https://img.pokemondb.net/sprites/crystal/shiny/corsola.png"},
  { name: "Remoraid(Shiny)", hp: 65, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/remoraid.png"},
  { name: "Octillery(Shiny)", hp: 122, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/octillery.png"},
  { name: "Delibird(Shiny)", hp: 77, types: ["ice", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/delibird.png"},
  { name: "Mantine(Shiny)", hp: 124, types: ["water", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/mantine.png"},
  { name: "Skarmory(Shiny)", hp: 132, types: ["steel", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/skarmory.png"},
  { name: "Houndour(Shiny)", hp: 67, types: ["dark", "fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/houndour.png"},
  { name: "Houndoom(Shiny)", hp: 138, types: ["dark", "fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/houndoom.png"},
  { name: "Houndoom(Female-Shiny)", hp: 138, types: ["dark", "fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/houndoom-f.png"},
  { name: "Kingdra(Shiny)", hp: 166, types: ["water", "dragon"], image: "https://img.pokemondb.net/sprites/crystal/shiny/kingdra.png"},
  { name: "Phanpy(Shiny)", hp: 116, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/phanpy.png"},
  { name: "Donphan(Shiny)", hp: 195, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/donphan.png"},
  { name: "Donphan(Female-Shiny)", hp: 195, types: ["ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/donphan-f.png"},
  { name: "Porygon2(Shiny)", hp: 137, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/porygon2.png"},
  { name: "Stantler(Shiny)", hp: 95, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/stantler.png"},
  { name: "Smeargle(Shiny)", hp: 66, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/smeargle.png"},
  { name: "Tyrogue(Shiny)", hp: 52, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/shiny/tyrogue.png"},
  { name: "Hitmontop(Shiny)", hp: 97, types: ["fighting"], image: "https://img.pokemondb.net/sprites/crystal/shiny/hitmontop.png"},
  { name: "Smoochum(Shiny)", hp: 64, types: ["ice", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/smoochum.png"},
  { name: "Elekid(Shiny)", hp: 76, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/elekid.png"},
  { name: "Magby(Shiny)", hp: 91, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/magby.png"},
  { name: "Miltank(Shiny)", hp: 138, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/miltank.png"},
  { name: "Blissey(Shiny)", hp: 255, types: ["normal"], image: "https://img.pokemondb.net/sprites/crystal/shiny/blissey.png"},
  { name: "Raikou(Shiny)", hp: 168, types: ["electric"], image: "https://img.pokemondb.net/sprites/crystal/shiny/raikou.png" },
  { name: "Entei(Shiny)", hp: 151, types: ["fire"], image: "https://img.pokemondb.net/sprites/crystal/shiny/entei.png" },
  { name: "Suicune(Shiny)", hp: 178, types: ["water"], image: "https://img.pokemondb.net/sprites/crystal/shiny/suicune.png" },
  { name: "Larvitar(Shiny)", hp: 105, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/larvitar.png"},
  { name: "Pupitar(Shiny)", hp: 124, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/crystal/shiny/pupitar.png"},
  { name: "Tyranitar(Shiny)", hp: 200, types: ["rock", "dark"], image: "https://img.pokemondb.net/sprites/crystal/shiny/tyranitar.png"},
  { name: "Lugia(Shiny)", hp: 280, types: ["psychic", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/lugia.png"},
  { name: "Ho-oh(Shiny)", hp: 206, types: ["fire", "flying"], image: "https://img.pokemondb.net/sprites/crystal/shiny/ho-oh.png"},
  { name: "Celebi(Shiny)", hp: 183, types: ["grass", "psychic"], image: "https://img.pokemondb.net/sprites/crystal/shiny/celebi.png"},
]; 

// DOM Elements
const pokemon1Element = document.getElementById("pokemon1");
const pokemon2Element = document.getElementById("pokemon2");
const startBattleButton = document.getElementById("start-battle");
const battleLog = document.getElementById("battle-log");

// Game state
let battleInterval = null;
let currentPokemon1 = null;
let currentPokemon2 = null;

// Helper functions
function getRandomPokemon() {
  return pokemonList[Math.floor(Math.random() * pokemonList.length)];
}

function getTwoUniquePokemon() {
  let pokemon1 = getRandomPokemon();
  let pokemon2 = getRandomPokemon();
  
  while (pokemon1.name === pokemon2.name) {
    pokemon2 = getRandomPokemon();
  }
  
  return [pokemon1, pokemon2];
}

function calculateEffectiveness(attackerTypes, defenderTypes) {
  let effectiveness = 1;
  
  attackerTypes.forEach(atkType => {
    defenderTypes.forEach(defType => {
      if (typeEffectiveness[atkType] && typeEffectiveness[atkType][defType] !== undefined) {
        effectiveness *= typeEffectiveness[atkType][defType];
      }
    });
  });

  return effectiveness;
}
// Wonder Guard damage check
function shouldApplyDamage(attackerTypes, defender, damage) {
    if (defender.ability === "Wonder Guard") {
      const effectiveness = calculateEffectiveness(attackerTypes, defender.types);
      return effectiveness > 1; // Only take super effective damage
    }
    return true; // Normal damage
  }
function getEffectivenessMessage(effectiveness) {
  if (effectiveness === 0) return "It has no effect!";
  if (effectiveness < 1) return "It's not very effective...";
  if (effectiveness > 1) return "It's super effective!";
  return "";
}

function displayPokemon(pokemon, element) {
    const img = element.querySelector(".pokemon-image");
    const name = element.querySelector(".pokemon-name");
    const types = element.querySelector(".pokemon-types");
    const hp = element.querySelector(".pokemon-hp");
    const ability = element.querySelector(".pokemon-ability") || document.createElement("p");
    
    img.src = pokemon.image;
    img.alt = pokemon.name;
    name.textContent = pokemon.name;
    hp.textContent = `HP: ${pokemon.hp}`;
    
    // Clear and add types
    types.innerHTML = "";
    pokemon.types.forEach(type => {
      const typeBadge = document.createElement("span");
      typeBadge.className = `type-badge type-${type}`;
      typeBadge.textContent = type.charAt(0).toUpperCase() + type.slice(1);
      types.appendChild(typeBadge);
    });
    
    // Handle ability display
    ability.className = "pokemon-ability";
    if (pokemon.ability) {
      ability.textContent = `Ability: ${pokemon.ability}`;
      if (pokemon.ability === "Wonder Guard") {
        element.classList.add("wonder-guard-effect");
      } else {
        element.classList.remove("wonder-guard-effect");
      }
    } else {
      ability.textContent = "";
      element.classList.remove("wonder-guard-effect");
    }
    
    if (!element.querySelector(".pokemon-ability")) {
      element.appendChild(ability);
    }
    
    // Remove battle animations
    element.classList.remove("attack-animation", "damage-animation", "victory-animation", "faint-animation");
  }

  function simulateBattle(pokemon1, pokemon2) {
    battleLog.innerHTML = "";
    startBattleButton.disabled = true;
    
    displayPokemon(pokemon1, pokemon1Element);
    displayPokemon(pokemon2, pokemon2Element);
  
    let attacker = pokemon1;
    let defender = pokemon2;
    let attackerElement = pokemon1Element;
    let defenderElement = pokemon2Element;
  
    battleInterval = setInterval(() => {
      if (pokemon1.hp <= 0 || pokemon2.hp <= 0) {
        endBattle(pokemon1, pokemon2);
        return;
      }
  
      const baseDamage = Math.floor(Math.random() * 10) + 1;
      const effectiveness = calculateEffectiveness(attacker.types, defender.types);
      const damage = Math.max(1, Math.floor(baseDamage * effectiveness));
      
      // Build the attack message
      let attackMessage = `${attacker.name} attacks! `;
      
      // Wonder Guard check
      if (defender.ability === "Wonder Guard" && effectiveness <= 1) {
        attackMessage += `${defender.name}'s Wonder Guard blocked the attack!`;
        battleLog.innerHTML += attackMessage + "<br>";
      } else {
        defender.hp -= damage;
        attackMessage += `${getEffectivenessMessage(effectiveness)} ${defender.name} takes ${damage} damage! (${Math.max(0, defender.hp)} HP left)`;
        battleLog.innerHTML += attackMessage + "<br>";
      }
  
      battleLog.scrollTop = battleLog.scrollHeight;
      defenderElement.querySelector(".pokemon-hp").textContent = `HP: ${Math.max(0, defender.hp)}`;
  
      // Animations
      attackerElement.classList.add("attack-animation");
      defenderElement.classList.add("damage-animation");
  
      setTimeout(() => {
        attackerElement.classList.remove("attack-animation");
        defenderElement.classList.remove("damage-animation");
        
        if (defender.hp <= 0) {
          defenderElement.classList.add("faint-animation");
          endBattle(pokemon1, pokemon2);
        } else {
          // Switch roles for next turn
          [attacker, defender] = [defender, attacker];
          [attackerElement, defenderElement] = [defenderElement, attackerElement];
        }
      }, 500);
    }, 1500);
  }

function endBattle(pokemon1, pokemon2) {
  clearInterval(battleInterval);
  battleInterval = null;
  
  const winner = pokemon1.hp > 0 ? pokemon1 : pokemon2;
  const winnerElement = winner === pokemon1 ? pokemon1Element : pokemon2Element;
  
  battleLog.innerHTML += `<strong>${winner.name} wins the battle!</strong><br>`;
  battleLog.scrollTop = battleLog.scrollHeight;
  
  winnerElement.classList.add("victory-animation");
  
  // Re-enable start button
  startBattleButton.disabled = false;
}
// Add this to your existing JavaScript code, right before the event listeners section

// How to Play Modal functionality
const howToPlayBtn = document.getElementById("how-to-play");
const modal = document.getElementById("how-to-play-modal");
const span = document.getElementsByClassName("close")[0];

howToPlayBtn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// The rest of your existing JavaScript code remains the same...
// Event listeners
startBattleButton.addEventListener("click", () => {
  // Stop any ongoing battle
  if (battleInterval) {
    clearInterval(battleInterval);
    battleInterval = null;
  }
  
  // Get new Pokémon
  const [pokemon1, pokemon2] = getTwoUniquePokemon();
  
  // Reset their HP
  const originalPokemon1 = pokemonList.find(p => p.name === pokemon1.name);
  const originalPokemon2 = pokemonList.find(p => p.name === pokemon2.name);
  
  currentPokemon1 = { ...originalPokemon1 };
  currentPokemon2 = { ...originalPokemon2 };
  
  // Start battle
  simulateBattle(currentPokemon1, currentPokemon2);
});

// Initialize with random Pokémon
const [initialPokemon1, initialPokemon2] = getTwoUniquePokemon();
currentPokemon1 = { ...initialPokemon1 };
currentPokemon2 = { ...initialPokemon2 };
displayPokemon(currentPokemon1, pokemon1Element);
displayPokemon(currentPokemon2, pokemon2Element);
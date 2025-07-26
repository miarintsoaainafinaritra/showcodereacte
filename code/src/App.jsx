import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  FaSearch, 
  FaTimes, 
  FaInfoCircle, 
  FaStar,
  FaLeaf,
  FaSkull,
  FaRulerVertical,
  FaWeight,
  FaHeart,
  FaBolt,
  FaShieldAlt,
  FaFire,
  FaTint,
  FaRunning,
  FaChartLine
} from 'react-icons/fa';

// Import des images
import list1 from "./assets/images/photo22.jpg";
import list2 from "./assets/images/photo2.jpg";
import list3 from "./assets/images/pokemon9.jpg";
import list4 from "./assets/images/pokemon13.jpg";
import list5 from "./assets/images/pokemon11.jpg";
import list6 from "./assets/images/pokemon12.jpg";
import list7 from "./assets/images/photo1.jpg";
import list8 from "./assets/images/phot3.jpg";
import list9 from "./assets/images/pokemon18.jpg";
import list10 from "./assets/images/photo4.jpg";
import list11 from "./assets/images/images8.png";
import list12 from "./assets/images/images9.jpg";
import list13  from "./assets/images/photo5.jpg";
import list14 from "./assets/images/pokemon20.jpg";
import list15 from "./assets/images/pokemon21.jpg";
const pokemonData = [
  {
    id: 1,
    name: "Meowth Box",
    image: list1,
    types: ["normal","grass"],
    stats: [
      { stat: { name: "hp" }, base_stat: 35 },
      { stat: { name: "attack" }, base_stat: 55 },
      { stat: { name: "defense" }, base_stat: 40 },
      { stat: { name: "special-attack" }, base_stat: 50 },
      { stat: { name: "special-defense" }, base_stat: 50 },
      { stat: { name: "speed" }, base_stat: 90 }
    ],
    height: 0.4,
    weight: 6
  },
  {
    id: 2,
    name: "Bulbasaur",
    image: list2,
    types: ["grass", "poison"],
    stats: [
      { stat: { name: "hp" }, base_stat: 45 },
      { stat: { name: "attack" }, base_stat: 49 },
      { stat: { name: "defense" }, base_stat: 49 },
      { stat: { name: "special-attack" }, base_stat: 65 },
      { stat: { name: "special-defense" }, base_stat: 65 },
      { stat: { name: "speed" }, base_stat: 45 }
    ],
    height: 0.7,
    weight: 6.9
  },
 
  {
    id: 3,
    name: "Gyarados",
    image: list3,
    types: ["grass", "water"],
    stats: [
      { stat: { name: "hp" }, base_stat: 78 },
      { stat: { name: "attack" }, base_stat: 84 },
      { stat: { name: "defense" }, base_stat: 78 },
      { stat: { name: "special-attack" }, base_stat: 109 },
      { stat: { name: "special-defense" }, base_stat: 85 },
      { stat: { name: "speed" }, base_stat: 100 }
    ],
    height: 1.7,
    weight: 90.5
  },
  {
    id:4,
    name:"Charmander",
    image: list4,
    types: ["fire", "flying"],
    stats: [
      { stat: { name: "hp" }, base_stat: 81 },
      { stat: { name: "attack" }, base_stat: 91 },
      { stat: { name: "defense" }, base_stat: 81 },
      { stat: { name: "special-attack" }, base_stat: 119 },
      { stat: { name: "special-defense" }, base_stat: 87 },
      { stat: { name: "speed" }, base_stat: 100 }
    ],
    height: 2.5,
    weight: 94.5

  },
  {
    id:5,
    name:"Blastoise",
    image: list5,
    types: ["grass", "water"],
    stats: [
      { stat: { name: "hp" }, base_stat: 81 },
      { stat: { name: "attack" }, base_stat: 91 },
      { stat: { name: "defense" }, base_stat: 81 },
      { stat: { name: "special-attack" }, base_stat: 119 },
      { stat: { name: "special-defense" }, base_stat: 87 },
      { stat: { name: "speed" }, base_stat: 100 }
    ],
    height: 2.5,
    weight: 94.5

  },
  {
    id:6,
    name:"Charizard",
    image: list6,
    types: ["fire", "flying"],
    stats: [
      { stat: { name: "hp" }, base_stat: 81 },
      { stat: { name: "attack" }, base_stat: 91 },
      { stat: { name: "defense" }, base_stat: 81 },
      { stat: { name: "special-attack" }, base_stat: 119 },
      { stat: { name: "special-defense" }, base_stat: 87 },
      { stat: { name: "speed" }, base_stat: 100 }
    ],
    height: 2.5,
    weight: 94.5

  },
  {
    id:7,
    name:"Ivysaur",
    image: list7,
    types: ["fire", "poison"],
    stats: [
      { stat: { name: "hp" }, base_stat: 81 },
      { stat: { name: "attack" }, base_stat: 91 },
      { stat: { name: "defense" }, base_stat: 81 },
      { stat: { name: "special-attack" }, base_stat: 119 },
      { stat: { name: "special-defense" }, base_stat: 87 },
      { stat: { name: "speed" }, base_stat: 100 }
    ],
    height: 2.55,
    weight: 80.5

  },
{
    id:8,
    name:"Jiggypuff",
    image: list8,
    types: ["normal", "flying"],
    stats: [
      { stat: { name: "hp" }, base_stat: 81 },
      { stat: { name: "attack" }, base_stat: 91 },
      { stat: { name: "defense" }, base_stat: 81 },
      { stat: { name: "special-attack" }, base_stat: 119 },
      { stat: { name: "special-defense" }, base_stat: 87 },
      { stat: { name: "speed" }, base_stat: 100 }
    ],
    height: 1.25,
    weight: 92.5

  },
  {
    id:9,
    name:"Lucario",
    image: list9,
    types: ["fire", "water"],
    stats: [
      { stat: { name: "hp" }, base_stat: 81 },
      { stat: { name: "attack" }, base_stat: 91 },
      { stat: { name: "defense" }, base_stat: 81 },
      { stat: { name: "special-attack" }, base_stat: 119 },
      { stat: { name: "special-defense" }, base_stat: 87 },
      { stat: { name: "speed" }, base_stat: 100 }
    ],
    height: 2,
    weight: 95.5

  },
  {
    id:10,
    name:"Snorlax",
    image: list10,
    types: ["grass", "water"],
    stats: [
      { stat: { name: "hp" }, base_stat: 81 },
      { stat: { name: "attack" }, base_stat: 91 },
      { stat: { name: "defense" }, base_stat: 81 },
      { stat: { name: "special-attack" }, base_stat: 119 },
      { stat: { name: "special-defense" }, base_stat: 87 },
      { stat: { name: "speed" }, base_stat: 100 }
    ],
    height: 2.5,
    weight: 94.5

  },
  {
    id:11,
    name:"Pikachu",
    image: list11,
    types: ["fire", "electric"],
    stats: [
      { stat: { name: "hp" }, base_stat: 81 },
      { stat: { name: "attack" }, base_stat: 91 },
      { stat: { name: "defense" }, base_stat: 81 },
      { stat: { name: "special-attack" }, base_stat: 119 },
      { stat: { name: "special-defense" }, base_stat: 87 },
      { stat: { name: "speed" }, base_stat: 100 }
    ],
    height: 0.5,
    weight: 90.5

  },
  {
    id:12,
    name:"Wartortle",
    image: list12,
    types: ["grass", "water"],
    stats: [
      { stat: { name: "hp" }, base_stat: 81 },
      { stat: { name: "attack" }, base_stat: 91 },
      { stat: { name: "defense" }, base_stat: 81 },
      { stat: { name: "special-attack" }, base_stat: 119 },
      { stat: { name: "special-defense" }, base_stat: 87 },
      { stat: { name: "speed" }, base_stat: 100 }
    ],
    height: 1,
    weight: 87.5

  },
  {
    id:13,
    name:"L.Majestic",
    image: list13,
    types: ["fire", "flying"],
    stats: [
      { stat: { name: "hp" }, base_stat: 99 },
      { stat: { name: "attack" }, base_stat: 91 },
      { stat: { name: "defense" }, base_stat: 92},
      { stat: { name: "special-attack" }, base_stat: 120 },
      { stat: { name: "special-defense" }, base_stat: 95 },
      { stat: { name: "speed" }, base_stat: 100 }
    ],
    height: 3.5,
    weight: 87.5
    
  },
  {
     id:14,
    name:"Metagross",
    image: list14,
    types: ["fire", "electric"],
    stats: [
      { stat: { name: "hp" }, base_stat: 99 },
      { stat: { name: "attack" }, base_stat: 91 },
      { stat: { name: "defense" }, base_stat: 92},
      { stat: { name: "special-attack" }, base_stat: 120 },
      { stat: { name: "special-defense" }, base_stat: 95 },
      { stat: { name: "speed" }, base_stat: 100 }
    ],
    height: 3.5,
    weight: 87.5
  },
  {
     id:15,
    name:"Cute eevee",
    image: list15,
    types: ["normal", "grass"],
    stats: [
      { stat: { name: "hp" }, base_stat: 99 },
      { stat: { name: "attack" }, base_stat: 91 },
      { stat: { name: "defense" }, base_stat: 92},
      { stat: { name: "special-attack" }, base_stat: 120 },
      { stat: { name: "special-defense" }, base_stat: 95 },
      { stat: { name: "speed" }, base_stat: 100 }
    ],
    height: 3.5,
    weight: 87.5
  },

];

function App() {
  const [pokemonList] = useState(pokemonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchBy] = useState('name');
  const [filteredPokemon, setFilteredPokemon] = useState(pokemonData);

  useEffect(() => {
    const filtered = pokemonList.filter(pokemon => {
      if (!searchTerm) return true;
      
      switch(searchBy) {
        case 'name':
          return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
        case 'type':
          return pokemon.types.some(type => 
            type.toLowerCase().includes(searchTerm.toLowerCase())
          );
        case 'id':
          return pokemon.id.toString().includes(searchTerm);
        default:
          return true;
      }
    });
    setFilteredPokemon(filtered);
  }, [searchTerm, searchBy, pokemonList]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };
  return (
    <div className="app">
      <header className="app-header">
        <h1>Pokémon Gaming</h1>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder={`Rechercher par ${searchBy === 'name' ? 'nom' : searchBy === 'type' ? 'type' : 'ID'}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="clear-search" onClick={() => setSearchTerm('')}>
              <FaTimes />
            </button>
          )}
        </div>
      </header>

      <main className="main-content">
        {filteredPokemon.length > 0 ? (
          <div className="pokemon-grid">
            {filteredPokemon.map(pokemon => (
              <div 
                key={pokemon.id} 
                className="pokemon-card"
                onClick={() => setSelectedPokemon(pokemon)}
              >
                <div className="pokemon-image-container">
                  <img 
                    src={pokemon.image} 
                    alt={pokemon.name} 
                    className="pokemon-image"
                    loading="lazy"
                  />
                  <button 
                    className={`favorite-btn ${favorites.includes(pokemon.id) ? 'favorited' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(pokemon.id);
                    }}
                  >
                    <FaStar />
                  </button>
                </div>
                <div className="pokemon-info">
                  <h3>{pokemon.name}</h3>
                  <p className="pokemon-number">#{pokemon.id.toString().padStart(3, '0')}</p>
                  <div className="pokemon-types">
                    {pokemon.types.map(type => (
                      <span key={type} className={`type-badge type-${type}`}>
                        {type === 'grass' && <FaLeaf className="type-icon" />}
                        {type === 'poison' && <FaSkull className="type-icon" />}
                        {type === 'fire' && <FaFire className="type-icon" />}
                        {type === 'water' && <FaTint className="type-icon" />}
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <FaSearch className="no-results-icon" />
            <h3>Aucun Pokémon trouvé</h3>
            <p>Essayez avec un autre terme de recherche</p>
          </div>
        )}
      </main>
{selectedPokemon && (
  <div className="pokemon-modal" onClick={() => setSelectedPokemon(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-modal" onClick={() => setSelectedPokemon(null)}>
        <FaTimes />
      </button>
      
      <div className="pokemon-id">#{selectedPokemon.id.toString().padStart(3, '0')}</div>
      
      <div className="modal-header">
        <h2 className="pokemon-name">{selectedPokemon.name}</h2>
        <div className="pokemon-types">
          {selectedPokemon.types.map(type => (
            <span key={type} className={`type-badge type-${type}`}>
              {type.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
      
      <img 
        src={selectedPokemon.image} 
        alt={selectedPokemon.name}
        className="modal-pokemon-image"
      />
      
      <div className="modal-body">
        <div className="modal-section">
          <h3 className="section-title">Description</h3>
          <p className="pokemon-description">{selectedPokemon.description || "Aucune description disponible."}</p>
        </div>
        
        <div className="physical-stats">
          <div className="stat-item">
            <strong>Taille</strong>
            <p>{selectedPokemon.height} m</p>
          </div>
          <div className="stat-item">
            <strong>Poids</strong>
            <p>{selectedPokemon.weight} kg</p>
          </div>
        </div>
        
        <div className="modal-section">
          <h3 className="section-title">Types</h3>
          <div className="pokemon-types-list">
            {selectedPokemon.types.map(type => (
              <span key={type} className={`type-badge type-${type}`}>
                {type.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
        
        {selectedPokemon.category && (
          <div className="modal-section">
            <h3 className="section-title">Catégorie</h3>
            <p>{selectedPokemon.category}</p>
          </div>
        )}
      </div>
    </div>
  </div>
)}

      <footer className="app-footer">
        <p>Pokémon Gaming - Collection Personnalisée</p>
        <p><FaInfoCircle /> Cliquez sur un Pokémon pour voir ses détails</p>
      </footer>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [metadata, setMetadata] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedRarity, setSelectedRarity] = useState('all');

  useEffect(() => {
    fetch('metadata.json')
      .then(response => response.json())
      .then(data => setMetadata(data))
      .catch(error => console.error('Error fetching metadata:', error));
  }, []);

  const renderResult = (inscription) => {
    const { name, attributes, rarity, overall_rarity, image_path } = inscription;
    return (
      <div key={name} className="result-item">
        <h2>{name}</h2>
        <img src={image_path} alt={name} style={{ maxWidth: '200px', borderRadius: '10px' }} />
        <p><strong>Overall Rarity:</strong> {overall_rarity}</p>
        <p><strong>Background:</strong> {attributes.Background} ({rarity?.Background})</p>
        <p><strong>Body:</strong> {attributes.Body} ({rarity?.Body})</p>
        <p><strong>Outfits:</strong> {attributes.Outfits} ({rarity?.Outfits})</p>
        <p><strong>Back Accessories:</strong> {attributes['Back  Accessories']} ({rarity?.['Back  Accessories']})</p>
        <p><strong>Mouth:</strong> {attributes.Mouth} ({rarity?.Mouth})</p>
        <p><strong>Eyes:</strong> {attributes.Eyes} ({rarity?.Eyes})</p>
        <p><strong>Head:</strong> {attributes.Head} ({rarity?.Head})</p>
      </div>
    );
  };
  

  const searchMetadata = (query, rarity) => {
    const filteredResults = metadata.filter(inscription => {
      const matchesQuery = inscription.name.toLowerCase().includes(query.toLowerCase());
      const matchesRarity = rarity === 'all' || (inscription.overall_rarity && inscription.overall_rarity.toLowerCase() === rarity.toLowerCase());
      return matchesQuery && matchesRarity;
    });
    setFilteredResults(filteredResults);
  };

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    searchMetadata(newQuery, selectedRarity);
  };

  const handleRarityChange = (event) => {
    const newRarity = event.target.value;
    setSelectedRarity(newRarity);
    searchMetadata(query, newRarity);
  };

  return (
    <div className='container'>
      <h1 className="title">Doginal Ducks Rarity</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Inscription ID Or Duck #"
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
        <select value={selectedRarity} onChange={handleRarityChange} className="rarity-filter" style={{
    padding: '10px',          /* Adjust padding as needed */
    margin: '10px',           /* Adjust margin as needed */
    borderRadius: '5px',      /* Adjust border radius as needed */
    border: '1px solid #ccc'  /* Optional: Add border for better visibility */
  }}
        >
          <option value="all">All</option>
          {/* <option value="legendary">Legendary</option> */}
          <option value="rare">Rare</option>
          <option value="uncommon">Uncommon</option>
          <option value="common">Common</option>
        </select>
       
      </div>
      <div id="result">
        {filteredResults.length > 0 ? (
          filteredResults.map(inscription => renderResult(inscription))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default App;

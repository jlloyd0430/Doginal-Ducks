import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [metadata, setMetadata] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    fetch('/metadata.json')
      .then(response => response.json())
      .then(data => setMetadata(data))
      .catch(error => console.error('Error fetching metadata:', error));
  }, []); // Add an empty dependency array to run the effect only once

  const renderResult = (inscription) => {
    const { name, attributes, rarity } = inscription;

    return (
      <div key={name} className="result-item">
        <h2>{name}</h2>
        <p><strong>Background:</strong> {attributes.Background} ({rarity.Background})</p>
        <p><strong>Body:</strong> {attributes.Body} ({rarity.Body})</p>
        <p><strong>Outfits:</strong> {attributes.Outfits} ({rarity.Outfits})</p>
        <p><strong>Back Accessories:</strong> {attributes['Back Acessories']} ({rarity['Back Acessories']})</p>
        <p><strong>Mouth:</strong> {attributes.Mouth} ({rarity.Mouth})</p>
        <p><strong>Eyes:</strong> {attributes.Eyes} ({rarity.Eyes})</p>
        <p><strong>Head:</strong> {attributes.Head} ({rarity.Head})</p>
      </div>
    );
  };

  const searchMetadata = (query) => {
    const filteredResults = metadata.filter(inscription => 
      inscription.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredResults(filteredResults);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    searchMetadata(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Inscription ID"
        value={query}
        onChange={handleInputChange}
      />

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

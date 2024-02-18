import React, { useState } from 'react';

const GifSearch = ({ onSearchSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(query);
  };

  return (
    <div>
      <h2>Gif Search</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter search query:
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default GifSearch;

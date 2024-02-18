import React, { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);

  const handleSearchSubmit = (query) => {
    const apiKey = 'ItHcSI0ZsM5I6k3XTfDYoVXGa3ISYgPg';  
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const first3Gifs = data.data.slice(0, 3);
        setGifs(first3Gifs);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <GifSearch onSearchSubmit={handleSearchSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;

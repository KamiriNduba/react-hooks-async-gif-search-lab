import React from 'react';

const GifList = ({ gifs }) => {
  return (
    <div>
      <h2>Gif List</h2>
      <ul>
        {gifs.map((gif) => (
          <li key={gif.id}>
            <img src={gif.images.original.url} alt={gif.slug} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GifList;

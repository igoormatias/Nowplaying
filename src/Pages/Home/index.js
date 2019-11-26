import React, { useEffect, useState } from 'react';

import Header from '../../Components/Header';

import { Container, Input, Button, ArtistList } from './styles';

const token =
  'BQCqrqF1NVzRyf-QYJc-FGljOaHfDFnZNUGLQzn3aD-bM2XrilIpmjMh80DNyMfL4KPShroTA_K41HirCA8Glxauvd2QsfU0dzxCyboOdwLD-FFUH4BvItSB4Dh5FiWsn-0OdhZWzYBCpZX7';

function Home() {
  const [query, setQuery] = useState(['Chris Brown']);
  const [artists, setArtists] = useState([]);

  // const [token settoken] = useState(null);

  function fetchArtist() {
    const baseUrl = `https://api.spotify.com/v1/search?q=${query}&type=artist&limit=9`;

    fetch(baseUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setArtists(data.artists.items));
  }
  useEffect(() => {
    fetchArtist();
  }, []);

  // function authenticate() {
  //   fetch('/api/me')
  //   .then(res =  res.json())
  //   .then(data => {
  //     settoken(data.token);
  //   });
  // }

  function handleSubmit(e) {
    e.preventDefault();
    fetchArtist();
  }

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit}>
          <h1>O que está procurando?</h1>
          <Input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Busque artistas,albuns ou podcasts"
          />
          <Button>Pesquisar</Button>
        </form>
      </Container>
      <ArtistList>
        <li>
          {artists.map((artist, index) => {
            const img = artist.images[0];

            return (
              <div key={index}>
                {img ? (
                  <span>{img && <img src={img.url} alt="cantor" />}</span>
                ) : (
                  <span>
                    <img
                      src="https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png"
                      alt="cantor"
                    />
                  </span>
                )}
                <h3>{artist.name}</h3>
                <h4>Popularidade:{artist.popularity}%</h4>
                {artist.genres[0] ? (
                  <h5>Genero: {artist.genres[0]}</h5>
                ) : (
                  <h5 />
                )}
              </div>
            );
          })}
        </li>
      </ArtistList>
    </>
  );
}
export default Home;

import React, { useEffect, useState } from 'react';

import SpotifyWebApi from 'spotify-web-api-js';
import Header from '../../Components/Header';

import { Container, Input, Button, ArtistList } from './styles';

const spotifyApi = new SpotifyWebApi();

function Home() {
  const [query, setQuery] = useState(['']);
  const [artists, setArtists] = useState([]);

  const [token, settoken] = useState(null);

  useEffect(() => {
    const params = getHashParams();
    settoken(params.access_token);

    if (token) {
      spotifyApi.setAccessToken(token);
    }
  }, []);

  function getHashParams() {
    const hashParams = {};
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }

    return hashParams;
  }

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

  //  function authenticate() {
  //    fetch('/api/me')
  //    .then(res =  res.json())
  //    .then(data => {
  //      settoken(data.token);
  //    });
  //  }

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
            placeholder="Busque artistas"
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

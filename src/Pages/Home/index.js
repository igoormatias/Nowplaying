import React, { useEffect, useState } from 'react';

import Header from '../../Components/Header';

import { Container, Input, Button } from './styles';

const token =
  'BQATe7skDItCe0_fNzSQiQzUXb0SSGgdEwExmfPq-FOu_oysng-k3mALg9X3jObNBWdMpiRM_aqYHDf9BJHGMgbr3nSW_Fq0Y7im_uMUNK7uFMx1Kh2OO2JL0YUcDNoClCQo8oRoTCuVPOkz';

function Home() {
  const [query, setQuery] = useState([]);
  const [artists, setArtists] = useState([]);

  // const [token settoken] = useState(null);

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

  function fetchArtist() {
    const baseUrl = `https://api.spotify.com/v1/search?q=${query}&type=artist`;

    fetch(baseUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setArtists(data.artists.items));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchArtist();
  }

  return (
    <>
      <Header />
      <Container>
        <h1>O que está procurando?</h1>
        <Input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Busque artistas,albuns ou podcasts"
        />
        <Button onSubmit={handleSubmit}>Pesquisar</Button>
        <div>
          <li>
            {artists.map((artist, index) => (
              <div key={index.id}>
                <span>
                  <img src={artist.images[0].url} alt="cantor" />
                </span>
                <h3>{artist.name}</h3>
              </div>
            ))}
          </li>
        </div>
      </Container>
    </>
  );
}
export default Home;

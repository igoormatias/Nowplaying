import React from 'react';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>Now Playing</h1>
      <a href="http://localhost:8888">
        <button type="button">Obter Token</button>
      </a>
    </Container>
  );
}

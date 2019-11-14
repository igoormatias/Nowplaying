import React from 'react';
import Header from '../../Components/Header'

import { Container, Input, Button,Card } from './styles';

export default function Home() {
  return (
      <>
    <Header />
    <Container>
       <h1>O que está procurando?</h1>
       <Input type="text" placeholder="Busque artistas,albuns ou podcasts"/>
    <Button>Pesquisar</Button>
    <div>
    <li>
      <span>
        <img src="https://rap24horas.com.br/wp-content/uploads/2018/07/chrisbrown-1.png" alt="cantor" />
      </span>
      <h3>Artista: Chris Brown</h3>
      <h4>Seguidores: 150000</h4>
      <h5>Albuns: 27</h5>
    </li>
    </div>
       
        
    </Container>

    </>
  );
}

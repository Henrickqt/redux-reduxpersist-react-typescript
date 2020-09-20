import React from 'react';

import Header from '../../components/Header';
import Body from '../../components/Body';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
}

export default Home;

import React from 'react';

import Header from '../../components/Header';
import Main from '../../components/Main';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default Home;

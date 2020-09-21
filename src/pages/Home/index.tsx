import React from 'react';

import Header from '../../components/Header';
import Body from '../../components/Body';

import { Page, Container } from './styles';

function Home() {
  return (
    <Page>
      <Container>
        <Header />
        <Body />
      </Container>
    </Page>
  );
}

export default Home;

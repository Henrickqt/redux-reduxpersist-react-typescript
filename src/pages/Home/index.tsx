import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <h1>Hello World!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
        Inventore animi quo veritatis rerum quia architecto distinctio, <br/>
        consequuntur beatae quis. Quae, error suscipit voluptatem neque <br/>
        omnis temporibus adipisci labore vero eveniet!
      </p>
    </Container>
  );
}

export default Home;

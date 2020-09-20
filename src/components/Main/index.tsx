import React from 'react';

import List from '../List';
import Statistic from '../Statistic';

import { Container } from './styles';

function Main() {
  return (
    <Container>
      <List />
      <List />
      <Statistic />
    </Container>
  );
}

export default Main;

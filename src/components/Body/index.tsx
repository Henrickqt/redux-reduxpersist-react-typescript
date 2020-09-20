import React from 'react';

import List from '../List';
import Statistic from '../Statistic';

import { Container } from './styles';

function Main() {
  return (
    <Container>
      <List title="Produtos disponíveis" />
      <List title="Produtos selecionados" />
      <Statistic />
    </Container>
  );
}

export default Main;

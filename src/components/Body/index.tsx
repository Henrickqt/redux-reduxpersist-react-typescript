import React from 'react';

import List from '../List';
import Statistic from '../Statistic';

import { Container } from './styles';

function Main() {
  return (
    <Container>
      <List title="PRODUTOS DISPONÍVEIS" />
      <List title="PRODUTOS SELECIONADOS" />
      <Statistic />
    </Container>
  );
}

export default Main;

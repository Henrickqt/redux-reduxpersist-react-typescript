import React from 'react';

import Subject from '../../shared/Subject';
import LineChart from '../../shared/LineChart';

import { Container, Value } from './styles';

function Statistic() {
  return (
    <Container>
      <Subject title="Estatísticas">
        <LineChart title="Saudável" />
        <LineChart title="Não-saudável" />
        <LineChart title="Cuidados médicos" />
        <LineChart title="Higiene" />
        <LineChart title="Limpeza" />
        <LineChart title="Outros" />
      </Subject>
      
      <Subject title="Valor total">
        <Value>
          R$ 1458,39
        </Value>
      </Subject>
    </Container>
  );
}

export default Statistic;

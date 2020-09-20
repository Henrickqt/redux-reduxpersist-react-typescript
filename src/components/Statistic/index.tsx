import React from 'react';

import Subject from '../../shared/Subject';
import LineChart from '../../shared/LineChart';

import { Container, Value } from './styles';

function Statistic() {
  return (
    <Container>
      <Subject title="ESTATÍSTICAS">
        <LineChart title="Saudável" />
        <LineChart title="Não-saudável" />
        <LineChart title="Cuidados médicos" />
        <LineChart title="Higiene" />
        <LineChart title="Limpeza" />
        <LineChart title="Outros" />
      </Subject>
      
      <Subject title="VALOR TOTAL">
        <Value>
          R$ 1458,39
        </Value>
      </Subject>
    </Container>
  );
}

export default Statistic;

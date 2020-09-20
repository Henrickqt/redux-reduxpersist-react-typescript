import React from 'react';

import { Container, Title, Chart } from './styles';

interface LineChartProps {
  title: string;
}

const LineChart: React.FC<LineChartProps> = (props) => {
  return (
    <Container>
      <Title>
        {props.title}
      </Title>
      <Chart />
    </Container>
  );
}

export default LineChart;

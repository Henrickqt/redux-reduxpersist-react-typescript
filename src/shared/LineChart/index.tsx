import React from 'react';

import { Container, Title, Chart } from './styles';

interface LineChartProps {
  title: string;
  color: string;
  percentage: number;
}

const LineChart: React.FC<LineChartProps> = (props) => {
  return (
    <Container>
      <Title>
        {props.title}
      </Title>
      <Chart 
        color={props.color} 
        percentage={props.percentage} 
      />
    </Container>
  );
}

export default LineChart;
